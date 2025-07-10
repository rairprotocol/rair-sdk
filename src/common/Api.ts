import { Methods } from "../types/common";
import { RairSDK } from '../index';

const itemsToString = (object: object): Record<string, string> => {
  const result = {};
  Object.keys(object).forEach((key) => {
    result[key] = object[key].toString();
  })
  return result;
}

export default class Api {
  commonRoute: string;
  errorHandler: (msg: string) => void;
  sdkInstance: RairSDK;

  constructor(
    route: string,
    errorHandler = console.error,
    sdkInstance: RairSDK
  ) {
    this.commonRoute = route;
    this.errorHandler = errorHandler;
    this.sdkInstance = sdkInstance;
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
    if (this.sdkInstance?.sessionId) {
      requestOptions.headers['Cookie'] = `connect.sid=${this.sdkInstance?.sessionId}`;
    }
    if (Object.keys(body).length) {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions['body'] = JSON.stringify(body);
    }
    const request = await fetch(
      `${this.sdkInstance.backendURL}/api/${this.commonRoute}/${route}?${queryParams.toString()}`,
      requestOptions
    );
    // Session handler
    const sessionCookie = request?.headers?.get('Set-Cookie');
    const clean = sessionCookie?.split('connect.sid=')?.[1].split(';')?.[0];
    if (clean && this.sdkInstance) {
      this.sdkInstance.sessionId = clean;
    }
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
