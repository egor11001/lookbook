import axios from 'axios';

export const apiUrl = '';

const $api = axios.create({
  baseURL: apiUrl,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${apiUrl}/auth/refresh`, {
          refreshToken: localStorage.getItem('refreshToken'),
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return $api.request(originalRequest);
      } catch (error) {
        alert(`ERROR AUTHORIZATION - ${error}`);
      }
    }
    throw error;
  },
);

export default $api;
