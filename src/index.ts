import { InitializationConfig } from './types/common';

import { AnalyticsAPI } from './API/analytics';
import { AuthAPI } from './API/auth';
import { CreditsAPI } from './API/credits';
import { ContractAPI } from './API/contracts';
import { FilesAPI } from './API/files';
import { FavoritesAPI } from './API/favorites';
import { NftAPI } from './API/nft';
import { TransactionAPI } from './API/transaction';
import { UsersAPI } from './API/users';
import { OffersAPI } from './API/offers';
import { ProductsAPI } from './API/products';
import { ResalesAPI } from './API/resales';
import { SearchAPI } from './API/search';
import { SettingsAPI } from './API/settings';
import { TokensAPI } from './API/tokens';
import { UploadAPI } from './API/upload';
import { NotificationsAPI } from './API/notifications';
import { CategoriesAPI } from './API/categories';
import { AchievementsAPI } from './API/achievements';

class RairSDK {
  socketURL?: string;
  analytics?: AnalyticsAPI;
  auth?: AuthAPI;
  credits?: CreditsAPI;
  contracts?: ContractAPI;
  files?: FilesAPI;
  favorites?: FavoritesAPI;
  nft?: NftAPI;
  transaction?: TransactionAPI;
  users?: UsersAPI;
  offers?: OffersAPI;
  products?: ProductsAPI;
  resales?: ResalesAPI;
  search?: SearchAPI;
  settings?: SettingsAPI;
  tokens?: TokensAPI;
  upload?: UploadAPI;
  notifications?: NotificationsAPI;
  categories?: CategoriesAPI;
  achievements?: AchievementsAPI;

  userId: string;
  backendURL: string;

  constructor(settings: InitializationConfig) {
    if (settings.serverURL) {
      this.backendURL = settings.serverURL;
      this.analytics = new AnalyticsAPI('analytics', settings.errorHandler, this);
      this.auth = new AuthAPI('auth', settings.errorHandler, this);
      this.credits = new CreditsAPI('credits', settings.errorHandler, this);
      this.contracts = new ContractAPI('contracts', settings.errorHandler, this);
      this.files = new FilesAPI('files', settings.errorHandler, this);
      this.favorites = new FavoritesAPI('favorites', settings.errorHandler, this);
      this.nft = new NftAPI('nft', settings.errorHandler, this);
      this.transaction = new TransactionAPI('transaction', settings.errorHandler, this);
      this.users = new UsersAPI('users', settings.errorHandler, this);
      this.offers = new OffersAPI('offers', settings.errorHandler, this);
      this.products = new ProductsAPI('products', settings.errorHandler, this);
      this.resales = new ResalesAPI('resales', settings.errorHandler, this);
      this.search = new SearchAPI('search', settings.errorHandler, this);
      this.settings = new SettingsAPI('settings', settings.errorHandler, this);
      this.tokens = new TokensAPI('tokens', settings.errorHandler, this);
      this.upload = new UploadAPI('upload', settings.errorHandler, this);
      this.notifications = new NotificationsAPI('notifications', settings.errorHandler, this);
      this.categories = new CategoriesAPI('categories', settings.errorHandler, this);
      this.achievements = new AchievementsAPI('achievements', settings.errorHandler, this);
    }
    if (settings.socketURL) {
      this.socketURL = settings.socketURL;
    }
  }

  get serverURL() {
    return this.backendURL;
  }

  get sessionId() {
    return this.userId;
  }

  set sessionId(id) {
    this.userId = id;
  }
}

export { RairSDK };
