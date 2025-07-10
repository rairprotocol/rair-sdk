import { RairSDK } from '..';
import { Methods } from '../types/common';
import {
  CSVFileUploadParams,
  CSVFileUploadResult,
  GetTokensForUserParams,
  GetTokensForUserResult,
  GetCSVSampleResult,
  PinMetadataParams,
  PinMetadataResult,
  FindTokensForProductParams,
  FindTokensForProductResult,
  FindTokenNumbersParams,
  FindTokenNumbersResult,
  FindProductAttributesResult,
  FindFilesForProductResult,
  FindFilesForTokenResult,
  FindOffersForProductResult,
  FindLockedOffersResult,
  FindSingleTokenParams,
  FindSingleTokenResult,
  UpdateTokenMetadataParams,
  UpdateTokenMetadataResult,
  PinMetadataForTokenResult,
  FindProductParams
} from '../types/nft';

export class NftAPI {

  commonRoute: string = 'nft';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async uploadTokenMetadataByCSV(params: CSVFileUploadParams): Promise<CSVFileUploadResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.post);
  }
  async getTokensForUser(params: GetTokensForUserParams): Promise<GetTokensForUserResult> {
    const { userAddress, ...queryParams } = params;
    return this.sdkInstance.apiCall(this.commonRoute, `${userAddress}`, {}, queryParams);
  }
  async getCSVSample(): Promise<GetCSVSampleResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'csv/sample');
  }
  async pinMetadata(params: PinMetadataParams): Promise<PinMetadataResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'pinningMultiple', params, {}, Methods.post);
  }
  async findTokensForProduct(params: FindTokensForProductParams): Promise<FindTokensForProductResult> {
    const { networkId, contract, product, ...queryParams } = params;
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}`, {}, queryParams);
  }
  async findTokenNumbersForProduct(params: FindTokenNumbersParams): Promise<FindTokenNumbersResult> {
    const { networkId, contract, product, ...queryParams } = params;
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/numbers`, {}, queryParams);
  }
  async findProductAttributes({ networkId, contract, product }: FindProductParams): Promise<FindProductAttributesResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/attributes`);
  }
  async findFilesForProduct({ networkId, contract, product }: FindProductParams): Promise<FindFilesForProductResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/files`);
  }
  async findFilesForTokenInProduct({ networkId, contract, product, token }: FindSingleTokenParams): Promise<FindFilesForTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/files/${token}`);
  }
  async findOffersForProduct({ networkId, contract, product }: FindProductParams): Promise<FindOffersForProductResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/offers`);
  }
  async findLockedOffersForProduct({ networkId, contract, product }: FindProductParams): Promise<FindLockedOffersResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/locks`);
  }
  async findSingleToken({ networkId, contract, product, token }: FindSingleTokenParams): Promise<FindSingleTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/token/${token}`);
  }
  async updateTokenMetadata(params: UpdateTokenMetadataParams): Promise<UpdateTokenMetadataResult> {
    const { networkId, contract, product, token, ...bodyParams } = params;
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/token/${token}`, bodyParams, {}, Methods.post);
  }
  async pinMetadataForSingleToken({ networkId, contract, product, token }: FindSingleTokenParams): Promise<PinMetadataForTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `network/${networkId}/${contract}/${product}/token/${token}/pinning`, {}, {}, Methods.post);
  }
}
