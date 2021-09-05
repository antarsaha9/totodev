import { Formik } from "formik";
import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  ProgressBar,
} from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { createYupObject } from "src/services/helper";
import * as yup from "yup";
import LoadingButton from "~components/Buttons/LoadingButton";
import SidebarCard from "~components/Cards/SidebarCard";
import { addSellerItem } from "~services/itemService";
import SelectBox from "./components/SelectBox";

const UploadSection = () => {
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFormSubmit = async (values) => {
    const data = await addSellerItem(values, setProgress);

    if (data) NotificationManager.success("Item added successfully");
    else NotificationManager.error("Couldn't add item");
  };

  return (
    <Container>
      <Formik
        initialValues={profile || initialValue}
        validationSchema={formSchema}
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
        }) => (
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
                          <SelectBox
                            data={categoryList}
                            filterBox={true}
                            defaultValue="Search Categories"
                            name="category_name"
                            defaultValue={values.category_name}
                            setFieldValue={setFieldValue}
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
                            name="description"
                            as="textarea"
                            rows="6"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></FormControl>
                        </FormGroup>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label">Upload Image</label>
                          <div className="custom-file">
                            <FormControl
                              type="file"
                              className="custom-file-input"
                              name="example-file-input-custom"
                              accept="image/*"
                              isInvalid={touched.img && errors.img}
                              onChange={(e) =>
                                setFieldValue("img", e.target.files[0])
                              }
                            />
                            <label className="custom-file-label">
                              {values.img?.name || "Choose file"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            File Included<span className="text-danger">*</span>
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
        )}
      </Formik>
    </Container>
  );
};

const categoryList = [
  "HTML",
  "CSS",
  "Javascript",
  "Wordpress",
  "Angular",
  "PHP",
  "PSD",
  "Others",
];

const yupData = {
  category_name: ["HTML", yup.string().required("name is required")],
  item_name: ["Test Item", yup.string().required("name is required")],
  description: [
    "This is a short description",
    yup.string().required("${path} is required"),
  ],
  tags: ["website, ecommerce", yup.string().required("${path} is required")],
  price: ["645", yup.number().required("${path} is required")],
  file: ["", yup.mixed().required("${path} is required")],
  img: ["", yup.mixed().required("${path} is required")],
};

const initialValue = createYupObject(yupData).initialValue;

const formSchema = yup.object().shape(createYupObject(yupData).shape);

export default UploadSection;
