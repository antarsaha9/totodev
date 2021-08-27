import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
  ProgressBar,
  Row,
  Spinner,
} from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { createYupObject } from "src/services/helper";
import { getMyProfile, updateProfile } from "src/services/profileService";
import * as yup from "yup";
import SelectBox from "~components/Forms/SelectBox";

const EditSection = () => {
  const [profile, setProfile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFormSubmit = async (values) => {
    const data = await updateProfile(values, setProgress);
    NotificationManager.success(data);
  };

  const handleFileSelect = (e, setFieldValue) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setFieldValue("img", file);
    setFieldValue("image_url", url);
  };

  useEffect(() => {
    getMyProfile().then((data) => {
      setProfile(data);
    });
  }, []);

  return (
    <Container className="spb">
      <Row>
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
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="card mb-0">
                  <div className="card-header">
                    <h3 className="card-title">Edit Profile</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>First Name</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.first_name && errors.first_name}
                          />
                          {touched.first_name && errors.first_name && (
                            <FormControl.Feedback type="invalid">
                              {errors.first_name}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.last_name && errors.last_name}
                          />
                          {touched.last_name && errors.last_name && (
                            <FormControl.Feedback type="invalid">
                              {errors.last_name}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Email</FormLabel>
                          <FormControl
                            type="email"
                            className="form-control"
                            placeholder="abc@xmail.com"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.email && errors.email}
                          />
                          {touched.email && errors.email && (
                            <FormControl.Feedback type="invalid">
                              {errors.email}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl
                            type="number"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.phone && errors.phone}
                          />
                          {touched.phone && errors.phone && (
                            <FormControl.Feedback type="invalid">
                              {errors.phone}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-md-12">
                        <FormGroup>
                          <FormLabel>Address</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.address && errors.address}
                          />
                          {touched.address && errors.address && (
                            <FormControl.Feedback type="invalid">
                              {errors.address}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <FormGroup>
                          <FormLabel>City</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={touched.city && errors.city}
                          />
                          {touched.city && errors.city && (
                            <FormControl.Feedback type="invalid">
                              {errors.city}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <FormGroup>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl
                            className="form-control"
                            placeholder="Postal Code"
                            name="postal_code"
                            type="number"
                            value={values.postal_code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              touched.postal_code && errors.postal_code
                            }
                          />
                          {touched.postal_code && errors.postal_code && (
                            <FormControl.Feedback type="invalid">
                              {errors.postal_code}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-md-5">
                        <FormGroup>
                          <FormLabel>Country</FormLabel>
                          <SelectBox
                            data={[
                              "Germany",
                              "Real Estate",
                              "Canada",
                              "Usa",
                              "Afghanistan",
                              "Albania",
                              "China",
                              "Denmark",
                              "Finland",
                              "India",
                              "Kiribati",
                              "Kuwait",
                              "Mexico",
                              "Pakistan",
                            ]}
                            name="country"
                            defaultValue={values.country}
                            setFieldValue={setFieldValue}
                          />
                          {touched.country && errors.country && (
                            <FormControl.Feedback type="invalid">
                              {errors.country}
                            </FormControl.Feedback>
                          )}
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Facebook</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="https://www.facebook.com/xyz"
                            name="facebook_id"
                            value={values.facebook_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Google</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="Google"
                            name="google_id"
                            value={values.google_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Twitter</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="https://www.twitter.com/xyz"
                            name="twitter_id"
                            value={values.twitter_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <FormGroup>
                          <FormLabel>Pinterest</FormLabel>
                          <FormControl
                            type="text"
                            className="form-control"
                            placeholder="https://in.pinterest.com/"
                            name="pinterest_id"
                            value={values.pinterest_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-md-12">
                        <FormGroup>
                          <FormLabel>About Me</FormLabel>
                          <FormControl
                            type="text"
                            placeholder="Enter About your description"
                            name="about"
                            as="textarea"
                            style={{ height: 100 }}
                            rows="8"
                            value={values.about}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></FormControl>
                        </FormGroup>
                      </div>

                      <Image
                        className="mb-3"
                        src={values?.image_url}
                        width="64px"
                        height="64px"
                        roundedCircle
                      />

                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <label className="form-label">Upload Image</label>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              accept="image/*"
                              onChange={(e) =>
                                handleFileSelect(e, setFieldValue)
                              }
                            />
                            <label className="custom-file-label">
                              {values.img?.name || "Choose file"}
                            </label>
                          </div>
                        </div>
                      </div>

                      {progress > 0 && (
                        <div className="col-md-12 mt-3">
                          <ProgressBar
                            variant="success"
                            now={progress}
                            label={`${progress}%`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="card-footer">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && (
                        <Spinner
                          className="mr-2"
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      <span className="visually-hidden">Update Profile</span>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Row>
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

export default EditSection;
