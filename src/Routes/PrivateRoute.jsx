import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();
  // spinner will come on loading state becoming the true;
  if (loading) {
    return<div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>;
  } else if (currentUser) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;