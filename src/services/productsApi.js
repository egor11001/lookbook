import { $api } from './axios';

export default class productsApi {
  static async getBrands() {
    return $api.get('/brands-images');
  }

  static async getProducts() {
    return $api.get('/store/products');
  }

  static async getProductsById(id) {
    return $api.get('/store/products/' + id);
  }
}
