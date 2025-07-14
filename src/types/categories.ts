import { ApiResponse } from "./common";
import { Category } from "./database";

export interface GetCategoriesResult extends ApiResponse {
    result: Array<Category & { files: number }>;
}

export interface UpdateCategories {
    list: Array<Category>;
}