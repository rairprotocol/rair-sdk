import { Hex, DatabaseDocument } from "./common";

export interface User extends DatabaseDocument {
    email?: string;
    nickName?: string;
    avatar?: string;
    background?: string;
    firstName?: string;
    lastName?: string;
    ageVerified?: boolean;
    publicAddress: Hex;
    creationDate?: Date;
    blocked?: boolean;
    // Github integration
    gitHandle?: string;
    userLevel?: number;
    available?: boolean;
    languages?: Array<{name: string, percentage: number}>;
}

export interface MediaViewLog extends DatabaseDocument {
    userAddress: Hex;
    file: string;
    decryptedFiles: number
    offer?: string;
}

export interface Category extends DatabaseDocument {
    name: string;
    files: number;
}


/**
 * @property {string} title Contract's name
 * @property {Hex} user User that deployed the contract
 * @property {Hex} blockchain 0x Id of the Blockchain where the contract is
 * @property {Hex} contractAddress 0x address of the contract
 * @property {boolean} diamond Is diamond contract
 * @property {Date} creationDate Date registered in database
 * @property {Hex} transactionHash Transaction hash of deployment
 * @property {string} lastSyncedBlock Last block synced in database
 * @property {boolean} external Non-RAIR contract
 * @property {boolean} singleMetadata If single metadata URL is applied to all tokens
 * @property {string} metadataURI Metadata URI for tokens
 * @property {Hex} importedBy Address of user that imported the contract, if external
 * @property {boolean} blockSync Will not sync in database
 * @property {boolean} blockView Will be hidden
 */
export interface Contract extends DatabaseDocument {
    title: string;
    user: Hex;
    blockchain: Hex;
    contractAddress: Hex;
    diamond: boolean;
    creationDate: Date;
    transactionHash?: Hex;
    lastSyncedBlock?: string;
    external: boolean;
    singleMetadata?: boolean;
    metadataURI?: string;
    importedBy?: Hex;
    blockSync?: boolean;
    blockView?: boolean;
}

export interface MediaFile extends DatabaseDocument {
  uploader: Hex;
  hidden: boolean;
  ageRestricted?: boolean;
  title: string;
  description: string;
  duration: string;
  type: string;
  extension: string;
  meetingId: string;
  encryptionType: string;
  // mainManifest: string;
  storage?: string;
  storagePath?: string;
  staticThumbnail: string;
  animatedThumbnail?: string;
  category?: string;
  demo: boolean;
  views?: number;
  totalEncryptedFiles?: number;
}

export interface Blockchain extends DatabaseDocument {
    hash: Hex;
    name: string;
    display?: boolean;
    sync?: boolean;
  
    diamondFactoryAddress?: string;
    classicFactoryAddress?: string;
    diamondMarketplaceAddress?: string;
    mainTokenAddress?: string;
    licenseExchangeAddress?: string;
  
    rpcEndpoint?: string;
    blockExplorerGateway?: string;
    alchemySupport: boolean;
  
    numericalId?: number;
    testnet?: boolean;
    symbol?: string;
}

export interface FavoriteToken extends DatabaseDocument {
    userAddress: Hex;
    token: string;
}

export interface Product extends DatabaseDocument {
  name: string;
  collectionIndexInContract: string;
  contract: string;
  copies: number;
  soldCopies: number;
  sold: boolean;
  royalty: number;
  firstTokenIndex: string;
  cover: string;
  creationDate: string;
  transactionHash?: string;
  diamond: boolean;
  singleMetadata: boolean;
  metadataURI: string;
  bannerImage?: string;
}

export interface MetadataAttribute {
  display_type?: string;
  trait_type?: string;
  value?: string;
  percentage?: string;
}

export interface TokenMetadata {
  image: string;
  image_thumbnail?: string;
  image_data?: string;
  artist?: string;
  external_url?: string;
  description: string;
  name: string;
  attributes?: Array<MetadataAttribute>;
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
}

export interface MintedToken extends DatabaseDocument {
  token: string;
  uniqueIndexInContract: string;
  ownerAddress: string;
  offerPool?: string;
  offer: string;
  contract: string;
  metadata: TokenMetadata;
  metadataURI: string;
  authenticityLink: string;
  isMinted: boolean;
  isMetadataPinned: boolean;
  isURIStoredToBlockchain: boolean;
  creationDate: string;
  product: string;
}

export interface Offer extends DatabaseDocument {
  offerIndex?: string;
  contract: string;
  product: string;
  offerPool?: string;
  copies?: number;
  allowedCopies?: number;
  lockedCopies?: number;
  soldCopies?: number;
  sold?: boolean;
  price: string;
  range: Array<string>;
  offerName?: string;
  creationDate?: string;
  diamond: boolean;
  diamondRangeIndex?: string;
  transactionHash?: string;
  hidden?: boolean;
  sponsored?: boolean;
}

export interface CustomValue {
  name: string;
  value: string;
}
export interface FooterLink {
  label: string;
  url: string;
}
export interface ServerSettings extends DatabaseDocument {
  onlyMintedTokensResult: boolean;
  demoUploadsEnabled: boolean;
  featuredCollection?: { _id: string; contract: string };
  nodeAddress: string;
  superAdmins?: Array<Hex>;
  superAdminsOnVault?: boolean;
  databaseResales?: boolean;
  darkModePrimary?: string;
  darkModeSecondary?: string;
  darkModeText?: string;
  darkModeBannerLogo?: string;
  darkModeMobileLogo?: string;
  lightModeBannerLogo?: string;
  lightModeMobileLogo?: string;
  buttonPrimaryColor?: string;
  buttonFadeColor?: string;
  buttonSecondaryColor?: string;
  iconColor?: string;
  footerLinks?: Array<FooterLink>;
  legal?: string;
  favicon?: string;
  signupMessage?: string;
  customValues?: Array<CustomValue>;
}

export interface ResaleData extends DatabaseDocument {
  tokenContract: string;
  tokenIndex: string;
  price: string;
  buyer?: Hex;
  seller: Hex;
  blockchainOfferId?: string;
}

export interface Notification extends DatabaseDocument {
  user: Hex;
  type: string;
  message?: string;
  data?: Array<string>;
  read: boolean;
}
