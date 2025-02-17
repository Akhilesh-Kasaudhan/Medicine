import { useLocation, Navigate } from "react-router-dom";
import { getAuthToken } from './tokenHelper';
import React from 'react';

export function PrivateRoute({ children }) {
    const token = getAuthToken();
    const location = useLocation();
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}
