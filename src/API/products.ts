import { RairSDK } from '..';
import { Methods, UserAddress } from '../types/common';
import {
  ListProductParams,
  ListProductResult,
  GetProductsByUserResult,
  SetProductBannerParams,
  SetProductBannerResult
} from '../types/products';

export class ProductsAPI {

  commonRoute: string = 'products';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async listProduct(params: ListProductParams) : Promise<ListProductResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', {}, params);
  }
  async getProductsByUser({userAddress}: UserAddress) : Promise<GetProductsByUserResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `user/${userAddress}`);
  }
  async setBanner({id, banner}: SetProductBannerParams) : Promise<SetProductBannerResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}`, {banner}, {}, Methods.post);
  }
}