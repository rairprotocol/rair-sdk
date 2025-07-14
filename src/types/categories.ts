import { Category } from "./database";

export interface GetCategoriesResult {
    result: Array<Category & { files: number }>;
}

export interface UpdateCategories {
    list: Array<Category>;
}