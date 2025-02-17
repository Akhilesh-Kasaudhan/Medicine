import React from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppBreadcrumb({ items, title }) {
    return (
        <div className="app-breadcrumb">
            <Row className="row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1 g-3 align-items-center">
                <Col>
                    <h5>{title}</h5>
                </Col>
                <Col>
                    <Breadcrumb>
                        {items.map((item, index) =>
                            item.active ? (
                                <li key={index} className="breadcrumb-item active" aria-current="page">
                                    {item.label}
                                </li>
                            ) : (
                                <li key={index} className="breadcrumb-item">
                                    <Link to={item.href}>{item.label}</Link>
                                </li>
                            )
                        )}
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    );
}

export default AppBreadcrumb;
