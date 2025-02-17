import React from "react";
import { Accordion } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { SIDEBAR_NAV_MENU_ITEMS } from "../../Constants/sidebar";
import { toast } from "react-toastify";
import GlobalRoutes from "../../Constants/GlobalRoutes";
import { removeAuthToken } from "../../Utils/tokenHelper";

function AdminSideBar({ isClosed }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAuthToken();
    toast.success("You have been logged out successfully!");
    navigate(GlobalRoutes.publicRoutes.LoginPage);
  };

  return (
    <React.Fragment>
      <div className={`sidebar ${isClosed ? "close" : ""}`} id="sidebar">
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              {SIDEBAR_NAV_MENU_ITEMS.mainMenu.map((item, index) => (
                <li key={index} className="nav-link">
                  <NavLink to={item.path} end>
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
              <li className="menu-dropdown">
                <Accordion>
                  {SIDEBAR_NAV_MENU_ITEMS.subMenu.map((subItem, index) => (
                    <Accordion.Item eventKey={String(index)} key={index}>
                      <Accordion.Header>
                        {subItem.icon}
                        <span>{subItem.name}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {subItem.children.map((subChild, subIndex) => (
                            <li className="nav-link" key={subIndex}>
                              <NavLink to={subChild.path}>
                                <i className="bx bx-radio-circle-marked icon"></i>
                                <span>{subChild.name}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            {SIDEBAR_NAV_MENU_ITEMS.bottomMenu.map((item, index) => (
              <li
                key={index}
                className="nav-link"
                onClick={item.name === "Logout" ? handleLogout : null}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminSideBar;
