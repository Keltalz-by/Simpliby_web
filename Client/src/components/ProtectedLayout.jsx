import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
