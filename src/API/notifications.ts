import { RairSDK } from '..';
import { DatabaseId, DatabaseIdArray, Methods } from '../types/common';
import {
  ListNotificationsParams,
  ListNotificationsResult,
  SingleNotificationResult,
  MarkReadNotificationResult,
  DeleteNotificationResult
} from '../types/notifications';

export class NotificationsAPI {

  commonRoute: string = 'notifications';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  /**
   * Fetch a list of notifications for the user
   * @param {Hex} params.user
   * @param {string} params.type
   * @param {boolean} params.read
   * @param {number} params.pageNum
   * @param {number} params.itemsPerPage
   */
  async listNotifications(params: ListNotificationsParams) :Promise<ListNotificationsResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', {}, {...params});
  }

  /**
   * Fetch a single notification
   * @param {string} params.id
   */
  async getSingleNotification({id}: DatabaseId) :Promise<SingleNotificationResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}`);
  }

  /**
   * Fetch a single notification
   * @param {Array<string>} params.ids
   */
  async markNotificationAsRead(params: DatabaseIdArray) :Promise<MarkReadNotificationResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.put);
  }

  /**
   * Fetch a single notification
   * @param {Array<string>} params.ids
   */
  async deleteNotification(params: DatabaseIdArray) :Promise<DeleteNotificationResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.delete);
  }
}