import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
import { createYupObject } from "src/services/helper";
import * as yup from "yup";
import LoadingButton from '~components/Buttons/LoadingButton';
function CommentModal({ visible, show, submitHandler }) {
  const handleFormSubmit = function (values) {
    console.log(values);
    submitHandler(values);
  }
  return (
    <Modal show={visible} onHide={show}>
      <Modal.Header closeButton>
        <Modal.Title>Leave a comment</Modal.Title>
      </Modal.Header>
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
            <Modal.Body>
              <Form.Group>
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
              </Form.Group>
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
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={() => show(false)}>
                Cancel
              </Button>
              <LoadingButton loading={isSubmitting} variant="success">
                Send
              </LoadingButton>
            </Modal.Footer>
          </Form>
        }
      </Formik>
    </Modal>
  )
}


const { initialValue, shape } = createYupObject({
  name: ["", yup.string()],
  email: ['', yup.string()],
  message: ['', yup.string().required("Please give comment!")],
});
const schema = yup.object().shape(shape);

export default CommentModal;