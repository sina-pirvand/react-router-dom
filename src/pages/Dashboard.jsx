import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div id="sidebar">
        <NavLink to="profile">profile</NavLink>
        <NavLink to="payment"> payment</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
