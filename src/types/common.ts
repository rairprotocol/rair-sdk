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

export interface PaginationParams {
  pageNum?: number,
  itemsPerPage?: number
}

export interface DatabaseId {
  id: string;
}

export interface DatabaseIdArray {
  ids: Array<string>;
}

export interface FileId {
  id: string;
}

export interface ProductId {
  productId: string;
}

export interface UserAddress {
  userAddress: Hex;
}

export interface ResaleFlag {
  onResale: boolean;
}

export interface MetadataSearch {
  metadataFilters: string;
}

export interface TokenLimits {
  fromToken: string;
  toToken: string;
}