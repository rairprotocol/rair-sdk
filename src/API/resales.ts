import Api from '../common/Api';
import { ApiResponse, DatabaseId, Methods } from '../types/common';
import {
  OpenOffersParams,
  OpenOffersResult,
  GeneratePurchaseHashResult,
  CreateResaleParams,
  CreateResaleResult,
  UpdateResaleParams
} from '../types/resales';

export class ResalesAPI extends Api {
  async openOffers(params: OpenOffersParams) : Promise<OpenOffersResult> {
    return this.apiCall('open', {}, params);
  }
  async generatePurchaseHash({id}: DatabaseId) : Promise<GeneratePurchaseHashResult> {
    return this.apiCall(`purchase/${id}`);
  }
  async createOffer(params: CreateResaleParams) : Promise<CreateResaleResult> {
    return this.apiCall('create', params, {}, Methods.post);
  }
  async updateOffer(params: UpdateResaleParams) : Promise<ApiResponse> {
    return this.apiCall('update', params, {}, Methods.put);
  }
  async deleteOffer({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`delete/${id}`, {}, {}, Methods.delete);
  }
}
