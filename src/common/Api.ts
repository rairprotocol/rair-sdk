import { Methods } from "../types/common";

const itemsToString = (object: object): Record<string, string> => {
  const result = {};
  Object.keys(object).forEach((key) => {
    result[key] = object[key].toString();
  })
  return result;
}

export default class Api {
  serverURL?: string;

  constructor(url: string) {
    this.serverURL = url;
  }

  async apiCall(
    route: string,
    body: object = {},
    query: object = {},
    method: Methods = Methods.get
  ) {
    const queryParams = new URLSearchParams(itemsToString(query));
    const requestOptions = {
      method,
      headers: body && {
        'Accept': 'application/json'
      }
    }
    if (Object.keys(body).length) {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions['body'] = JSON.stringify(body);
    }
    const request = await fetch(
      `${this.serverURL}/api/${route}?${queryParams.toString()}`,
      requestOptions
    );
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
