import { makeAutoObservable } from 'mobx';
import api from '../services';
import { failAuthNotification, defaultError, defaultSuccess } from '../components/Notifications';
import sliceToken from '../utils/sliceToken';

export default class UserStore {
  user = {};
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(info) {
    this.user = info;
  }

  get getUser() {
    return this.user;
  }

  get getAuth() {
    return this.isAuth;
  }

  async getProfile() {
    try {
      const res = await api.user.getProfile();
      /* if (res.data.length === 0) {
        throw new Error('Ошибка получения данных');
      } */
      this.setUser(res.data[0]);
      return res.status;
    } catch (e) {
      defaultError(e.message);
      return e.response.status;
    }
  }

  async updateProfile(info) {
    try {
      const { data } = await api.user.updateProfile(info);
      this.setUser(data);
      defaultSuccess('Данные изменены');
      return data;
    } catch (e) {
      defaultError();
      return e.response.status;
    }
  }

  /* async loginCode(info) {
    try {
      const { data } = await api.auth.loginCode(info);
      localStorage.setItem('UToken', data.key);
      this.setAuth(true);
      return await this.getProfile();
    } catch (e) {
      failAuthNotification(e.response.data.message);
      return e.response.status;
    }
  } */

  async login(info) {
    try {
      const { data } = await api.auth.login(info);
      localStorage.setItem('UToken', data.access_token);
      localStorage.setItem('URefresh', data.refresh_token);
      localStorage.setItem('token_type', 'email');
      this.setAuth(true);
      await this.getProfile();
      return 200;
    } catch (e) {
      failAuthNotification(e.response.data.message);
      return e.response.status;
    }
  }

  async registration(info) {
    try {
      await api.auth.registration(info);
      const res = await this.login({ username: info.email, password: info.password });
      return res;
    } catch (e) {
      failAuthNotification(e.response.data.message);
      return e.response.status;
    }
  }

  async logout() {
    try {
      localStorage.removeItem('UToken');
      localStorage.removeItem('URefresh');
      localStorage.removeItem('token_type');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      localStorage.removeItem('UToken');
      localStorage.removeItem('URefresh');
      localStorage.removeItem('token_type');
      this.setAuth(false);
      this.setUser({});
      return e.response.status;
    }
  }

  async checkAuth() {
    try {
      let res;
      if (localStorage.getItem('token_type') === 'email') {
        const { data } = await api.auth.refreshTokenPassword(localStorage.getItem('URefresh'));
        res = data;
        localStorage.setItem('token_type', 'email');
      } else {
        const { data } = await api.auth.refreshTokenSocial(localStorage.getItem('URefresh'));
        res = data;
        localStorage.setItem('token_type', 'social');
      }
      localStorage.setItem('UToken', res.access_token);
      localStorage.setItem('URefresh', res.refresh_token);
      this.setAuth(true);
      await this.getProfile();
      return true;
    } catch (e) {
      localStorage.removeItem('UToken');
      localStorage.removeItem('URefresh');
      localStorage.removeItem('token_type');
      this.setAuth(false);
      this.setUser(null);
      return e.response.status;
    }
  }

  async loginVK(link) {
    try {
      const code = await sliceToken.vk(link);
      const { data } = await api.auth.loginVK(code);
      localStorage.setItem('UToken', data.access_token);
      localStorage.setItem('URefresh', data.refresh_token);
      localStorage.setItem('token_type', 'social');
      this.setAuth(true);
      await this.getProfile();
      return true;
    } catch (e) {
      localStorage.removeItem('UToken');
      localStorage.removeItem('URefresh');
      localStorage.removeItem('token_type');
      throw new Error(e);
    }
  }

  async loginYandex(link) {
    try {
      const token = await sliceToken.yandex(link);
      const { data } = await api.auth.loginYandex(token);
      localStorage.setItem('UToken', data.access_token);
      localStorage.setItem('URefresh', data.refresh_token);
      localStorage.setItem('token_type', 'social');
      this.setAuth(true);
      await this.getProfile();
      return true;
    } catch (e) {
      localStorage.removeItem('UToken');
      localStorage.removeItem('URefresh');
      localStorage.removeItem('token_type');
      throw new Error(e);
    }
  }
}
