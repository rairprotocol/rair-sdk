import { RairSDK } from '..';
import { ApiResponse, Methods } from '../types/common';
import { Blockchain, ServerSettings } from '../types/database';
import {
  GetSettingsResult,
  GetThemingResult,
  GetFeaturedCollectionResult,
  SetAppLogoParams,
} from '../types/settings';

export class SettingsAPI {

  commonRoute: string = 'settings';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async getSettings() : Promise<GetSettingsResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '');
  }
  async getTheming() : Promise<GetThemingResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'theme');
  }
  async getFeaturedCollection() : Promise<GetFeaturedCollectionResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'featured');
  }
  async setAppLogo(params: SetAppLogoParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'appLogo', params, {}, Methods.post);
  }
  async setSetting(params: ServerSettings) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.post);
  }
  async modifyBlockchain(params: Blockchain) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${params.hash}`, params, {}, Methods.put);
  }
  async addBlockchain(params: Blockchain) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${params.hash}`, params, {}, Methods.post);
  }
  async removeBlockchain({hash}: Pick<Blockchain, 'hash'>) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${hash}`, {}, {}, Methods.delete);
  }
}
