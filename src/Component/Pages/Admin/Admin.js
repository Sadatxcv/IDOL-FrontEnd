import React from "react";
import { Outlet } from "react-router-dom";


import "./admin.css";
import Sidebar from "./Sidebar";
const Admin = () => {
  React.useEffect(() => {

  });
  return (
    <div>
      <div className="sidebar">
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />

          </div>
          <div className="col-sm-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
