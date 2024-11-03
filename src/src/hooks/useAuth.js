// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { cognitoAuth } from '../auth/cognito';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (window.location.search.includes('code=')) {
        await cognitoAuth.handleAuthentication();
      }
      setIsAuthenticated(cognitoAuth.isAuthenticated());
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return {
    isAuthenticated,
    isLoading,
    login: cognitoAuth.redirectToSignIn.bind(cognitoAuth),
    logout: cognitoAuth.logout.bind(cognitoAuth),
  };
};
