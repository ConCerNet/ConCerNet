import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
const PrivateRoute = () => {
    const user = useAuth();
    if (!user.token) return <Navigate to="/Login" />;
    return <Outlet />;
};
export default PrivateRoute;