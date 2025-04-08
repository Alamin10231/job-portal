import React, { useContext } from "react";
import Authcontext from "../Context/Authcontext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return <span className="loading loading-ring loading-md"></span>;
  }
  if (user) {
    return children;
  }else{
                    return <Navigate to="/login" replace></Navigate>;
  }
 
};

export default PrivateRoute;
