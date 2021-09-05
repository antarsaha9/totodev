import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FormControl } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import { signupWithEmailPassword } from "src/services/authService";
import * as yup from "yup";

const RegisterBodySection = () => {
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    signupWithEmailPassword(values)
      .then(() => {
        NotificationManager.success("Registration successful");
        router.push("/login");
      })
      .catch((err) => {
        NotificationManager.error(err.message);
      });
  };

  return (
    <section className="sptb">
      <div className="container customerpage">
        <div className="row">
          <div className="single-page">
            <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
              <div className="wrapper wrapper2">
                <div className="card-body">
                  <div className="btn-list d-flex">
                    <a
                      href="https://www.google.com/gmail/"
                      className="btn btn-google btn-block"
                    >
                      <i className="fa fa-google fa-1x mr-2" /> Google
                    </a>
                    <a href="https://twitter.com/" className="btn btn-twitter">
                      <i className="fa fa-twitter fa-1x" />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      className="btn btn-facebook"
                    >
                      <i className="fa fa-facebook fa-1x" />
                    </a>
                  </div>
                </div>

                <hr className="divider" />

                <Formik
                  initialValues={initialValue}
                  validationSchema={formSchema}
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
                  }) => {
                    return (
                      <form
                        noValidate
                        id="Register"
                        className="card-body"
                        tabIndex={500}
                        onSubmit={handleSubmit}
                      >
                        <div className="name">
                          <label>Name</label>
                          <FormControl
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!touched.name && !!errors.name}
                          />
                          <FormControl.Feedback
                            className="text-left"
                            type="invalid"
                          >
                            {errors.name}
                          </FormControl.Feedback>
                        </div>

                        <div className="mail">
                          <label>Email</label>
                          <FormControl
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!touched.email && !!errors.email}
                          />
                          <FormControl.Feedback
                            className="text-left"
                            type="invalid"
                          >
                            {errors.email}
                          </FormControl.Feedback>
                        </div>
                        <div className="passwd">
                          <label>Password</label>
                          <FormControl
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!touched.password && !!errors.password}
                          />
                          <FormControl.Feedback
                            className="text-left"
                            type="invalid"
                          >
                            {errors.password}
                          </FormControl.Feedback>
                        </div>
                        <div className="submit">
                          <button
                            className="btn ripple  btn-primary btn-block"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Register
                          </button>
                        </div>
                        <p className="text-dark mb-0">
                          Already have an account?
                          <Link href="/login">
                            <a className="text-primary ml-1">Sign In</a>
                          </Link>
                        </p>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const initialValue = {
  name: "",
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  email: yup.string().email("Invalid email").required("${path} is required"),
  password: yup.string().required("${path} is required"),
});

export default RegisterBodySection;
