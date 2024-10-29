import Api from '../common/Api';
import { DatabaseId, DatabaseIdArray, Methods } from '../types/common';
import {
  ListNotificationsParams,
  ListNotificationsResult,
  SingleNotificationResult,
  MarkReadNotificationResult,
  DeleteNotificationResult
} from '../types/notifications';

export class NotificationsAPI extends Api {
  /**
   * Fetch a list of notifications for the user
   * @param {Hex} params.user
   * @param {string} params.type
   * @param {boolean} params.read
   * @param {number} params.pageNum
   * @param {number} params.itemsPerPage
   */
  async listNotifications(params: ListNotificationsParams) :Promise<ListNotificationsResult> {
    return this.apiCall('notifications/', {}, {...params});
  }

  /**
   * Fetch a single notification
   * @param {string} params.id
   */
  async getSingleNotification({id}: DatabaseId) :Promise<SingleNotificationResult> {
    return this.apiCall(`notifications/${id}`);
  }

  /**
   * Fetch a single notification
   * @param {Array<string>} params.ids
   */
  async markNotificationAsRead(params: DatabaseIdArray) :Promise<MarkReadNotificationResult> {
    return this.apiCall('notifications/', params, {}, Methods.put);
  }

  /**
   * Fetch a single notification
   * @param {Array<string>} params.ids
   */
  async deleteNotification(params: DatabaseIdArray) :Promise<DeleteNotificationResult> {
    return this.apiCall('notifications/', params, {}, Methods.delete);
  }
}