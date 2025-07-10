import { RairSDK } from '..';
import { ApiResponse, DatabaseId, Methods } from '../types/common';
import {
  OpenOffersParams,
  OpenOffersResult,
  GeneratePurchaseHashResult,
  CreateResaleParams,
  CreateResaleResult,
  UpdateResaleParams
} from '../types/resales';

export class ResalesAPI {

  commonRoute: string = 'resales';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async openOffers(params: OpenOffersParams) : Promise<OpenOffersResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'open', {}, params);
  }
  async generatePurchaseHash({id}: DatabaseId) : Promise<GeneratePurchaseHashResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `purchase/${id}`);
  }
  async createOffer(params: CreateResaleParams) : Promise<CreateResaleResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'create', params, {}, Methods.post);
  }
  async updateOffer(params: UpdateResaleParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'update', params, {}, Methods.put);
  }
  async deleteOffer({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `delete/${id}`, {}, {}, Methods.delete);
  }
}
