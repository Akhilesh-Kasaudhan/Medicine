import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ModalComponent from "../Shared/ModalComponent";
import FormikControl from "../../Formik/FormikControl";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

function AddMedicineType({ show, handleClose, fetchData }) {
  const initialValues = {
    type: "",
  };

  const validationSchema = Yup.object({
    type: Yup.string()
      .required("Medicine Type Name is required")
      .min(2, "Must be at least 2 characters"),
  });

  const API_URL = process.env.REACT_APP_API_URL;
  console.log(API_URL);
  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${API_URL}/medicines/add-medicineType`,
        values,
        {
          withCredentials: true,
        }
      );
      console.log("Type add successful:", response?.data || "No response data");
      toast.success("Medicine type added successfully");
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
      title="Add Medicine Type"
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
              label="Medicine Type Name"
              name="type"
              placeholder="Enter medicine type"
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

export default AddMedicineType;
