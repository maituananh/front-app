import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../providers/authProvider';

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" replace />;
};
