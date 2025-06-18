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
  commonRoute: string;
  errorHandler: (msg: string) => void;

  constructor(url: string, route: string, errorHandler = console.error) {
    this.serverURL = url;
    this.commonRoute = route;
    this.errorHandler = errorHandler;
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
      `${this.serverURL}/api/${this.commonRoute}/${route}?${queryParams.toString()}`,
      requestOptions
    );
    try {
      const {success, message, ...result} = await request.json();
      if (!success && message) {
        throw new Error(message);
      }
      return {
        success,
        ...result
      };
    } catch (error) {
      if (error?.toString) {
        this.errorHandler(error?.toString());
      }
    }
  }
}
