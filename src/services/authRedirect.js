export default class authRedirect {
  static async forVK() {
    return await window.location.replace(
      `https://oauth.vk.com/authorize?client_id=${process.env.REACT_APP_VK_CLIENT_ID}&redirect_uri=https://lookbook.best/social-auth-service&display=page&response_type=code`,
    );
  }

  static async forYandex() {
    return await window.location.replace(
      `https://oauth.yandex.ru/authorize?response_type=token&client_id=76026679b05740b3937cff7459b60ac8`,
    );
  }
}
