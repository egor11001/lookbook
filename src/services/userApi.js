import { $apiUser } from './axios';

export default class userApi {
  /*  static async profileVK(token, userId) {
    return axios.get(`https://api.vk.com/method/users.get?user_id=${userId}&v=5.131`, {
      headers: { Authoriation: `Bearer ${token}` },
    });
  } */

  static async getProfile() {
    return $apiUser.get('/my/profile/');
  }

  static async updateProfile(info) {
    return $apiUser.patch('/my/profile/update', info);
  }

  static async getBasket() {
    return $apiUser.get('/my/basket/');
  }

  static async addToBasket({ product, quantity, size }) {
    return $apiUser.post('/store/products/add', {
      product: product,
      quantity: quantity,
      size: size,
    });
  }

  static async removeFromBasket(info) {
    return $apiUser.post('/my/basket/delete-one-product', info);
  }
}
