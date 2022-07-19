import axios from 'axios';

export const apiUrl = process.env.REACT_APP_API_URL;

const $api = axios.create({
  baseURL: apiUrl,
});

const $apiUser = axios.create({
  baseURL: apiUrl,
});

$apiUser.interceptors.request.use((config) => {
  config.headers.Authorization = `Token ${localStorage.getItem('UToken')}`;

  return config;
});

$apiUser.interceptors.response.use(
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

export { $api, $apiUser };
