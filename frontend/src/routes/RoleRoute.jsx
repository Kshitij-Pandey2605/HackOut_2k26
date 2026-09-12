import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export const RoleRoute = ({ allowedRoles = [] }) => {
  const { role } = useAuth();

  if (!role || !allowedRoles.includes(role)) {
    // Redirect to unauthorized fallback or role selection
    return <Navigate to="/role-selection" replace />;
  }

  return <Outlet />;
};
