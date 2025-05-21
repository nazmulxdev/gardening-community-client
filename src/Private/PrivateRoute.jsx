import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Utilities/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { presentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (presentUser) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
