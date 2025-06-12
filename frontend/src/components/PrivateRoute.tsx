import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = isAuthenticated();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
