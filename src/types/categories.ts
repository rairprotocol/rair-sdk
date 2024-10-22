import { Category } from "./database";

export interface GetCategoriesResult {
    result: Array<Category>;
}

export interface UpdateCategories {
    list: Array<Category>;
}