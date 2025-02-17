import React from "react";
import { CardBody, Card } from "react-bootstrap";
import AppBreadcrumb from "../../../Components/Shared/AppBreadcrumb";
import MedicineTable from "../../../Components/Master/MedicineTable";

function MedicineType() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "master", active: true },
    { label: "Medicine Type", active: true },
  ];

  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="home-section">
          <AppBreadcrumb title="Medicine Type" items={breadcrumbItems} />
          <Card>
            <CardBody>
              <div className="app-table">
                <MedicineTable />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MedicineType;
