import Api from '../common/Api';
import { ApiResponse, DatabaseId } from '../types/common';
import {
  GetAllOffersParams,
  GetAllOffersResult,
  GetAvailableOffersResult,
  UpdateOffersParams,
} from '../types/offers';

export class OffersAPI extends Api {
  async getAllOffers(params: GetAllOffersParams) : Promise<GetAllOffersResult> {
    return this.apiCall('', {}, params);
  }
  async getAvailableOffers({id}: DatabaseId) : Promise<GetAvailableOffersResult> {
    return this.apiCall(`${id}/available`);
  }
  async updateOffer({id, ...queryParams}: UpdateOffersParams) : Promise<ApiResponse> {
    return this.apiCall(`${id}/available`, {}, queryParams);
  }
}
