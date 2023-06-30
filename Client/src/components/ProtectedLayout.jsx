import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useBoundedStore } from "../../store/store";

const ProtectedLayout = () => {
  const auth = useBoundedStore((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!auth) return navigate("/login");
  }, []);
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
