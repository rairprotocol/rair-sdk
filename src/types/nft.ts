import {
    ApiResponse,
    Hex,
    MetadataSearch,
    PaginationParams,
    ResaleFlag,
    TokenLimits,
    UserAddress
} from "./common";
import {
    Contract,
    MediaFile,
    MetadataAttribute,
    MintedToken,
    Offer,
    Product,
    ResaleData,
    Unlock,
    User
} from "./database";

interface PopulatedMintedToken extends Omit<MintedToken, 'contract' | 'offer'> {
    contract: Contract;
    resaleData: ResaleData;
    offer: Offer;
    ownerData: User;
}
interface GetTokensByContractProduct {
    limit?: number;
    forSale?: boolean;
    priceFrom?: number;
    priceTo?: number;
    filterConditions?: string;
    sortByPrice?: 1 | -1;
    sortByToken?: 1 | -1;
}
interface NftContract {
    networkId: Hex;
    contract: Hex;
}
interface NftProduct {
    product: number;
}
interface NftToken {
    token: number;
}
interface PopulatedUnlock extends Omit<Unlock, 'offers'> {
    offers: Offer;
}
interface UnlockMediaFile extends Omit<
    MediaFile,
        'key' |
        "encryptionType" |
        'totalEncryptedFiles' |
        'extension' |
        'unlockData'
    > {
    unlockData: PopulatedUnlock;
}
interface PopulatedProduct extends Product {
    offers: Array<Offer>;
    owner: Hex;
}
export interface CSVFileUploadParams {
    contract: string;
    product: string;
    forceOverwrite: boolean;
}
export interface CSVFileUploadResult extends ApiResponse {
    updatedDocuments: Array<MintedToken>;
}
export interface GetTokensForUserParams extends UserAddress, ResaleFlag, PaginationParams {};
export interface GetTokensForUserResult extends ApiResponse {
  result: Array<Omit<PopulatedMintedToken, 'offer' | 'ownerData'>>
  totalCount: number;
}
export interface GetCSVSampleResult extends ApiResponse {}
export interface PinMetadataParams {
    contractId: string;
    product: number;
    overwritePin: string;
}
export interface PinMetadataResult extends ApiResponse {
    success: boolean;
    CID: string;
    totalCount: number;
    metadataURI: string;
}
export interface FindTokensForProductParams extends
    NftContract,
    NftProduct,
    ResaleFlag,
    MetadataSearch,
    TokenLimits,
    GetTokensByContractProduct {}
export interface FindTokensForProductResult extends ApiResponse {
    totalCount: number
    tokens: Array<Omit<PopulatedMintedToken, 'contract'>>
}
export interface FindTokenNumbersParams extends NftContract, NftProduct, TokenLimits {}
export interface FindTokenNumbersResult extends ApiResponse {
    tokens: Array<number>;
}
export interface FindProductParams extends NftContract, NftProduct {}
export interface FindProductAttributesResult extends ApiResponse {
    attributes: Array<MetadataAttribute>
}
export interface FindFilesForProductResult extends ApiResponse {
    filteredFiles: Array<UnlockMediaFile>;
}
export interface FindSingleTokenParams extends NftContract, NftProduct, NftToken {}
export interface FindFilesForTokenResult extends ApiResponse {
    files: Array<MediaFile>;
}
export interface FindOffersForProductResult extends ApiResponse {
    product: PopulatedProduct;
}
export interface FindLockedOffersResult extends ApiResponse {
    locks: Array<Offer>;
}
export interface FindSingleTokenResult extends ApiResponse {
    result: MintedToken;
}
export interface UpdateTokenMetadataParams extends FindSingleTokenParams {
    name: string;
    description: string;
    artist: string;
    external_url: string;
    image: string;
    animation_url: string;
    attributes: Array<{
        trait_type: string;
        value: string;
    }>
}
export interface UpdateTokenMetadataResult extends ApiResponse {
    token: MintedToken;
}
export interface PinMetadataForTokenResult extends ApiResponse {
    metadataURI: string;
}