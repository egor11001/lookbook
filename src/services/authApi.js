import { $api } from './axios';

export default class authApi {
  static async login({ phone_number }) {
    return $api.post('/auth/sign-in', { phone_number: phone_number });
  }

  static async loginCode({ phone_number, code }) {
    return $api.post('/auth/auth', { phone_number: phone_number, code: code });
  }

  static async registration({ first_name, last_name, email, phone_number }) {
    return $api.post('/auth/sign-up', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
    });
  }
}
