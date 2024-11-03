// src/components/PrivateRoute.js
import React from 'react';
import { navigate } from 'gatsby';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      navigate('/');
    }
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
