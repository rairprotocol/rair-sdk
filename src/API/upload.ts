import Api from '../common/Api';
import { Methods } from '../types/common';
import {
  GetUploadTokenResult,
  ValidateUploadParams,
  ValidateUploadResult,
  AddMediaParams,
  AddMediaResult
} from '../types/upload';

export class UploadAPI extends Api {
  async getUploadToken(): Promise<GetUploadTokenResult> {
    return this.apiCall('token');
  }

  async validateData(params: ValidateUploadParams): Promise<ValidateUploadResult> {
    return this.apiCall('validate', {}, params);
  }

  async addMediaFile(params: AddMediaParams): Promise<AddMediaResult> {
    return this.apiCall('file', params, {}, Methods.post);
  }
};
