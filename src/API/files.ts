import { RairSDK } from '..';
import { ApiResponse, DatabaseId, FileId, Methods } from '../types/common';
import {
  UpdateMediaParams,
  DeleteMediaResult,
  ListMediaParams,
  ListMediaResult,
  GetFileByIdResult,
  UpdateFileByIdParams,
  GetFilesByCategoryParams,
  GetFilesByCategoryResult,
  GetFilesByTokenResult,
  GetOffersByFileResult,
  ConnectOfferAndFileParams,
  ConnectOfferAndFileResult,
  RemoveOfferFromFileParams,
  RemoveOfferFromFileResult
} from '../types/files';

export class FilesAPI {

  commonRoute: string = 'files';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async updateMedia({id, ...bodyParams}: UpdateMediaParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `update/${id}`, bodyParams, {}, Methods.patch);
  }
  async deleteMedia({id}: FileId) : Promise<DeleteMediaResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `remove/${id}`, {}, {}, Methods.delete);
  }
  async listMedia(params: ListMediaParams) : Promise<ListMediaResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'list', {}, params);
  }
  async getFileById({id}: FileId) : Promise<GetFileByIdResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `byId/${id}`);
  }
  async updateFileById({id, ...bodyParams}: UpdateFileByIdParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `byId/${id}`, bodyParams, {}, Methods.put);
  }
  async getFilesByCategory({id, ...queryParams}: GetFilesByCategoryParams) : Promise<GetFilesByCategoryResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `byCategory/${id}`, {}, queryParams);
  }
  async getFilesByToken({id}: DatabaseId) : Promise<GetFilesByTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `forToken/${id}`);
  }
  async getOffersByFile({id}: FileId) : Promise<GetOffersByFileResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}/unlocks`);
  }
  async connectOfferAndFile({id, ...bodyParams}: ConnectOfferAndFileParams) : Promise<ConnectOfferAndFileResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}/unlocks`, bodyParams, {}, Methods.post);
  }
  async removeOfferFromFile({id, ...bodyParams}: RemoveOfferFromFileParams) : Promise<RemoveOfferFromFileResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}/unlocks`, bodyParams, {}, Methods.delete);
  }
}
