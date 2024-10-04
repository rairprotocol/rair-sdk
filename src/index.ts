import { InitializationConfig } from '../types';

import { AnalyticsAPI } from './API/analytics';
import { AuthAPI } from './API/auth';

// export declare class RairSDK {
//   readonly credits: CreditsNamespace;
//   readonly contracts: ContractsNamespace;
//   readonly files: FilesNamespace;
//   readonly favorites: FavoritesNamespace;
//   readonly nft: NftNamespace;
//   readonly transaction: TransactionNamespace;
//   readonly users: UsersNamespace;
//   readonly offers: OffersNamespace;
//   readonly products: ProductsNamespace;
//   readonly resales: ResalesNamespace;
//   readonly search: SearchNamespace;
//   readonly settings: SettingsNamespace;
//   readonly tokens: TokensNamespace;
//   readonly upload: UploadNamespace;
//   readonly notifications: NotificationsNamespace;
//   readonly categories: CategoriesNamespace;
// }

class RairSDK {
  serverURL?: string;
  socketURL?: string;
  analytics?: AnalyticsAPI;
  auth?: AuthAPI;

  constructor(settings: InitializationConfig) {
    if (settings.serverURL) {
      this.serverURL = settings.serverURL;
      this.analytics = new AnalyticsAPI(settings.serverURL);
      this.auth = new AuthAPI(settings.serverURL);
    }
    if (settings.socketURL) {
      this.socketURL = settings.socketURL;
    }
  }
}

export default RairSDK;
