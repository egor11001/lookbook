import { $apiUser } from './axios';

export default class userApi {
  static async getProfile() {
    return $apiUser.get('/my/profile');
  }

  static async getBasket() {
    return $apiUser.get('/my/basket');
  }

  static async addToBasket({ id, count }) {
    return $apiUser.put('/store/products/add', { product: id, quantity: count });
  }

  static async removeFromBasket({ id }) {
    return $apiUser.delete('/my/basket/delete-product', { product: id });
  }
}
