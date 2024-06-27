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
//check access token to refresh

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
        error: err,
      })
    );
};

export default apiInstance;
