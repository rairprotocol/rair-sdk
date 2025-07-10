import { RairSDK } from '..';
import { Methods } from '../types/common';
import {
  QueryCreditsParams,
  QueryCreditsResult,
  WithdrawCreditsParams,
  WithdrawCreditsResult
} from '../types/credits';

export class CreditsAPI {

  commonRoute: string = 'credits';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  /**
   * @param {Hex} params.blockchain Blockchain where the credits contract is located
   * @param {Hex} params.tokenAddress Public address of the contract
   */
  async getUserCredits({blockchain, tokenAddress}: QueryCreditsParams): Promise<QueryCreditsResult> {
    return this.sdkInstance.apiCall(this.commonRoute, `${blockchain}/${tokenAddress}`);
  }
  /**
   * @param {Hex} params.blockchain Blockchain where the credits contract is located
   * @param {Hex} params.tokenAddress Public address of the contract
   * @param {number} params.amount Amount to withdraw
   */
  async generateWithdrawHash(params: WithdrawCreditsParams): Promise<WithdrawCreditsResult> {
    return this.sdkInstance.apiCall(this.commonRoute, 'withdraw', params, {}, Methods.post);
  }
}