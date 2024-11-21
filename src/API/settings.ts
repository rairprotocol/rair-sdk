import Api from '../common/Api';
import { ApiResponse, Methods } from '../types/common';
import { Blockchain, ServerSettings } from '../types/database';
import {
  GetSettingsResult,
  GetThemingResult,
  GetFeaturedCollectionResult,
  SetAppLogoParams,
} from '../types/settings';

export class SettingsAPI extends Api {
  async getSettings() : Promise<GetSettingsResult> {
    return this.apiCall('');
  }
  async getTheming() : Promise<GetThemingResult> {
    return this.apiCall('theme');
  }
  async getFeaturedCollection() : Promise<GetFeaturedCollectionResult> {
    return this.apiCall('featured');
  }
  async setAppLogo(params: SetAppLogoParams) : Promise<ApiResponse> {
    return this.apiCall('appLogo', params, {}, Methods.post);
  }
  async setSetting(params: ServerSettings) : Promise<ApiResponse> {
    return this.apiCall('', params, {}, Methods.post);
  }
  async modifyBlockchain(params: Blockchain) : Promise<ApiResponse> {
    return this.apiCall(`${params.hash}`, params, {}, Methods.put);
  }
  async addBlockchain(params: Blockchain) : Promise<ApiResponse> {
    return this.apiCall(`${params.hash}`, params, {}, Methods.post);
  }
  async removeBlockchain({hash}: Pick<Blockchain, 'hash'>) : Promise<ApiResponse> {
    return this.apiCall(`${hash}`, {}, {}, Methods.delete);
  }
}
