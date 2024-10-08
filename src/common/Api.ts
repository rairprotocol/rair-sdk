import { Methods } from "../types/common";

export default class Api {
  serverURL?: string;

  constructor(url: string) {
    this.serverURL = url;
  }

  async apiCall(route: string, params: object = {}, method: Methods = Methods.get) {
    const request = await fetch(`${this.serverURL}/api/${route}`, {
      body: JSON.stringify(params),
      method,
      headers: params && {
        'Content-Type': 'application/json',
      }
    });
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
