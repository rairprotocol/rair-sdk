import Api from '../common/Api';
import { ApiResponse, DatabaseId, Methods, PaginationParams } from '../types/common';
import {
  CreateFavoriteParams,
  CreateFavoriteResult,
  GetFavoritesResult,
  GetAllFavoritesParams,
} from '../types/favorites';

export class FavoritesAPI extends Api {
  /**
   * Register a token as a favorite
   */
  async createFavorite(params: CreateFavoriteParams): Promise<CreateFavoriteResult> {
    return this.apiCall('favorites/', params, {}, Methods.post);
  }

  /**
   * List an user's favorite tokens
   */
  async getAllFavoritesForUser(params: PaginationParams): Promise<GetFavoritesResult> {
    return this.apiCall('favorites/', {}, {...params});
  }

  /**
   * List all users that favorited NFTs from a contract
   */
  async getAllFavoritesOfAddress(params: GetAllFavoritesParams): Promise<GetFavoritesResult> {
    const {userAddress, ...paginationParams} = params;
    return this.apiCall(`favorites/${userAddress}`, {}, paginationParams);
  }

  /**
   * Delete a favorite record
   */
  async deleteFavorite({id}: DatabaseId ): Promise<ApiResponse> {
    return this.apiCall(`favorites/${id}`, {}, {}, Methods.delete);
  }
}