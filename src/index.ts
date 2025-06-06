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
  serverURL?: string;
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

  constructor(settings: InitializationConfig) {
    if (settings.serverURL) {
      this.serverURL = settings.serverURL;
      this.analytics = new AnalyticsAPI(settings.serverURL, 'analytics', settings.errorHandler);
      this.auth = new AuthAPI(settings.serverURL, 'auth', settings.errorHandler);
      this.credits = new CreditsAPI(settings.serverURL, 'credits', settings.errorHandler);
      this.contracts = new ContractAPI(settings.serverURL, 'contracts', settings.errorHandler);
      this.files = new FilesAPI(settings.serverURL, 'files', settings.errorHandler);
      this.favorites = new FavoritesAPI(settings.serverURL, 'favorites', settings.errorHandler);
      this.nft = new NftAPI(settings.serverURL, 'nft', settings.errorHandler);
      this.transaction = new TransactionAPI(settings.serverURL, 'transaction', settings.errorHandler);
      this.users = new UsersAPI(settings.serverURL, 'users', settings.errorHandler);
      this.offers = new OffersAPI(settings.serverURL, 'offers', settings.errorHandler);
      this.products = new ProductsAPI(settings.serverURL, 'products', settings.errorHandler);
      this.resales = new ResalesAPI(settings.serverURL, 'resales', settings.errorHandler);
      this.search = new SearchAPI(settings.serverURL, 'search', settings.errorHandler);
      this.settings = new SettingsAPI(settings.serverURL, 'settings', settings.errorHandler);
      this.tokens = new TokensAPI(settings.serverURL, 'tokens', settings.errorHandler);
      this.upload = new UploadAPI(settings.serverURL, 'upload', settings.errorHandler);
      this.notifications = new NotificationsAPI(settings.serverURL, 'notifications', settings.errorHandler);
      this.categories = new CategoriesAPI(settings.serverURL, 'categories', settings.errorHandler);
      this.achievements = new AchievementsAPI(settings.serverURL, 'achievements', settings.errorHandler);
    }
    if (settings.socketURL) {
      this.socketURL = settings.socketURL;
    }
  }
}

export { RairSDK };
