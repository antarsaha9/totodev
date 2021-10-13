import React from 'react'
import StarRating from '~components/Widgets/StarRating';
import { Formik } from "formik";
import Form from 'react-bootstrap/Form';
import { createYupObject } from "src/services/helper";
import * as yup from "yup";
import LoadingButton from '~components/Buttons/LoadingButton';
import Dropdown from '~components/Forms/Dropdown';
const RatingForm = function (props) {
  const handleFormSubmit = function (values, { setSubmitting }) {
    console.log(values);
    props.reviewItem(values, () => setSubmitting(false));
  }
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleFormSubmit}
      validationSchema={RatingFormSchema}
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
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="card-title">Item Rating</h3>
            </div>
            <div className="card-body">
              <div className="rating-stars d-flex mb-3">
                <label className="form-label mr-3 mt-1">Select Rating:</label>
                <StarRating starSize="lg" rating={values.rating} onChange={e => { setFieldValue('rating', e) }} />
              </div>
              {/* <Form.Group controlId="review">
                <Dropdown data={[
                  "Customer Support",
                  "Design Qulity",
                  "Other",
                ]}
                  selected={values.scope}
                  ariaLabel="Select options"
                  handleChange={e => setFieldValue('scope', e)}
                  name="scope" />
              </Form.Group> */}

              <Form.Group controlId="review">
                <Form.Control
                  as="textarea"
                  placeholder="Comment"
                  name="review"
                  onChange={handleChange}
                  // value={values.review}
                  onBlur={handleBlur}
                  isInvalid={touched.review && errors.review}
                  row={6}
                />
              </Form.Group>
              <LoadingButton loading={isSubmitting} className="ripple">
                Save
              </LoadingButton>
            </div>
          </div>
        </Form>
      }
    </Formik>
  )
}

const { initialValue, shape } = createYupObject({
  review: ["", yup.string().required("Please give rating!")],
  rating: ['', yup.number()],
  scope: ['', yup.string()],
});
const RatingFormSchema = yup.object().shape(shape);

export default RatingForm;