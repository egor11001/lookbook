import api from '../services';
import {
  defaultError,
  failAuthNotification,
  successAddToBasket,
  warningError,
} from '../components/Notifications';

export const login = async (phone_number) => {
  try {
    const res = await api.auth.login(phone_number);
    return res.status;
  } catch (e) {
    failAuthNotification(
      e.response.data.phone_number ||
        e.response.data.email ||
        e.response.data.code ||
        e.response.data.message ||
        e.response.data,
    );
    return e.response.status;
  }
};

export const registration = async (info) => {
  try {
    const { data } = await api.auth.registration(info);
    if (data.phone_number) {
      return login({ phone_number: data.phone_number });
    }
  } catch (e) {
    failAuthNotification(
      e.response.data.phone_number || e.response.data.email || e.response.data.code,
    );
    return e.response.status;
  }
};

export const getBrands = async () => {
  try {
    const { data } = await api.products.getBrands();
    return data;
  } catch (e) {
    return e.response.status;
  }
};

export const getProducts = async () => {
  try {
    const { data } = await api.products.getProducts();
    return data;
  } catch (e) {
    return e.response.status;
  }
};

export const getProductsById = async (id) => {
  try {
    const { data } = await api.products.getProductsById(id);
    return data;
  } catch (e) {
    return e.response.status;
  }
};

export const addToBasket = async (info) => {
  try {
    if (!info.size) {
      return warningError('Выберите размер');
    }
    const res = await api.user.addToBasket(info);
    if (res.status === 200) {
      successAddToBasket();
    } else {
      throw new Error();
    }
  } catch (e) {
    defaultError();
    return e.response.status;
  }
};

export const removeFromBasket = async (info) => {
  try {
    await api.user.removeFromBasket(info);
  } catch (e) {
    defaultError(e.response.data);
    return e.response.status;
  }
};

export const getBasket = async () => {
  try {
    const { data } = await api.user.getBasket();
    return data;
  } catch (e) {
    defaultError();
    return e.response.status;
  }
};
