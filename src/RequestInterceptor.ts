import axios, { InternalAxiosRequestConfig } from "axios";

const RequestInterceptor = () => {
  axios.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      if (request && request.headers) {
        request.headers.Authorization = "token";
      }
      return request;
    },
    (error) => Promise.reject(error)
  );
};

export default RequestInterceptor;
