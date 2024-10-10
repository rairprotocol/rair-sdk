import { Methods } from "../types/common";

export default class Api {
  serverURL?: string;

  constructor(url: string) {
    this.serverURL = url;
  }

  async apiCall(route: string, params: object = {}, method: Methods = Methods.get) {
    const requestOptions = {
      method,
      headers: params && {
        'Accept': 'application/json'
      }
    }
    if (Object.keys(params).length) {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions['body'] = JSON.stringify(params);
    }
    const request = await fetch(`${this.serverURL}/api/${route}`, requestOptions);
    try {
      const {success, message, ...result} = await request.json();
      if (!success && message) {
        throw new Error(message);
      }
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
