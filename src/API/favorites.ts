import { RairSDK } from '..';
import { ApiResponse, DatabaseId, Methods, PaginationParams } from '../types/common';
import {
  CreateFavoriteParams,
  CreateFavoriteResult,
  GetFavoritesResult,
  GetAllFavoritesParams,
} from '../types/favorites';

export class FavoritesAPI {

  commonRoute: string = 'favorites';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  /**
   * Register a token as a favorite
   */
  async createFavorite(params: CreateFavoriteParams): Promise<CreateFavoriteResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.post);
  }

  /**
   * List an user's favorite tokens
   */
  async getAllFavoritesForUser(params: PaginationParams): Promise<GetFavoritesResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', {}, {...params});
  }

  /**
   * List all users that favorited NFTs from a contract
   */
  async getAllFavoritesOfAddress(params: GetAllFavoritesParams): Promise<GetFavoritesResult> {
    const {userAddress, ...paginationParams} = params;
    return this.sdkInstance.apiCall(this.commonRoute, `${userAddress}`, {}, paginationParams);
  }

  /**
   * Delete a favorite record
   */
  async deleteFavorite({id}: DatabaseId ): Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}`, {}, {}, Methods.delete);
  }
}