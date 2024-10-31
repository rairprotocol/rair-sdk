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
    return this.apiCall('/upload/token');
  }

  async validateData(params: ValidateUploadParams): Promise<ValidateUploadResult> {
    return this.apiCall('/upload/validate', {}, params);
  }

  async addMediaFile(params: AddMediaParams): Promise<AddMediaResult> {
    return this.apiCall('/upload/file', params, {}, Methods.post);
  }
};
