import React, { createContext, useContext, useState, useEffect } from 'react';
import { USER_ROLES } from '@/constants/roles';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('carbonsphere_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem('carbonsphere_role') || null;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem('carbonsphere_token') || null;
  });
  const [loading, setLoading] = useState(false);

  const login = (userData, authToken, userRole) => {
    setUser(userData);
    setToken(authToken);
    setRole(userRole || userData?.role || USER_ROLES.SUPPLIER);

    localStorage.setItem('carbonsphere_token', authToken);
    localStorage.setItem('carbonsphere_user', JSON.stringify(userData));
    localStorage.setItem('carbonsphere_role', userRole || userData?.role || USER_ROLES.SUPPLIER);
  };

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem('carbonsphere_role', selectedRole);
    if (user) {
      const updated = { ...user, role: selectedRole };
      setUser(updated);
      localStorage.setItem('carbonsphere_user', JSON.stringify(updated));
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setRole(null);
    localStorage.removeItem('carbonsphere_token');
    localStorage.removeItem('carbonsphere_user');
    localStorage.removeItem('carbonsphere_role');
  };

  const isAuthenticated = Boolean(token);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        token,
        loading,
        isAuthenticated,
        login,
        selectRole,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
