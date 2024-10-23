import { ApiResponse, Hex } from "./common";

export interface QueryCreditsParams {
    blockchain: Hex;
    tokenAddress: Hex;
}
export interface QueryCreditsResult extends ApiResponse {
    credits: string;
}
export interface WithdrawCreditsParams {
    blockchain: Hex;
    tokenAddress: Hex;
    amount: number;
}
export interface WithdrawCreditsResult extends ApiResponse {
    hash: string;
}