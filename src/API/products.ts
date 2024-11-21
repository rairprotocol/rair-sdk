import Api from '../common/Api';
import { Methods, UserAddress } from '../types/common';
import {
  ListProductParams,
  ListProductResult,
  GetProductsByUserResult,
  SetProductBannerParams,
  SetProductBannerResult
} from '../types/products';

export class ProductsAPI extends Api {
  async listProduct(params: ListProductParams) : Promise<ListProductResult> {
    return this.apiCall('', {}, params);
  }
  async getProductsByUser({userAddress}: UserAddress) : Promise<GetProductsByUserResult> {
    return this.apiCall(`user/${userAddress}`);
  }
  async setBanner({id, banner}: SetProductBannerParams) : Promise<SetProductBannerResult> {
    return this.apiCall(`${id}`, {banner}, {}, Methods.post);
  }
}