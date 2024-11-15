import Api from '../common/Api';
import { GetAnalyticsParams, GetAnalyticsResult } from '../types/analytics';

export class AnalyticsAPI extends Api {
  /**
   * Get the analytics report for a specific file
   * @param {string} params.mediaId       Id for the file
   * @param {string} params.fromDate      Filters the results from a starting date
   * @param {string} params.toDate        Filters the result up to an ending date
   * @param {Hex} params.userAddress      Filters the results to a specific user
   * @param {boolean} params.onlyCount    Returns only the number of views
   * @param {number} params.pageNum       Page number, used for pagination
   * @param {number} params.itemsPerPage  Items per page, used for pagination
   * @public
   */
  async fromMedia(params: GetAnalyticsParams): Promise<GetAnalyticsResult> {
    const {mediaId, ...queryParams} = params;
    return this.apiCall(`${mediaId}`, params, queryParams);
  }

  /**
   * Get the analytics report for a specific file in downloadable CSV form
   *
   * @param mediaId       Id for the file
   * @param fromDate      Filters the results from a starting date
   * @param toDate        Filters the result up to an ending date
   * @param userAddress   Filters the results to a specific user
   * @param onlyCount     Returns only the number of views
   * @param pageNum       Page number, used for pagination
   * @param itemsPerPage  Items per page, used for pagination
   * @public
   */
  async fromMediaAsCSV(params: GetAnalyticsParams) {
    const {mediaId, ...queryParams} = params;
    return this.apiCall(`${mediaId}/csv`, params, queryParams);
  }
}