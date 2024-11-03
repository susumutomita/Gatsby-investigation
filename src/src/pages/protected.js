// src/pages/protected.js
import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import ProtectedContent from '../components/ProtectedContent';

const ProtectedPage = () => (
  <PrivateRoute component={ProtectedContent} />
);

export default ProtectedPage;
