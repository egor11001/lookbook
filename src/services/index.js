import authApi from './authApi';
import productsApi from './productsApi';
import userApi from './userApi';

const api = {
  auth: authApi,
  user: userApi,
  products: productsApi,
};

export default api;
