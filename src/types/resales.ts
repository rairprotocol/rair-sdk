import { ApiResponse } from "./common";
import { Contract, ResaleData, User } from './database';

export interface OpenOffersParams {
    contract?: string;
    blockchain?: string;
    index?: number;
}

export interface OpenOffersResult extends ApiResponse {
    data: Array<ResaleData & {
        sellerData: User;
        contractData: Contract;
    }>
}

export interface GeneratePurchaseHashResult extends ApiResponse {
    hash: string;
}

export interface CreateResaleParams {
    contract: string;
    blockchain: string;
    index: number;
    price: string;
}

export interface CreateResaleResult extends ApiResponse {
    offer: ResaleData;
}

export interface UpdateResaleParams {
    id: string;
    price: string;
}
