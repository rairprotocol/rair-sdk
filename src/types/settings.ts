import { ApiResponse } from "./common";
import { Blockchain, Product, ServerSettings, User } from "./database";

export interface GetSettingsResult extends ApiResponse {
    settings: ServerSettings & {featuredCollection: Product},
    blockchainSettings: Array<Blockchain>,
}

export interface GetThemingResult extends ApiResponse, Pick<ServerSettings, 
    'darkModePrimary' |
    'darkModeSecondary' |
    'darkModeText' |
    'darkModeBannerLogo' |
    'darkModeMobileLogo' |
    'lightModeBannerLogo' |
    'lightModeMobileLogo' |
    'buttonPrimaryColor' |
    'buttonFadeColor' |
    'buttonSecondaryColor' |
    'iconColor'
> {}

export interface GetFeaturedCollectionResult extends ApiResponse {
    data: {
        blockchain: string;
        contract: string;
        product: string;
        collectionName: string;
        collectionBanner: string;
        user: User | string;
    }
}

export interface SetAppLogoParams {
    logoImage: File;
}
