import { Hex, DatabaseDocument, DatabaseTimestamps } from "./common";

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

export interface MetadataAttribute {
  name: string;
  values: Array<string>;
  quantity: Array<number>;
}

export interface NftMetadata extends DatabaseDocument {
  contract: string;
  product: number;
  attributes: Array<MetadataAttribute>;
}

export interface Unlock extends DatabaseDocument {
  file: string;
  offers: Array<string>;
}

export interface UserReferences extends DatabaseDocument {
  gitHandle: string;
  reference: string;
  organization: string;
  relationship: string;
  url: string;
  award: string;
}

export interface UserProjects extends DatabaseDocument {
  gitHandle: string;
  name: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  url: string;
  award: string;
}

export interface UserReferral extends DatabaseDocument, DatabaseTimestamps {
  user: string;
  referred: string;
}

export interface DistributionPool extends DatabaseDocument {
  name: string;
  startTime: string;
  endTimes: Array<string>;
  multipliers: Array<number>;
  tokenPool: number;
  tokenAddress: string;
  ranks: Array<number>;
  percentagePerRank: Array<number>;
}

export interface UserLevel extends DatabaseDocument {
  thresholds: Array<number>;
}

export interface Achievement extends DatabaseDocument {
    displayName: string;
    internalName: string;
    githubLabel?: string;
    gitHubRepo?: string;
    awardLimit: number;
    pointsValue: number;
    githubActionType?: string;
    timeEstimate: string;
    connectedFile?: string;
    connectedURL?: string;
    standalonePublicAddress?: string;
    standaloneTokens?: string;
    sortingRelevance?: number;
}

export interface AchievementAward extends DatabaseDocument, DatabaseTimestamps {
    task: string;
    gitHandle: string;
    githubEventId?: number;
    multiplier: number;
};

export interface PoolTeam extends DatabaseDocument {
    name: string;
    address: string;
    percentage: number;
    referralLink?: string;
}

export interface UserTeam extends DatabaseDocument {
    gitHandle: string;
    poolTeam: string;
};

export interface DistributionSubscription extends DatabaseDocument {
    user: string;
    distributionPool: string;
    date: string;
    txHash?: string;
};

export interface TeamDistribution extends DatabaseDocument {
    team: string;
    pool: string;
    date: string;
    value: string;
    txHash: string;
}

export interface SpecialDistribution extends DatabaseDocument {
    user: string;
    date: string;
    achievements: Array<string>;
    txHash: string;
    value: string;
    tokenAddress: string;
}


export interface Versioning extends DatabaseDocument {
  name: string;
  network: string;
  number: number;
  running: boolean;
}

export interface UserValue extends DatabaseDocument {
  user: string;
  namespace: string;
  label: string;
  value: string;
}
