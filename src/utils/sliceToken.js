export default class sliceToken {
  static async vk(link) {
    const startToken = link.indexOf('code=');
    const code = link.slice(startToken + 5, link.length);
    return code;
  }

  static async yandex(link) {
    const startToken = link.indexOf('access_token=');
    const endToken = link.indexOf('&token_type');
    const token = link.slice(startToken + 13, endToken);
    return token;
  }
}
