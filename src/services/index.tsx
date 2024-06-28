import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://catalog.unic.ferlab.bio',
  withCredentials: true,
});

interface ApiResponse<T> {
  data: T | undefined;
  response: AxiosResponse;
  error: AxiosError | undefined;
}

//TODO interceptor ???
// check access token to refresh
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         // Make a request to refresh the token
//         const { data } = await axiosInstance.post('/auth/refresh-token', {
//           // Include any necessary data for token refresh, if needed
//         });

//         // Update the token in cookies or wherever it is stored
//         // Example: document.cookie = `access_token=${data.accessToken}; path=/; secure;`;

//         // Retry the original request with the new token
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         // Handle refresh token error (e.g., log out user, redirect to login page)
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export const sendRequest = async <T,>(config: AxiosRequestConfig) => {
  return apiInstance
    .request<T>(config)
    .then(
      (response): ApiResponse<T> => ({
        response: response,
        data: response.data,
        error: undefined,
      })
    )
    .catch(
      (err): ApiResponse<T> => ({
        response: err.response,
        data: undefined,
        error: err.response.data,
      })
    );
};

export default apiInstance;
