import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormikControl from "../../Formik/FormikControl";
import Images from "../../Constants/Images";

// Define initial values
const initialValues = {
  username: "",
  password: "",
};

// Define validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("User Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const API_URL = process.env.REACT_APP_API_URL;
// Define form submission handler
const onSubmit = async (values, { setSubmitting }) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, values, {
      withCredentials: true,
    });
    console.log("Loggin successful:", response.data);
    alert("Login successful!");
  } catch (error) {
    console.error(
      "Login Failed:",
      error.response?.data?.message || error.message
    );
    alert("Login Failed: " + error.response?.data?.message);
  }
  setSubmitting(false);
};

function Login() {
  return (
    <React.Fragment>
      <section className="admin-login">
        <Container>
          <Row>
            <Col lg={5} className="mx-auto">
              <Card>
                <CardBody>
                  <div className="admin-logo">
                    <img src={Images.logo} alt="Admin Logo" />
                    <CardTitle tag="h5">Login</CardTitle>
                    <CardText>Sign in to continue to Sabka Vaidya.</CardText>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Row className="g-3 row-cols-1">
                          <FormikControl
                            control="textInput"
                            label="User Name*"
                            name="username"
                            type="text"
                            className="col"
                          />
                          <FormikControl
                            control="textInput"
                            label="Password*"
                            name="password"
                            type="password"
                            className="col"
                          />

                          <Col>
                            <div className="form-group">
                              <Button
                                color="success"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? "Logging in..." : "Login"}
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Login;
