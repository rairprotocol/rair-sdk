import { RairSDK } from '..';
import { DatabaseId } from '../types/common';
import {
  GetAllTokensParams,
  GetAllTokensResult,
  GetSingleTokenParams,
  GetSingleTokenResult,
  GetFullTokenResult
} from '../types/tokens';

export class TokensAPI {

  commonRoute: string = 'tokens';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async getAllTokens(params: GetAllTokensParams) : Promise<GetAllTokensResult> {
    return this.sdkInstance.apiCall(this.commonRoute, '', {}, params);
  }
  async getSingleToken({token, ...params}: GetSingleTokenParams) : Promise<GetSingleTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${token}`, {}, params);
  }
  async getFullTokenInfo({id}: DatabaseId) : Promise<GetFullTokenResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `id/${id}`);
  }
}
