import { ApiResponse, PaginationParams } from "./common";
import { Contract, MintedToken, Offer, Product, User } from './database';

export interface GetAllTokensParams extends Partial<PaginationParams>, Partial<MintedToken> {}
export interface GetAllTokensResult extends ApiResponse {
    results: number;
    tokens: Array<MintedToken>;
}
export interface GetSingleTokenParams {
    contract: string;
    offerPool?: string;
    offers?: string;
    token: string;
}
export interface GetSingleTokenResult extends ApiResponse {
    data: {
        doc: MintedToken;
    }
}
export interface GetFullTokenResult extends ApiResponse {
    tokenData: MintedToken & {
        contract: Contract,
        offer: Offer,
        product: Product,
        ownerData: User,
    }
}