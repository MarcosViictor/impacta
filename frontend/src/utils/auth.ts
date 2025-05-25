import { getCookie } from './cookies';

export const isAuthenticated = () => {
  const token = getCookie('access_token');
  return !!token;
};

export const getUserType = () => {
  const userType = getCookie('user_type');
  if (!userType) return null;
  
  try {
    return userType;
  } catch (error) {
    return null;
  }
};
