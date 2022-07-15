import { makeAutoObservable } from 'mobx';
import api from '../services';

export default class UserStore {
  user = {};
  isAuth = true;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(info) {
    this.user = info;
  }

  get userInfo() {
    return this.user;
  }

  async getProfile() {
    try {
      const { data } = await api.user.getProfile();
      this.setUser(data);
    } catch (e) {
      return e.response.status;
    }
  }

  async loginCode(info) {
    try {
      const { data } = await api.auth.loginCode(info);
      localStorage.setItem('UToken', data.key);
      this.setAuth(true);
      const profileData = await api.user.getProfile();
      this.setUser(profileData.data);
      return profileData.status;
    } catch (e) {
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
      this.getProfile();
      return res.status;
    } catch (e) {
      localStorage.removeItem('UToken');
      this.setAuth(false);
      this.setUser({});
      return e.response.status;
    }
  }
}
