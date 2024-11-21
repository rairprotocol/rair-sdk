import { ApiResponse, DatabaseId, PaginationParams } from "./common";
import { Offer } from './database';

export interface GetAllOffersParams extends
    PaginationParams,
    Omit<Offer, 'allowedCopies' | 'lockedCopies' | 'hidden'> {}

export interface GetAllOffersResult extends ApiResponse {
    results: number;
    data: {
        doc: Array<Offer>,
    },
}
export interface GetAvailableOffersResult extends ApiResponse {
    availableTokens: Array<{ token: number }>;
}
export interface UpdateOffersParams extends
    DatabaseId,
    Omit<Offer, 'allowedCopies' | 'lockedCopies' | 'hidden'> {}
