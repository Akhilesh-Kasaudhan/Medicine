import React from "react";
import { CardBody, Card } from "react-bootstrap";
import AppBreadcrumb from "../../../Components/Shared/AppBreadcrumb";
import BrandTable from "../../../Components/Master/BrandTable";

function Brand() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "master", active: true },
    { label: "Brand Name", active: true },
  ];
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <div className="home-section">
          <AppBreadcrumb title="Brand Name" items={breadcrumbItems} />
          <Card>
            <CardBody>
              <div className="app-table">
                <BrandTable />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Brand;
