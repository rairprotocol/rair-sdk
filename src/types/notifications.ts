import { ApiResponse, PaginationParams } from './common';
import { Notification } from './database';

export interface ListNotificationsParams extends PaginationParams, Pick<Notification, 'user' | 'type' | 'read'> {
  onlyUnread: boolean;
}
export interface ListNotificationsResult extends ApiResponse {
  notifications: Array<Notification>;
  totalCount: number;
}
export interface SingleNotificationResult extends ApiResponse  {
  notification: Notification,
}
export interface MarkReadNotificationResult extends ApiResponse  {
  updated: number,
}
export interface DeleteNotificationResult extends ApiResponse  {
  deleted: number,
}