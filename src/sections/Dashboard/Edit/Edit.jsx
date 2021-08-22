import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { getMyProfile, updateProfile } from "src/services/profileService";
import * as yup from "yup";
import SelectBox from "~components/Forms/SelectBox";

const EditSection = () => {
  const [profile, setProfile] = useState(null);

  const handleFormSubmit = async (values) => {
    // console.log(values);

    // const test = await getUploadUrl(values.img);
    // const test = await uploadFile(
    //   "https://test-multipart-12345.s3.us-east-2.amazonaws.com/profile_image/profile-pic-linkdint.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQ4EN24MFFNPCHQJE%2F20210822%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210822T044830Z&X-Amz-Expires=3000&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIFPf%2F7LjBlT4wGKaImM229%2FYz6nxoNO5y9t8nkoegIowAiBBq80NHCWoi3WVE2ckbloQwu%2F%2BiXUG8EOqAfKLtmK93CqYAgjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA2MDQyNzAwMjYzNCIMDObRDAUOwH6%2Ffo5bKuwBD0lFewUhpZ4L%2BSJpr%2B6XYOzK27pd60fdfiDEQpnUJw6XG1CVca0UoRWj7mPXeDju2%2B39AKWSZysaSLa2eXHQsbD2gpiBNvgYqyL3KkSZ2uO3QMqK%2F9Ioq3NdHcRiZy7EM6DJxPOtpL7HDHaWnW5zVOANgS645Pv6qm7xpuI0Pa1Mr%2FWwZQD7QjjuKfTDzXMkUE%2BK%2FLApFywb5jKMvArjgeh1lyCy%2BGQ80VNLW0H%2BRgBav6Z5S1Xua8KjEd6H70tr3xG8t6e7WgHraxMxWuw1NAiskeKoXkFGqMys9GNLMCNEYrQqXRe1mNN4L8Uwna6HiQY6mwFLdPtdEI357%2BFKFzNwIVOuX620p8dIB4HOonpAATRFb7HTKPHA3Vg%2FSfQDQzZIhegNYzOqoSnsao93YBLtF9UThJEcAy%2FDvoKTkOhwdJzlu00EZC4IKPMyhjTfB%2FoV3NiWVouDa0pipf20dWbGgK7EpL%2BOMhIa3lzF6Q7SzXE3%2Btc9sjq1F1oIxhRUI9LnySikUAKvnjYxkW7vdQ%3D%3D&X-Amz-Signature=676c11a46d8ee8f51b21ebb45ec717350bf4555557a48defed09500c745c1b02&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read",
    //   values.img
    // );
    // console.log(test);
    const data = await updateProfile(values);
    NotificationManager.success(data);
  };

  console.log(profile);

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
                            // className="form-control"
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
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <label className="form-label">Upload Image</label>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              accept="image/*"
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
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn ripple  btn-secondary"
                      disabled={isSubmitting}
                    >
                      Updated Profile
                    </button>
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

const initialValue = {
  first_name: "",
  last_name: "New Name",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "India",
  postal_code: "",
  google_id: "",
  facebook_id: "",
  twitter_id: "",
  pinterest_id: "",
  about: "",
  image_url: "",
};

const formSchema = yup.object().shape({
  first_name: yup.string().required("${path} is required"),
  last_name: yup.string().required("${path} is required"),
  email: yup.string().email("Invalid email").required("${path} is required"),
});

export default EditSection;
