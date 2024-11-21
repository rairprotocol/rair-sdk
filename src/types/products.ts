import { DatabaseId, PaginationParams } from "./common";
import { Product } from "./database";

export interface ListProductParams extends Product, PaginationParams {}
export interface ListProductResult {
    results: number;
    data: {
        doc: Array<Product>;
    },
}
export interface GetProductsByUserResult {
    products: Array<Product>
}
export interface SetProductBannerParams extends DatabaseId {
    banner: File;
}
export interface SetProductBannerResult {
    bannerURL: string;
}
