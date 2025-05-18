import Cookies from 'js-cookie';

export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value, { expires: 7 }); // expira em 7 dias
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  Cookies.remove(name);
};
