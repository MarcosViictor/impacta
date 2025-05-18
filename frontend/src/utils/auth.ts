import { getCookie } from './cookies';
import { jwtDecode } from 'jwt-decode';

export const isAuthenticated = () => {
  const token = getCookie('access_token');
  return !!token;
};

export const getUserType = () => {
  const token = getCookie('access_token');
  if (!token) return null;
  
  try {
    const decoded: any = jwtDecode(token);
    return decoded.user_type;
  } catch (error) {
    return null;
  }
};
