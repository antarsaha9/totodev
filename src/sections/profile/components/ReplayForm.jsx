import { Formik } from "formik";
import React from "react";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import LoadingButton from "~components/Buttons/LoadingButton";

const ReplayForm = function (props) {
  const handleFormSubmit = (values, { setSubmitting }) => {
    props.reviewProfile(values, () => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValue}
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
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <h3 className="card-title">Leave a reply</h3>
          <Form.Group>
            <Form.Control
              placeholder="Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Comment"
              className="h-auto"
              value={values.review}
              onChange={handleChange}
              onBlur={handleBlur}
              name="review"
              rows={6}
            />
          </Form.Group>
          <LoadingButton
            className="ripple"
            variant="primary"
            loading={isSubmitting}
          >
            Send Reply
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
};

const initialValue = {};

const formSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  review: yup.string().required("${path} is required"),
  email: yup.string().email("Invalid email").required("${path} is required"),
});

export default ReplayForm;
