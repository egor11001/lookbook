import { makeAutoObservable } from 'mobx';
import api from '../services';

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

  get userInfo() {
    return this.user;
  }

  async getProfile() {
    try {
      const { data } = await api.user.getProfile();
      this.setUser(data);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async loginCode(info) {
    try {
      const { data } = await api.auth.loginCode(info);
      localStorage.setItem('UToken', data.key);
      this.setAuth(true);
      const profileData = await api.user.getProfile();
      this.setUser(profileData.data);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      localStorage.removeItem('UToken');
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
      localStorage.removeItem('UToken');
      this.setAuth(false);
      this.setUser({});
    }
  }
}
