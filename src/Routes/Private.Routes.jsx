import React from "react";
import { Navigate } from "react-router-dom";
import { getrole, gettoken } from "../Utils/auth.utils";

const PrivateRoutes = ({ role, children }) => {
  const token = gettoken();
  const userRole = getrole();

  if (!token || userRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoutes;
