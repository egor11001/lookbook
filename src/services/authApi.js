import { $api, $apiUser } from './axios';

export default class authApi {
  static async login({ username, password }) {
    return $api.post('/auth/sign-in-password/', { username: username, password: password });
  }

  /* static async loginCode({ phone_number, code }) {
    return $api.post('/auth/auth/', { phone_number: phone_number, code: code });
  } */

  static async loginVK(code) {
    return $api.post('/auth/convert-token-vk/', {
      redirect_uri: `https://lookbook.best/social-auth-service`,
      code: code,
    });
  }

  static async loginYandex(token) {
    return $api.post('/auth/convert-token-yandex/', {
      token: token,
    });
  }

  static async registration({ first_name, last_name, email, phone_number, password }) {
    return $api.post('/auth/sign-up-password/', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      password: password,
    });
  }

  static async refreshTokenSocial(token) {
    return $apiUser.post('/auth/refresh-token/', { refresh_token: token });
  }

  static async refreshTokenPassword(token) {
    return $apiUser.post('/auth/refresh-token-password/', { refresh_token: token });
  }
}
