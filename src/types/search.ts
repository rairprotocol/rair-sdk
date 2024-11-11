import { ApiResponse } from "./common";
import { User, Product, MintedToken } from "./database";

export interface SearchParams {
    textParam: string;
}

export interface SearchResponse extends ApiResponse {
    data: {
        users: Array<User>;
        products: Array<Product>;
        tokens: Array<MintedToken>;
    };
}