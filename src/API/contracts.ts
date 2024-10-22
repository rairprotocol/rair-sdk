import Api from '../common/Api';
import { ApiResponse, DatabaseId, Methods } from '../types/common';
import {
  FindContractAndOfferResult,
  FindContractAndProductResult,
  FindContractParams,
  FindContractResult,
  GetContractByIdResult,
  GetContractFactoryListResult,
  GetContractListParams,
  GetContractListResult,
  GetFullContractListParams,
  GetFullContractListResult,
  GetProductsByIdResult,
  GetUserContractsListParams,
  ImportContractParams,
  UpdateContractParams,
  UpdateContractResult
} from '../types/contracts';

export class ContractAPI extends Api {
  
  /**
   * List all contracts
   * @param {GetContractListParams} params
   */
  async getContractList(params: GetContractListParams) : Promise<GetContractListResult> {
    return this.apiCall('contracts/', {}, {...params});
  }
  async getFactoryList() : Promise<GetContractFactoryListResult> {
    return this.apiCall('contracts/factoryList');
  }
  async getMyContracts(params: GetUserContractsListParams) : Promise<GetContractListResult> {
    return this.apiCall('contracts/my', {}, {...params});
  }
  async getFullListOfContracts(params: GetFullContractListParams) : Promise<GetFullContractListResult> {
    const {blockchain, category, ...queryParams} = params;
    if (blockchain) {
      queryParams['blockchain'] = blockchain.toString();
    }
    if (category) {
      queryParams['category'] = category.toString();
    }
    return this.apiCall('contracts/full', {}, queryParams);
  }
  async findContract({networkId, contractAddress}: FindContractParams) : Promise<FindContractResult> {
    return this.apiCall(`contracts/network/${networkId}/${contractAddress}`);
  }
  async findContractAndProducts({networkId, contractAddress}: FindContractParams) : Promise<FindContractAndProductResult> {
    return this.apiCall(`contracts/network/${networkId}/${contractAddress}/products`);
  }
  async findContractAndOffers({networkId, contractAddress}: FindContractParams) : Promise<FindContractAndOfferResult> {
    return this.apiCall(`contracts/network/${networkId}/${contractAddress}/offers`);
  }
  async importContract(params: ImportContractParams) : Promise<ApiResponse> {
    return this.apiCall('contracts/import/', params, {}, Methods.post);
  }
  async getById(params: DatabaseId) : Promise<GetContractByIdResult> {
    return this.apiCall('contracts/:id', params, {}, Methods.post);
  }
  async getProductsById(params: DatabaseId) : Promise<GetProductsByIdResult> {
    return this.apiCall('contracts/:id/products', params, {}, Methods.post);
  }
  async updateContract(params: UpdateContractParams) : Promise<UpdateContractResult> {
    const {id, ...updateParams} = params;
    return this.apiCall(`contracts/${id}`, updateParams, {}, Methods.patch);
  }
}
