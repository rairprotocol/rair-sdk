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
      this.analytics = new AnalyticsAPI(settings.serverURL, 'analytics');
      this.auth = new AuthAPI(settings.serverURL, 'auth');
      this.credits = new CreditsAPI(settings.serverURL, 'credits');
      this.contracts = new ContractAPI(settings.serverURL, 'contracts');
      this.files = new FilesAPI(settings.serverURL, 'files');
      this.favorites = new FavoritesAPI(settings.serverURL, 'favorites');
      this.nft = new NftAPI(settings.serverURL, 'nft');
      this.transaction = new TransactionAPI(settings.serverURL, 'transaction');
      this.users = new UsersAPI(settings.serverURL, 'users');
      this.offers = new OffersAPI(settings.serverURL, 'offers');
      this.products = new ProductsAPI(settings.serverURL, 'products');
      this.resales = new ResalesAPI(settings.serverURL, 'resales');
      this.search = new SearchAPI(settings.serverURL, 'search');
      this.settings = new SettingsAPI(settings.serverURL, 'settings');
      this.tokens = new TokensAPI(settings.serverURL, 'tokens');
      this.upload = new UploadAPI(settings.serverURL, 'upload');
      this.notifications = new NotificationsAPI(settings.serverURL, 'notifications');
      this.categories = new CategoriesAPI(settings.serverURL, 'categories');
      this.achievements = new AchievementsAPI(settings.serverURL, 'achievements');
    }
    if (settings.socketURL) {
      this.socketURL = settings.socketURL;
    }
  }
}

export { RairSDK };
