import { getCookie } from './cookies';
import { jwtDecode } from 'jwt-decode';
import { DecodedJWT } from '@/types/userTypes';

export const isAuthenticated = () => {
  const token = getCookie('access_token');
  return !!token;
};

export const getUserType = () => {
  const token = getCookie('access_token');
  if (!token) return null;
  
  try {
    const decodedToken = jwtDecode(token) as DecodedJWT;
    return decodedToken.user_type;
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
};

export const getUserId = () => {
  const token = getCookie('access_token');
  if (!token) return null;
  
  try {
    const decodedToken = jwtDecode(token) as DecodedJWT;
    return decodedToken.user_id;
  } catch (error) {
    console.error('Erro ao decodificar token:', error);
    return null;
  }
};
