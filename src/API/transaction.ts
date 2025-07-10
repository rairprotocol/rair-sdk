import { RairSDK } from '..';
import { ApiResponse, Methods } from '../types/common';
import { ProcessTransactionParams } from '../types/transaction';

export class TransactionAPI {

  commonRoute: string = 'transaction';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async processTransaction({network, hash}: ProcessTransactionParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${network}/${hash}`, {}, {}, Methods.post)
  }
}
