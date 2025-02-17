import "./App.css";
import "./Responsive.css";
import React, { useState } from "react";
import AdminSideBar from "./Components/Shared/AdminSideBar";
import { AppRoutes } from "./Navigation/AppRoutes";
import TopBar from "./Components/Shared/TopBar";

function App() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  return (
    <React.Fragment>
      <AdminSideBar isClosed={isSidebarClosed} />
      <TopBar onToggleSidebar={handleToggleSidebar} />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
