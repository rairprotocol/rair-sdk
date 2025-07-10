import { RairSDK } from '..';
import { Methods } from '../types/common';
import {
  GetUploadTokenResult,
  ValidateUploadParams,
  ValidateUploadResult,
  AddMediaParams,
  AddMediaResult
} from '../types/upload';

export class UploadAPI {

  commonRoute: string = 'upload';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async getUploadToken(): Promise<GetUploadTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'token');
  }

  async validateData(params: ValidateUploadParams): Promise<ValidateUploadResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'validate', {}, params);
  }

  async addMediaFile(params: AddMediaParams): Promise<AddMediaResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'file', params, {}, Methods.post);
  }
};
