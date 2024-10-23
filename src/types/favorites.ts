import { ApiResponse, PaginationParams, UserAddress } from "./common";
import {FavoriteToken} from './database';

export interface CreateFavoriteParams {
    token: string;
}
export interface CreateFavoriteResult extends ApiResponse {
    data: {
        doc: FavoriteToken,
    },
}
export interface GetFavoritesResult extends ApiResponse {
    result: Array<FavoriteToken>;
}
export interface GetAllFavoritesParams extends PaginationParams, UserAddress {}