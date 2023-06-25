import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = () => {
  const location = useLocation();

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
