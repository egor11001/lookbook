import { makeAutoObservable } from 'mobx';
import api from '../services';
import { failAuthNotification, defaultError, defaultSuccess } from '../components/Notifications';

export default class UserStore {
  user = { sadasd: '123213' };
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
      this.setUser(res.data[0]);
      return res.status;
    } catch (e) {
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

  async loginCode(info) {
    try {
      const { data } = await api.auth.loginCode(info);
      localStorage.setItem('UToken', data.key);
      this.setAuth(true);
      return await this.getProfile();
    } catch (e) {
      failAuthNotification(e.response.data.message);
      return e.response.status;
    }
  }

  async logout() {
    try {
      localStorage.removeItem('UToken');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      localStorage.removeItem('UToken');
      this.setAuth(false);
      this.setUser({});
      return e.response.status;
    }
  }

  async checkAuth() {
    try {
      const res = await api.auth.checkAuth();
      this.setAuth(true);
      await this.getProfile();
      return res.status;
    } catch (e) {
      localStorage.removeItem('UToken');
      this.setAuth(false);
      this.setUser(null);
      return e.response.status;
    }
  }
}
