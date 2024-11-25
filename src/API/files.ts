import Api from '../common/Api';
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

export class FilesAPI extends Api {
  async updateMedia({id, ...bodyParams}: UpdateMediaParams) : Promise<ApiResponse> {
    return this.apiCall(`${id}`, bodyParams, {}, Methods.patch);
  }
  async deleteMedia({id}: FileId) : Promise<DeleteMediaResult> {
    return this.apiCall(`${id}`, {}, {}, Methods.delete);
  }
  async listMedia(params: ListMediaParams) : Promise<ListMediaResult> {
    return this.apiCall('list', {}, params);
  }
  async getFileById({id}: FileId) : Promise<GetFileByIdResult> {
    return this.apiCall(`byId/${id}`);
  }
  async updateFileById({id, ...bodyParams}: UpdateFileByIdParams) : Promise<ApiResponse> {
    return this.apiCall(`byId/${id}`, bodyParams, {}, Methods.put);
  }
  async getFilesByCategory({id, ...queryParams}: GetFilesByCategoryParams) : Promise<GetFilesByCategoryResult> {
    return this.apiCall(`byCategory/${id}`, {}, queryParams);
  }
  async getFilesByToken({id}: DatabaseId) : Promise<GetFilesByTokenResult> {
    return this.apiCall(`forToken/${id}`);
  }
  async getOffersByFile({id}: FileId) : Promise<GetOffersByFileResult> {
    return this.apiCall(`${id}/unlocks`);
  }
  async connectOfferAndFile({id, ...bodyParams}: ConnectOfferAndFileParams) : Promise<ConnectOfferAndFileResult> {
    return this.apiCall(`${id}/unlocks`, bodyParams, {}, Methods.post);
  }
  async removeOfferFromFile({id, ...bodyParams}: RemoveOfferFromFileParams) : Promise<RemoveOfferFromFileResult> {
    return this.apiCall(`${id}/unlocks`, bodyParams, {}, Methods.delete);
  }
}
