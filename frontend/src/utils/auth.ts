import { getCookie } from './cookies';

export const isAuthenticated = () => {
  const token = getCookie('access_token');
  return !!token;
};
