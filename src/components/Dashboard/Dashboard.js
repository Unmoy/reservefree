import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard_outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
