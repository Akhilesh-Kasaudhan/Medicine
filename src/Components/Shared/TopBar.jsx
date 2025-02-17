import React from "react";
import Images from "../../Constants/Images";
import { TOP_NAV_ITEMS } from "../../Constants/sidebar";
import { Navbar, Container, Nav } from "react-bootstrap";
import GlobalRoutes from "../../Constants/GlobalRoutes";
import { Link } from "react-router-dom";

function TopBar({ onToggleSidebar }) {
  return (
    <React.Fragment>
      <div className="nav-layout">
        <Navbar>
          <Container fluid>
            <Link
              className="navbar-brand"
              to={GlobalRoutes.publicRoutes.HomePage}
            >
              <img src={Images.smallLogo} alt="Logo" />
              <span>google</span>
            </Link>
            <Nav className="navbar-nav ms-auto">
              {TOP_NAV_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${item.className || ""}`}
                  onClick={
                    item.onClick === "onToggleSidebar"
                      ? onToggleSidebar
                      : undefined
                  }
                >
                  <Link to={item.path} className="nav-link">
                    {item.icon}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </Link>
                </li>
              ))}
            </Nav>
            <div className="nav-profile">
              <Link
                to={GlobalRoutes.publicRoutes.HomePage}
                className="stretched-link"
              >
                <img src={Images.userDefultIcon} alt="User Profile" />
              </Link>
              <div>
                <h6>VCQRU</h6>
                <p>Vendor</p>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default TopBar;
