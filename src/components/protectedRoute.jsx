import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace />;
};
