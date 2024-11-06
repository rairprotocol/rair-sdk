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

  constructor(settings: InitializationConfig) {
    if (settings.serverURL) {
      this.serverURL = settings.serverURL;
      this.analytics = new AnalyticsAPI(settings.serverURL);
      this.auth = new AuthAPI(settings.serverURL);
      this.credits = new CreditsAPI(settings.serverURL);
      this.contracts = new ContractAPI(settings.serverURL);
      this.files = new FilesAPI(settings.serverURL);
      this.favorites = new FavoritesAPI(settings.serverURL);
      this.nft = new NftAPI(settings.serverURL);
      this.transaction = new TransactionAPI(settings.serverURL);
      this.users = new UsersAPI(settings.serverURL);
      this.offers = new OffersAPI(settings.serverURL);
      this.products = new ProductsAPI(settings.serverURL);
      this.resales = new ResalesAPI(settings.serverURL);
      this.search = new SearchAPI(settings.serverURL);
      this.settings = new SettingsAPI(settings.serverURL);
      this.tokens = new TokensAPI(settings.serverURL);
      this.upload = new UploadAPI(settings.serverURL);
      this.notifications = new NotificationsAPI(settings.serverURL);
      this.categories = new CategoriesAPI(settings.serverURL);
    }
    if (settings.socketURL) {
      this.socketURL = settings.socketURL;
    }
  }
}

export { RairSDK };
