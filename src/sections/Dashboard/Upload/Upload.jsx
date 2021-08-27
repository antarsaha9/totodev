import { Formik } from "formik";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { createYupObject } from "src/services/helper";
import * as yup from "yup";
import SidebarCard from "~components/Cards/SidebarCard";
import SelectBox from "./components/SelectBox";

const UploadSection = () => {
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFormSubmit = async (values) => {
    NotificationManager.success(data);
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
                            data={[
                              "HTML",
                              "Wordpress",
                              "Angular",
                              "PHP",
                              "PSD",
                              "Others",
                            ]}
                            filterBox={true}
                            defaultValue="Search Categories"
                            name="category"
                            defaultValue={values.category}
                            setFieldValue={setFieldValue}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                          <label className="form-label text-dark">
                            Enter Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label text-dark">
                            Description
                          </label>
                          <textarea
                            className="form-control h-auto"
                            name="example-textarea-input"
                            rows={6}
                            placeholder="Enter your description"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label">Upload Image</label>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              name="example-file-input-custom"
                            />
                            <label className="custom-file-label">
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label text-dark">Image1</label>
                          <SelectBox
                            data={["Image2-1", "Image1-1"]}
                            defaultValue="Image1"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label text-dark">Image2</label>
                          <SelectBox
                            data={["Image2-1", "Image1-1"]}
                            defaultValue="Image2"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            File Included<span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter here"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Item Dimensions
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Dimensions"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="form-label text-dark">
                            Tags <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control h-100"
                            placeholder="Enter Item tags..."
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">Item Theme:</label>
                            </div>
                            <div className="col-md-9">
                              <SelectBox
                                data={[
                                  "Default Theme",
                                  "Light Theme",
                                  "Dark Theme",
                                  "Sidebar light Theme",
                                  "Sidebar Dark Theme",
                                  "RTL",
                                ]}
                                defaultValue="Choose Theme"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group ">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label" id="inputEmail4">
                                Color Theme:
                              </label>
                            </div>
                            <div className="col-md-9">
                              <div className="custom-controls-stacked d-flex">
                                <label className="custom-control custom-radio mr-4">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios"
                                    defaultValue="option1"
                                    defaultChecked
                                  />
                                  <span className="custom-control-label">
                                    Light
                                  </span>
                                </label>
                                <label className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="example-radios"
                                    defaultValue="option2"
                                  />
                                  <span className="custom-control-label">
                                    Dark
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <div className="row">
                            <div className="col-md-3">
                              <label className="form-label">
                                Responsive Layout:
                              </label>
                            </div>
                            <div className="col-md-9">
                              <label className="custom-switch pl-0">
                                <input
                                  type="checkbox"
                                  name="custom-switch-checkbox"
                                  className="custom-switch-input"
                                />
                                <span className="custom-switch-indicator" />
                                <span className="custom-switch-description">
                                  On/Off
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="form-group">
                <label className="form-label text-dark">Price</label>
                <input type="text" className="form-control" placeholder="$24" />
              </div>
              <div className="form-group">
                <label className="form-label text-dark">Message</label>
                <textarea
                  className="form-control h-auto"
                  name="example-textarea-input"
                  rows={6}
                  placeholder="text here.."
                />
              </div>
              <div className="custom-controls-stacked">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    defaultValue="option1"
                  />
                  <span className="custom-control-label">
                    I Agree, et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atcorrupti quos dolores et
                    quas molestias excepturi sint occaecati cupiditate non
                    provident
                  </span>
                </label>
              </div> */}
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <a href="#" className="btn ripple  btn-primary">
                      Submit Now
                    </a>
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

const yupData = {
  // key: [value, yup rules]
  first_name: ["", yup.string().required("${path} is required")],
  last_name: ["", yup.string().required("${path} is required")],
  email: [
    "",
    yup.string().email("Invalid email").required("${path} is required"),
  ],
  phone: [""],
  address: [""],
  city: [""],
  country: [""],
  postal_code: [""],
  google_id: [""],
  facebook_id: [""],
  twitter_id: [""],
  pinterest_id: [""],
  about: [""],
  image_url: [""],
};

const initialValue = createYupObject(yupData).initialValue;

const formSchema = yup.object().shape(createYupObject(yupData).shape);

export default UploadSection;
