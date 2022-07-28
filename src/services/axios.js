import axios from 'axios';

export const apiUrl = process.env.REACT_APP_API_URL;

const $api = axios.create({
  baseURL: apiUrl,
});

const $apiUser = axios.create({
  baseURL: apiUrl,
});

$apiUser.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('UToken')}`;

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
        const response = await axios.post('/auth/refresh-token/', {
          refresh_token: localStorage.getItem('URefresh'),
        });
        localStorage.setItem('UToken', response.data.access_token);
        localStorage.setItem('URefresh', response.data.refresh_token);
        return $api.request(originalRequest);
      } catch (error) {
        alert(`ERROR AUTHORIZATION - ${error}`);
      }
    }
    throw error;
  },
);

export { $api, $apiUser };
