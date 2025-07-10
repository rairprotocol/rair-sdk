import { InitializationConfig, Methods } from './types/common';

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

const itemsToString = (object: object): Record<string, string> => {
  const result = {};
  Object.keys(object).forEach((key) => {
    result[key] = object[key].toString();
  })
  return result;
}
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

  userId?: string;
  backendURL?: string;
  errorHandler: (errorMessage: string) => void;

  constructor(settings: InitializationConfig) {
    this.errorHandler = console.error;
    if (settings.errorHandler) {
      this.errorHandler = settings.errorHandler;
    }
    if (settings.serverURL) {
      this.backendURL = settings.serverURL;
      this.analytics = new AnalyticsAPI(this);
      this.auth = new AuthAPI(this);
      this.credits = new CreditsAPI(this);
      this.contracts = new ContractAPI(this);
      this.files = new FilesAPI(this);
      this.favorites = new FavoritesAPI(this);
      this.nft = new NftAPI(this);
      this.transaction = new TransactionAPI(this);
      this.users = new UsersAPI(this);
      this.offers = new OffersAPI(this);
      this.products = new ProductsAPI(this);
      this.resales = new ResalesAPI(this);
      this.search = new SearchAPI(this);
      this.settings = new SettingsAPI(this);
      this.tokens = new TokensAPI(this);
      this.upload = new UploadAPI(this);
      this.notifications = new NotificationsAPI(this);
      this.categories = new CategoriesAPI(this);
      this.achievements = new AchievementsAPI(this);
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

  async apiCall(
    commonRoute: string,
    route: string,
    body: object = {},
    query: object = {},
    method: Methods = Methods.get
  ) {
    const queryParams = new URLSearchParams(itemsToString(query));
    const requestOptions: RequestInit = {
      method,
      headers: {},
      credentials: 'include'
    }
    requestOptions.headers = {
      'Accept': 'application/json'
    };
    if (this.sessionId) {
      requestOptions.headers['Cookie'] = `connect.sid=${this?.sessionId}`;
    }
    if (Object.keys(body).length) {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions['body'] = JSON.stringify(body);
    }
    const request = await fetch(
      `${this.backendURL}/api/${commonRoute}/${route}?${queryParams.toString()}`,
      requestOptions
    );
    // Session handler
    const sessionCookie = request?.headers?.get('Set-Cookie');
    const clean = sessionCookie?.split('connect.sid=')?.[1].split(';')?.[0];
    if (clean) {
      this.sessionId = clean;
    }
    try {
      const {success, message, ...result} = await request.json();
      if (!success && message) {
        throw new Error(message);
      }
      return {
        success,
        ...result
      };
    } catch (error) {
      if (error?.toString) {
        this.errorHandler(error?.toString());
      }
    }
  }
}

export { RairSDK };
