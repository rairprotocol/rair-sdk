import Api from '../common/Api';
import { GetCategoriesResult, UpdateCategories } from '../types/categories';
import { Methods } from '../types/common';

export class CategoriesAPI extends Api {
 /**
   * Fetch a list of all categories
   */
  async getCategories() : Promise<GetCategoriesResult> {
    return this.apiCall('categories/');
  }

 /**
   * Get the signature challenge to login into the system
   *
   * @param list        Array of updated categories
   * @param list.name   Category name
   * @param list._id    Category id
   */
  async updateCategory(params: UpdateCategories): Promise<GetCategoriesResult> {
    return this.apiCall('categories/', params, {}, Methods.post);
  }
}
