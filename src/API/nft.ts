import Api from '../common/Api';
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

export class NftAPI extends Api {
  async uploadTokenMetadataByCSV(params: CSVFileUploadParams): Promise<CSVFileUploadResult> {
    return this.apiCall('', params, {}, Methods.post);
  }
  async getTokensForUser(params: GetTokensForUserParams): Promise<GetTokensForUserResult> {
    const { userAddress, ...queryParams } = params;
    return this.apiCall(`${userAddress}`, {}, queryParams);
  }
  async getCSVSample(): Promise<GetCSVSampleResult> {
    return this.apiCall('csv/sample');
  }
  async pinMetadata(params: PinMetadataParams): Promise<PinMetadataResult> {
    return this.apiCall('pinningMultiple', params, {}, Methods.post);
  }
  async findTokensForProduct(params: FindTokensForProductParams): Promise<FindTokensForProductResult> {
    const { networkId, contract, product, ...queryParams } = params;
    return this.apiCall(`network/${networkId}/${contract}/${product}`, {}, queryParams);
  }
  async findTokenNumbersForProduct(params: FindTokenNumbersParams): Promise<FindTokenNumbersResult> {
    const { networkId, contract, product, ...queryParams } = params;
    return this.apiCall(`network/${networkId}/${contract}/${product}/numbers`, {}, queryParams);
  }
  async findProductAttributes({ networkId, contract, product }: FindProductParams): Promise<FindProductAttributesResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/attributes`);
  }
  async findFilesForProduct({ networkId, contract, product }: FindProductParams): Promise<FindFilesForProductResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/attributes`);
  }
  async findFilesForTokenInProduct({ networkId, contract, product, token }: FindSingleTokenParams): Promise<FindFilesForTokenResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/files/${token}`);
  }
  async findOffersForProduct({ networkId, contract, product }: FindProductParams): Promise<FindOffersForProductResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/offers`);
  }
  async findLockedOffersForProduct({ networkId, contract, product }: FindProductParams): Promise<FindLockedOffersResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/locks`);
  }
  async findSingleToken({ networkId, contract, product, token }: FindSingleTokenParams): Promise<FindSingleTokenResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/token/${token}`);
  }
  async updateTokenMetadata(params: UpdateTokenMetadataParams): Promise<UpdateTokenMetadataResult> {
    const { networkId, contract, product, token, ...bodyParams } = params;
    return this.apiCall(`network/${networkId}/${contract}/${product}/token/${token}`, bodyParams, {}, Methods.post);
  }
  async pinMetadataForSingleToken({ networkId, contract, product, token }: FindSingleTokenParams): Promise<PinMetadataForTokenResult> {
    return this.apiCall(`network/${networkId}/${contract}/${product}/token/${token}/pinning`, {}, {}, Methods.post);
  }
}
