import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  Badge,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  ProgressBar,
} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { NotificationManager } from "react-notifications";
import { createYupObject } from "src/services/helper";
import styled from "styled-components";
import * as yup from "yup";
import LoadingButton from "~components/Buttons/LoadingButton";
import SidebarCard from "~components/Cards/SidebarCard";
import SelectBox from "~components/Forms/SelectBox";
import Dropdown from "~components/Forms/DropdownFilter";
import {
  addSellerItem,
  getMyItem,
  updateSellerItem,
} from "~services/itemService";
import { paths } from "src/helper";
import LoaderSpinner from "~components/Cards/LoaderSpinner";

const ProductImageBox = styled.img`
  height: 240px;
  width: 320px;
  background: grey;
  border-radius: 4px;
  margin-bottom: 1rem;
  max-width: 100%;
`;

const UploadSection = () => {
  const intervalRef = useRef();
  const ppcRef = useRef();
  const [product, setProduct] = useState({ loading: false, data: initialValues });
  const [postProcess, setPostProcess] = useState({ loading: false, data: null });
  const [progress, setProgress] = useState(0);

  const { query, ...router } = useRouter();

  const showNotification = (data, actionName) => {
    if (data) {
      NotificationManager.success(`Item ${actionName}ed successfully`);
    } else NotificationManager.error(`Couldn't ${actionName} item`);
  };

  function loadPostProcess() {
    // console.log("Post processing triggered");
    setPostProcess({ loading: true, data: {} })
    getMyItem(query.id)
      .then((data) => {
        if (data) {
          setPostProcess({ loading: false, data: data.file_scan_result });
          if (data.file_scan_result.result && data.file_scan_result.result.length > 0) {
            clearInterval(intervalRef.current);
            if (data.file_scan_result.result === 'GOOD') {
              NotificationManager.success('Item added successfully!');
              setTimeout(() => {
                router.push(paths.ManageItems);
              }, 3000);
            }
            else {
              NotificationManager.error('Uploaded file failed post processing test!');
            }
          }
        }
      });
  }
  function startPostProcess(data) {
    setPostProcess({ loading: false, data: data.file_scan_result });
    if (!data.file_scan_result.result) {
      const id = setInterval(loadPostProcess, 60000);
      intervalRef.current = id;
      ppcRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  function load() {
    if (query.flow && query.flow === 'continuous') {
      setPostProcess({ loading: true, data: {} });
      getMyItem(query.id)
        .then((data) => {
          if (data) {
            startPostProcess(data);
          }
          else router.push(paths.Upload);
        });
    }
    else {
      setProduct({ loading: true, data: {} });
      getMyItem(query.id)
        .then((data) => {
          if (data) {
            setProduct({ loading: false, data });
            startPostProcess(data);
          }
          else router.push(paths.Upload);
        });
    }
  }

  const handleFormSubmit = async (values, { resetForm }) => {
    // update item
    if (values.id) {
      const data = await updateSellerItem(values, setProgress);
      showNotification(data, "update");
      setTimeout(() => {
        setProgress(0);
        load();
      }, 3000);
    }
    // add item
    else {
      const data = await addSellerItem(values, setProgress);
      // showNotification(data, "add");
      // resetForm();
      setProgress(0);
      router.push({ pathname: paths.Upload, query: { id: data.item_id, flow: 'continuous' } }, undefined, { shallow: true });
      // setTimeout(() => {
      // }, 3000);
    }
  };

  // handle update if item already exists
  useEffect(() => {
    if (query.id) {
      load();
    }
    if (intervalRef.current)
      return () => clearInterval(intervalRef.current);
  }, [query]);

  return (
    <Container>
      {product.loading ? <LoaderSpinner /> : <Formik
        initialValues={product.data}
        validationSchema={product.data.id ? updateFormSchema : formSchema}
        enableReinitialize={true}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="row spb">
                <div className="col-lg-8 col-md-12 col-md-12">
                  <div className="card mb-xl-0">
                    <div className="card-header">
                      <h3 className="card-title">Upload Items</h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12 col-md-12">
                          <div className="form-group">
                            {/* <SelectBox
                              data={categoryList}
                              filterBox={true}
                              defaultValue="Search Categories"
                              name="category_name"
                              defaultValue={values.category_name}
                              setFieldValue={setFieldValue}
                            /> */}

                            <Dropdown
                              data={categoryList}
                              // className="form-control" 
                              ariaLabel="Select Category"
                              defaultValue={values.category_name}
                              handleChange={e => setFieldValue('category_name', e)}
                              name="category_name"
                            />

                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12">
                          <FormGroup>
                            <FormLabel>Enter Name</FormLabel>
                            <FormControl
                              type="text"
                              placeholder="Enter Name"
                              name="item_name"
                              value={values.item_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.item_name && errors.item_name}
                            />
                            {touched.item_name && errors.item_name && (
                              <FormControl.Feedback type="invalid">
                                {errors.item_name}
                              </FormControl.Feedback>
                            )}
                          </FormGroup>
                        </div>
                        <div className="col-md-12">
                          <FormGroup>
                            <FormLabel>Description</FormLabel>
                            <FormControl
                              className="h-auto"
                              type="text"
                              placeholder="Enter your description"
                              name="item_description"
                              as="textarea"
                              rows="6"
                              value={values.item_description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            ></FormControl>
                          </FormGroup>
                        </div>
                        <div className="col-md-12">
                          {values.img ? (
                            <ProductImageBox
                              src={URL.createObjectURL(values.img)}
                            />
                          ) : values.image_url ? (
                            <ProductImageBox src={values.image_url} />
                          ) : null}
                          <div className="form-group">
                            <label className="form-label">Upload Image</label>
                            <div className="custom-file">
                              <FormControl
                                type="file"
                                className="custom-file-input"
                                name="img"
                                accept="image/*"
                                isInvalid={touched.img && errors.img}
                                onChange={(e) =>
                                  setFieldValue("img", e.target.files[0])
                                }
                              />
                              <label className="custom-file-label">
                                {values.img?.name || "Choose image 320x240"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              File Included
                              <span className="text-danger">*</span>
                            </label>
                            <div className="custom-file">
                              <FormControl
                                type="file"
                                className="custom-file-input"
                                name="example-file-input-custom"
                                isInvalid={touched.file && errors.file}
                                onChange={(e) =>
                                  setFieldValue("file", e.target.files[0])
                                }
                              />
                              <label className="custom-file-label">
                                {values.file?.name || "Choose file"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <FormGroup>
                            <FormLabel>
                              Price
                              <span className="text-danger">*</span>
                            </FormLabel>
                            <FormControl
                              type="number"
                              step="0.01"
                              placeholder="Price"
                              name="price"
                              value={values.price}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.price && errors.price}
                            />
                            {touched.price && errors.price && (
                              <FormControl.Feedback type="invalid">
                                {errors.price}
                              </FormControl.Feedback>
                            )}
                          </FormGroup>
                        </div>

                        <div className="col-md-12">
                          <FormGroup>
                            <FormLabel>
                              Tags <span className="text-danger">*</span>
                            </FormLabel>
                            <FormControl
                              className="h-auto"
                              type="text"
                              placeholder="Use comma to separate"
                              name="tags"
                              // as="textarea"
                              // rows="3"
                              value={values.tags}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.tags && errors.tags}
                            ></FormControl>
                            {touched.tags && errors.tags && (
                              <FormControl.Feedback type="invalid">
                                {errors.tags}
                              </FormControl.Feedback>
                            )}
                          </FormGroup>
                        </div>
                      </div>

                      {progress > 0 && (
                        <ProgressBar
                          now={progress}
                          label={`${progress}%`}
                          variant="primary"
                        />
                      )}
                      {postProcess.loading ? <>Refreshing post processing state...</> : postProcess.data &&
                        <div ref={ppcRef}>
                          <div>
                            <h5>Post processing state: {postProcess.data.state}
                            </h5>
                          </div>
                          {!postProcess.data.result && <div>
                            <h5>Estimated time: 3 minutes</h5>
                          </div>}
                          <div>
                            <h5>Progress: {postProcess.data.progress}%</h5>
                          </div>
                          {postProcess.data.result && <div>
                            <h5>Result: <Badge variant={postProcess.data.result === "GOOD" ? "success" : "danger"}>{postProcess.data.result}</Badge>
                            </h5>
                          </div>
                          }
                        </div>
                      }
                    </div>

                    <div className="card-footer text-right">
                      <LoadingButton loading={isSubmitting}>
                        Submit Now
                      </LoadingButton>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <SidebarCard
                    title="Benefits Of Premium Items"
                    listItems={[
                      {
                        item: "Premium Items Active",
                        id: "one",
                      },
                      {
                        item: "Premium ads are displayed on top",
                        id: "two",
                      },
                      {
                        item: "Premium ads will be Show in Google results",
                        id: "three",
                      },
                      {
                        item: "Money Not Refundable",
                        id: "four",
                      },
                    ]}
                  />
                  <SidebarCard
                    title="Terms And Conditions"
                    more={true}
                    listItems={[
                      {
                        item: "Money Not Refundable",
                        id: "one",
                      },
                      {
                        item: "You can renew your Premium ad after experted.",
                        id: "two",
                      },
                      {
                        item: "Premium ads are active for depend on package.",
                        id: "three",
                      },
                    ]}
                  />
                  <SidebarCard
                    title="Safety Tips For Buyers"
                    more={true}
                    listItems={[
                      {
                        item: "Meet Seller at public Plac",
                        id: "one",
                      },
                      {
                        item: "Check item before you buy",
                        id: "two",
                      },
                      { item: "Pay only after collecting item", id: "three" },
                    ]}
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Formik>}
    </Container>
  );
};

const categoryList = [
  "HTML",
  "CSS",
  "JavaScript",
  "Wordpress",
  "Angular",
  "PHP",
  "PSD",
  "Others",
];

const yupData = {
  category_name: [categoryList[0], yup.string().required("Caterory is required")],
  item_name: ["", yup.string().required("Item name is required")],
  item_description: ["", yup.string().required("Description is required")],
  // tags: ["", yup.string().required("${path} is required")],
  tags: ["", yup.string()],
  price: ["", yup.number().required("Price is required")],
  file: ["", yup.mixed().required("Item file is required")],
  img: ["", yup.mixed().required("Item image is required")],
  // file: ["", yup.mixed()],
  // img: ["", yup.mixed()],
};

const initialValues = createYupObject(yupData).initialValue;
const yupObject = createYupObject(yupData).shape;
const formSchema = yup.object().shape(yupObject);

const updateFormYupObject = { ...yupObject };
delete updateFormYupObject.file;
delete updateFormYupObject.img;
const updateFormSchema = yup.object().shape(updateFormYupObject);

export default UploadSection;
