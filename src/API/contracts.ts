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
   */
  async getContractList(params: GetContractListParams) : Promise<GetContractListResult> {
    return this.apiCall('contracts/', {}, {...params});
  }

  /**
   * Fetch an extended list of contracts
   */
  async getFactoryList() : Promise<GetContractFactoryListResult> {
    return this.apiCall('contracts/factoryList');
  }

  /**
   * List all contracts made by the current user
   */
  async getMyContracts(params: GetUserContractsListParams) : Promise<GetContractListResult> {
    return this.apiCall('contracts/my', {}, {...params});
  }

  /**
   * List contract data for the frontend catalog
   */
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

  /**
   * Search for a contract using network and address
   */
  async findContract({networkId, contractAddress}: FindContractParams) : Promise<FindContractResult> {
    return this.apiCall(`contracts/network/${networkId}/${contractAddress}`);
  }

  /**
   * Search for a contract using network and address, include products
   */
  async findContractAndProducts({networkId, contractAddress}: FindContractParams) : Promise<FindContractAndProductResult> {
    return this.apiCall(`contracts/network/${networkId}/${contractAddress}/products`);
  }

  /**
   * Search for a contract using network and address, include offers
   */
  async findContractAndOffers({networkId, contractAddress}: FindContractParams) : Promise<FindContractAndOfferResult> {
    return this.apiCall(`contracts/network/${networkId}/${contractAddress}/offers`);
  }

  /**
   * Import a non-rair contract
   */
  async importContract(params: ImportContractParams) : Promise<ApiResponse> {
    return this.apiCall('contracts/import/', params, {}, Methods.post);
  }

  /**
   * Get a single contract by id
   */
  async getById(params: DatabaseId) : Promise<GetContractByIdResult> {
    return this.apiCall('contracts/:id', params, {});
  }

  /**
   * Get a single contract by id, include product data
   */
  async getProductsById(params: DatabaseId) : Promise<GetProductsByIdResult> {
    return this.apiCall('contracts/:id/products', params, {});
  }

  /**
   * Update information about a contract
   */
  async updateContract(params: UpdateContractParams) : Promise<UpdateContractResult> {
    const {id, ...updateParams} = params;
    return this.apiCall(`contracts/${id}`, updateParams, {}, Methods.patch);
  }
}
