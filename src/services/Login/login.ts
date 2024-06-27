import apiInstance, { sendRequest } from '..';

export const headers = (contentType: string = 'application/json') => ({
  'Content-Type': contentType,
});

const login = (email: string, password: string) =>
  sendRequest({
    method: 'POST',
    url: '/users/login',
    // headers: headers(),
    data: {
      email,
      password,
    },
  });

// const test = () =>
//   sendRequest({
//     method: 'GET',
//     url: '/variables',
//   });

const test = () => {
  return apiInstance.get('/variables', { withCredentials: true });
};

// Register
// Logout

export const LoginApi = { login, test };
