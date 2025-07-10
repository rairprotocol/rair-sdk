import { RairSDK } from '..';
import { GetCategoriesResult, UpdateCategories } from '../types/categories';
import { Methods } from '../types/common';

export class CategoriesAPI {

  commonRoute: string = 'categories';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

 /**
   * Fetch a list of all categories
   */
  async getCategories() : Promise<GetCategoriesResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '');
  }

 /**
   * Get the signature challenge to login into the system
   *
   * @param {Array<Category>} params.list        Array of updated categories
   * @param {string}          params.list.name   Category name
   * @param {string}          params.list._id    Category id
   */
  async updateCategory(params: UpdateCategories): Promise<GetCategoriesResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.post);
  }
}
