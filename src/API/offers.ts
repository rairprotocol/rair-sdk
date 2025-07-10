import { RairSDK } from '..';
import { ApiResponse, DatabaseId } from '../types/common';
import {
  GetAllOffersParams,
  GetAllOffersResult,
  GetAvailableOffersResult,
  UpdateOffersParams,
} from '../types/offers';

export class OffersAPI {

  commonRoute: string = 'offers';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async getAllOffers(params: GetAllOffersParams) : Promise<GetAllOffersResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', {}, params);
  }
  async getAvailableOffers({id}: DatabaseId) : Promise<GetAvailableOffersResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}/available`);
  }
  async updateOffer({id, ...queryParams}: UpdateOffersParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}/available`, {}, queryParams);
  }
}
