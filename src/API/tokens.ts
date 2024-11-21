import Api from '../common/Api';
import { DatabaseId } from '../types/common';
import {
  GetAllTokensParams,
  GetAllTokensResult,
  GetSingleTokenParams,
  GetSingleTokenResult,
  GetFullTokenResult
} from '../types/tokens';

export class TokensAPI extends Api {
  async getAllTokens(params: GetAllTokensParams) : Promise<GetAllTokensResult> {
    return this.apiCall('', {}, params);
  }
  async getSingleToken({token, ...params}: GetSingleTokenParams) : Promise<GetSingleTokenResult> {
    return this.apiCall(`${token}`, {}, params);
  }
  async getFullTokenInfo({id}: DatabaseId) : Promise<GetFullTokenResult> {
    return this.apiCall(`id/${id}`);
  }
}
