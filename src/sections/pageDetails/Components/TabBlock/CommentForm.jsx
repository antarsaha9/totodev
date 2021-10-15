import React from "react";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
import { createYupObject } from "src/services/helper";
import * as yup from "yup";
import LoadingButton from '~components/Buttons/LoadingButton';

const CommentForm = (props) => {
  const handleFormSubmit = function (values) {
    console.log("comment payload", values);
    props.submitHandler(values);
  }
  return (
    <div className="card mt-5">
      <div className="card-header">
        <h3 className="card-title">Write Your Comments</h3>
      </div>
      <div className="card-body">
        <Formik
          initialValues={initialValue}
          onSubmit={handleFormSubmit}
          validationSchema={schema}
          enableReinitialize={true}
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
          }) =>
            <Form onSubmit={handleSubmit}>
              {() => console.log(errors)}
              {/* <Form.Group>
                <Form.Control
                  placeholder="Your name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  isInvalid={touched.review && errors.review}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  placeholder="Email address"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  isInvalid={touched.review && errors.review}
                />
              </Form.Group> */}
              <Form.Group>
                <Form.Control
                  placeholder="Write your comment"
                  as="textarea"
                  style={{ height: "8.5rem" }}
                  name="message"
                  onChange={handleChange}
                  value={values.message}
                  onBlur={handleBlur}
                  isInvalid={touched.review && errors.review}
                />
              </Form.Group>
              <LoadingButton loading={isSubmitting} variant="primary" className="ripple">
                Submit
              </LoadingButton>
            </Form>
          }
        </Formik>
        {/* <a href="#" className="btn ripple  btn-primary">
          Submit
        </a> */}
      </div>
    </div>
  );
}

const { initialValue, shape } = createYupObject({
  name: ["", yup.string()],
  email: ['', yup.string()],
  message: ['', yup.string().required("Please give comment!")],
});
const schema = yup.object().shape(shape);

export default CommentForm;