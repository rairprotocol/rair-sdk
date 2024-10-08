export interface InitializationConfig {
  serverURL?: string;
  socketURL?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
}

export enum Methods {
  get = 'GET',
  post = 'POST',
  put = 'PUT'
}

export type Hex = `0x${string}`;