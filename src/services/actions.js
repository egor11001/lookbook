import api from '../services';

export const login = async (phone_number) => {
  try {
    const { code_lifetime } = await api.auth.login(phone_number);
    return code_lifetime;
  } catch (e) {
    console.log(e.response?.data?.message);
    return e.response?.data?.message;
  }
};

export const registration = async (info) => {
  try {
    const { data } = await api.auth.registration(info);
    if (data.phone_number) {
      login(data.phone_number);
    }
  } catch (e) {
    console.log(e.response?.data?.message);
    return e.response?.data?.message;
  }
};

export const getBrands = async () => {
  try {
    const { data } = await api.products.getBrands();
    return data;
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const addToBaseket = async (info) => {
  try {
    await api.user.addToBasket(info);
    const { data } = await api.user.getBasket();
    return data;
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};
