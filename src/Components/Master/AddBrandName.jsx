import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ModalComponent from "../Shared/ModalComponent";
import FormikControl from "../../Formik/FormikControl";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

function AddBrandName({ show, handleClose, fetchData }) {
  const initialValues = {
    brandName: "",
  };

  const validationSchema = Yup.object({
    brandName: Yup.string()
      .required("Brand Name is required")
      .min(2, "Must be at least 2 characters"),
  });

  const API_URL = process.env.REACT_APP_API_URL;
  console.log(API_URL);
  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${API_URL}/brands/add-brand`, values, {
        withCredentials: true,
      });
      console.log(
        "Brand added successfully:",
        response?.data || "No response data"
      );
      toast.success("Brand name added successfully");
      resetForm();
      handleClose();
      fetchData();
    } catch (error) {
      console.error(
        "Error adding type:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <ModalComponent
      show={show}
      handleClose={handleClose}
      title="Add Brand Name"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikControl
              control="textInput"
              type="text"
              label="Brand Name"
              name="brandName"
              placeholder="Enter Brand name"
            />
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="me-2"
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </ModalComponent>
  );
}

export default AddBrandName;
