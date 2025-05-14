import axios from 'axios';
import { toast } from 'react-hot-toast';
import useUserStore from '../store/userStore';
import useAuthStore from '../store/authStore';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('rp_token');

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const errorComposer = (error) => {
  const clearUser = useUserStore.getState().clearUser;
  const clearToken = useAuthStore.getState().clearToken;

  return () => {
    const statusCode = error.response ? error.response.status : null;
    const responseData = error.response?.data || {};
    console.log(error);

    if (statusCode === 400) {
      toast.error(responseData.message || 'badRequestError');
    }
    if (statusCode === 401) {
      toast.error(responseData.message || 'unauthorizedError');
      if (responseData.message === 'tokenExpired' || responseData.message === 'invalidToken') {
        clearUser();
        clearToken();
        window.location.replace("/");
      }
    }
    if (statusCode === 404) {
      toast.error(responseData.message || 'notFoundError');
    }
    if (statusCode === 409) {
      toast.error(responseData.message || 'conflictError', { duration: 7000 });
    }
    if (statusCode === 500) {
      toast.error(responseData.message || 'serverIsNotAvailableError');
    }
    if (error.code === 'ERR_NETWORK') {
      toast.error('serverIsNotAvailableError', { id: 'networkError' });
    }
  };
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    error.handleGlobally = errorComposer(error);
    error.handleGlobally();

    return Promise.reject(error);
  }
);

export default axiosInstance;
