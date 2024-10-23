import Api from '../common/Api';
import { Methods } from '../types/common';
import {
  QueryCreditsParams,
  QueryCreditsResult,
  WithdrawCreditsParams,
  WithdrawCreditsResult
} from '../types/credits';

export class CreditsAPI extends Api {
  /**
   * @param {Hex} params.blockchain Blockchain where the credits contract is located
   * @param {Hex} params.tokenAddress Public address of the contract
   */
  async getUserCredits({blockchain, tokenAddress}: QueryCreditsParams): Promise<QueryCreditsResult> {
    return this.apiCall(`credits/${blockchain}/${tokenAddress}`);
  }
  /**
   * @param {Hex} params.blockchain Blockchain where the credits contract is located
   * @param {Hex} params.tokenAddress Public address of the contract
   * @param {number} params.amount Amount to withdraw
   */
  async generateWithdrawHash(params: WithdrawCreditsParams): Promise<WithdrawCreditsResult> {
    return this.apiCall('credits/withdraw', params, {}, Methods.post);
  }
}