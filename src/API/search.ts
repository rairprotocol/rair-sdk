import Api from '../common/Api';
import { SearchParams, SearchResponse } from '../types/search';

export class SearchAPI extends Api {
  /**
   * Search through records for user, product or offer data
   *
   * @param {string} textParam  String to search
   */
  async textSearch({textParam}: SearchParams): Promise<SearchResponse> {
    return this.apiCall(`${textParam}`);
  }

  /**
   * Search through all records for user, product or offer data
   *
   * @param {string} textParam  String to search
   */
  async textSearchAll({textParam}: SearchParams): Promise<SearchResponse> {
    return this.apiCall(`${textParam}/all`);
  }
}
