import React from "react";
import Sidebar from "./Sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
