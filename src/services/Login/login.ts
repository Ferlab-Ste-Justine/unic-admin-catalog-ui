import { sendRequest } from '..';

const login = (email: string, password: string) =>
  sendRequest({
    method: 'POST',
    url: '/users/login',
    data: {
      email,
      password,
    },
  });

const register = (email: string, name: string, password: string) =>
  sendRequest({
    method: 'POST',
    url: '/users/register',
    data: {
      name,
      email,
      password,
    },
  });

const verify = () =>
  sendRequest<{ isValid: boolean }>({
    method: 'GET',
    url: '/users/verify',
  });

const test = () =>
  sendRequest({
    method: 'GET',
    url: '/variables',
  });

const analysts = () =>
  sendRequest({
    method: 'GET',
    url: '/analysts',
  });

const logout = () =>
  sendRequest({
    method: 'POST',
    url: '/users/logout',
  });

export const LoginApi = { login, logout, register, verify, test, analysts };
