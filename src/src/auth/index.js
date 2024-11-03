// src/auth/index.js
import { auth0Auth } from './auth0';
import { cognitoAuth } from './cognito';

const isProd = process.env.NODE_ENV === 'production';
export const authService = isProd ? cognitoAuth : auth0Auth;

export const {
  redirectToSignIn,
  handleAuthentication,
  isAuthenticated,
  logout,
} = authService;
