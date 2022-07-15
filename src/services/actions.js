import api from '../services';

export const login = async (phone_number) => {
  try {
    const res = await api.auth.login(phone_number);
    return res.status;
  } catch (e) {
    return e.response.status;
  }
};

export const registration = async (info) => {
  try {
    const { data } = await api.auth.registration(info);
    if (data.phone_number) {
      login(data.phone_number);
    }
  } catch (e) {
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

export const addToBaseket = async (info) => {
  try {
    await api.user.addToBasket(info);
    const { data } = await api.user.getBasket();
    return data;
  } catch (e) {
    return e.response.status;
  }
};
