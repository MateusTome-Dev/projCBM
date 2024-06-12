import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Supondo que o token esteja armazenado no localStorage
  return token ? element : <Navigate to="/" />;
};

export default PrivateRoute;
