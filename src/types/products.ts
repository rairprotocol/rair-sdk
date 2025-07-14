import { ApiResponse, DatabaseId, PaginationParams } from "./common";
import { Product } from "./database";

export interface ListProductParams extends Partial<Product>, Partial<PaginationParams> {}
export interface ListProductResult extends ApiResponse {
    results: number;
    data: {
        doc: Array<Product>;
    },
}
export interface GetProductsByUserResult extends ApiResponse {
    products: Array<Product>
}
export interface SetProductBannerParams extends DatabaseId {
    banner: File;
}
export interface SetProductBannerResult extends ApiResponse {
    bannerURL: string;
}
