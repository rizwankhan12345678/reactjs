import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TokenService from '../services/token-service';

const ProtectedRoute = () => {
    const auth = TokenService.getUser();
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
