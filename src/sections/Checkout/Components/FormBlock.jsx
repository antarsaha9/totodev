import { Formik } from 'formik';
import React, { useState } from 'react'
import SelectBox from './SelectBox'
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import LoadingButton from '~components/Buttons/LoadingButton';
import Dropdown from '~components/Forms/Dropdown';

const FormBlock = ({ submit }) => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [disabled, disable] = useState(false);

  const handleFormSubmit = function (values, { setSubmitting }) {
    submit(values, () => { setSubmitting(false), disable(true) });
  }
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={formSchema}
      onSubmit={handleFormSubmit}>
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
        <Form onSubmit={handleSubmit}>
          {/* <textarea value={JSON.stringify(errors)} ></textarea>
          <textarea value={JSON.stringify(touched)} ></textarea> */}
          <div className="row">
            <div className="col-sm-6 col-md-6">

              <Form.Group controlId="first_name">
                <Form.Label>First name <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  isInvalid={(touched.first_name || submitClicked) && !!errors.first_name}
                  disabled={disabled}
                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.first_name}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-sm-6 col-md-6">
              <Form.Group controlId="last_name">
                <Form.Label>Last name <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  isInvalid={(touched.last_name || submitClicked) && !!errors.last_name}
                  disabled={disabled}

                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.last_name}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-12">
              <Form.Group controlId="company_name">
                <Form.Label>Company name <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  name="company_name"
                  value={values.company_name}
                  onChange={handleChange}
                  isInvalid={(touched.company_name || submitClicked) && !!errors.company_name}
                  disabled={disabled}

                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.company_name}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-12">
              <Form.Group controlId="email">
                <Form.Label>Email address <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={(touched.email || submitClicked) && !!errors.email}
                  disabled={disabled}
                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.email}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-12">
              <div className="form-group" data-select2-id={8}>
                <label className="form-label">Country <span className="text-red">*</span></label>
                <Dropdown
                  data={["Germany", "Canada", "Usa", "Aus"]}
                  selected={values.country}
                  ariaLabel="-- Select --"
                  handleChange={e => setFieldValue('country', e)}
                  name="country"
                  disabled={disabled}
                />

              </div>
            </div>
            <div className="col-md-12">
              <Form.Group controlId="address">
                <Form.Label>Address <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={(touched.address || submitClicked) && !!errors.address}
                  disabled={disabled}

                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.address}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-sm-6 col-md-6">
              <Form.Group controlId="city">
                <Form.Label>City <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={(touched.city || submitClicked) && !!errors.city}
                  disabled={disabled}

                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.city}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-sm-6 col-md-6">
              <Form.Group controlId="postal_code">
                <Form.Label>Postal Code <span className="text-red">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  name="postal_code"
                  value={values.postal_code}
                  onChange={handleChange}
                  isInvalid={(touched.postal_code || submitClicked) && !!errors.postal_code}
                  disabled={disabled}

                />
                {<Form.Control.Feedback type="invalid" className="text-muted">
                  {errors.postal_code}
                </Form.Control.Feedback>}
              </Form.Group>
            </div>
          </div>
          <LoadingButton
            className="ripple"
            variant="primary"
            loading={isSubmitting}
            onClick={() => setSubmitClicked(true)}
            disabled={disabled}

          >
            Submit
          </LoadingButton>
        </Form>
      )}
    </Formik>
  )
}
const initialValue = {};

const formSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  company_name: yup.string().required("Company is required"),
  email: yup.string().required("Invalid email"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postal_code: yup.string().required("Postal code is required"),
  country: yup.string().required("Country is required"),
});

export default FormBlock;