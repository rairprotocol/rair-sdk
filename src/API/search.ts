import { RairSDK } from '..';
import { SearchParams, SearchResponse } from '../types/search';

export class SearchAPI {

  commonRoute: string = 'search';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  /**
   * Search through records for user, product or offer data
   *
   * @param {string} textParam  String to search
   */
  async textSearch({textParam}: SearchParams): Promise<SearchResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${textParam}`);
  }

  /**
   * Search through all records for user, product or offer data
   *
   * @param {string} textParam  String to search
   */
  async textSearchAll({textParam}: SearchParams): Promise<SearchResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${textParam}/all`);
  }
}
