import Api from '../common/Api';
import { ApiResponse, Methods } from '../types/common';
import { ProcessTransactionParams } from '../types/transaction';

export class TransactionAPI extends Api {
  async processTransaction({network, hash}: ProcessTransactionParams) : Promise<ApiResponse> {
    return this.apiCall(`${network}/${hash}`, {}, {}, Methods.post)
  }
}
