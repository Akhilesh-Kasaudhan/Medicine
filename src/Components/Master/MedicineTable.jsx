import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import axios from "axios";
import AddMedicineType from "./AddMedicineType";

const MedicineTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Fetch data from backend
  useEffect(() => {
    fetchData();
  }, []);

  const API_URL = process.env.REACT_APP_API_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/medicines/get-medicineType`);
      console.log("API Response:", response.data);
      if (Array.isArray(response.data.medicineTypes)) {
        setData(response.data.medicineTypes);
      } else {
        console.error("Data is not an array:", response.data);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle Update Medicine Type
  const handleUpdate = async (id, newType) => {
    try {
      const response = await axios.patch(
        `${API_URL}/medicines/update-medicineType/${id}`,
        { newType }
      );
      alert("Updated Successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating data", error);
    }
  };

  // Handle Delete Medicine
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await axios.delete(`${API_URL}/medicines/delete-medicineType/${id}`);
        alert("Deleted Successfully");
        fetchData(); // Refresh data
      } catch (error) {
        console.error("Error deleting data", error);
      }
    }
  };

  // Define table columns
  const columns = [
    {
      name: "Medicine Type",
      selector: (row) => row.medicineType || "N/A",
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => new Date(row.createdAt).toLocaleString(),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            onClick={() =>
              handleUpdate(row._id, prompt("Enter new type:", row.medicineType))
            }
            style={styles.buttonUpdate}
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            style={styles.buttonDelete}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="button" variant="primary" onClick={handleShow}>
        Add Medicine Type
      </Button>

      <h2>Medicine Table</h2>
      <DataTable
        columns={columns}
        data={data || []}
        progressPending={loading}
        pagination
        highlightOnHover
        striped
      />
      <AddMedicineType
        show={showModal}
        handleClose={handleClose}
        fetchData={fetchData}
      />
    </div>
  );
};
const styles = {
  buttonUpdate: {
    backgroundColor: "blue",
    color: "white",
    padding: "5px 10px",
    cursor: "pointer",
    marginRight: "5px",
  },
  buttonDelete: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default MedicineTable;
