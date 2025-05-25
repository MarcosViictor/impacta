import { Navigate } from 'react-router-dom';
import { getUserType, isAuthenticated } from '@/utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedUserTypes: string[];
}

export const ProtectedRoute = ({ children, allowedUserTypes }: ProtectedRouteProps) => {
  const isAuth = isAuthenticated();
  const userType = getUserType();
  console.log(userType)
  // const userType = 'ONG';

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (!userType || !allowedUserTypes.includes(userType)) {
    return <Navigate to="/search" replace />;
  }

  return <>{children}</>;
};
