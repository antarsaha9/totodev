import { Formik } from "formik";
import React from "react";
import { NotificationManager } from "react-notifications";
import * as yup from "yup";

const ReplayForm = () => {
  const handleFormSubmit = async (values) => {
    // const data = await updateProfile(values);
    NotificationManager.success(data);
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
        setFieldValue,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <h3 className="card-title">Leave a reply</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email address"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control h-auto"
              name="example-textarea-input"
              rows={6}
              placeholder="Comment"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button
            className="btn ripple  btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Send Reply
          </button>
        </form>
      )}
    </Formik>
  );
};

const initialValue = {};

const formSchema = yup.object().shape({
  first_name: yup.string().required("${path} is required"),
  last_name: yup.string().required("${path} is required"),
  email: yup.string().email("Invalid email").required("${path} is required"),
});

export default ReplayForm;
