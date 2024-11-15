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
   * @param {number} params.pageNum           Pagination: Page number
   * @param {number} params.itemsPerPage      Pagination: Items per page
   * @param {string} params.title             Title of the contract
   * @param {Hex} params.user                 Public address of the owner of the contract
   * @param {Hex} params.blockchain           Network where the contract is deployed
   * @param {Hex} params.contractAddress      Public address of the contract
   * @param {boolean} params.diamond          Diamond contract flag
   * @param {Date} params.creationDate        Date stored in database
   * @param {Hex} params.transactionHash      Hash for deployment transaction
   * @param {string} params.lastSyncedBlock   Last block synced in database
   * @param {boolean} params.external         External flag
   * @param {boolean} params.singleMetadata   Single metadata URI flag
   * @param {string} params.metadataURI       URI for all tokens in contract
   * @param {Hex} params.importedBy           Public address of the user importing the contract
   * @param {boolean} params.blockSync        Flag for blocking syncing
   * @param {boolean} params.blockView        Flag for blocking view
   */
  async getContractList(params: GetContractListParams) : Promise<GetContractListResult> {
    return this.apiCall('', {}, {...params});
  }

  /**
   * Fetch an extended list of contracts
   */
  async getFactoryList() : Promise<GetContractFactoryListResult> {
    return this.apiCall('factoryList');
  }

  /**
   * List all contracts made by the current user
   */
  async getMyContracts(params: GetUserContractsListParams) : Promise<GetContractListResult> {
    return this.apiCall('my', {}, {...params});
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
    return this.apiCall('full', {}, queryParams);
  }

  /**
   * Search for a contract using network and address
   */
  async findContract({networkId, contractAddress}: FindContractParams) : Promise<FindContractResult> {
    return this.apiCall(`network/${networkId}/${contractAddress}`);
  }

  /**
   * Search for a contract using network and address, include products
   */
  async findContractAndProducts({networkId, contractAddress}: FindContractParams) : Promise<FindContractAndProductResult> {
    return this.apiCall(`network/${networkId}/${contractAddress}/products`);
  }

  /**
   * Search for a contract using network and address, include offers
   */
  async findContractAndOffers({networkId, contractAddress}: FindContractParams) : Promise<FindContractAndOfferResult> {
    return this.apiCall(`network/${networkId}/${contractAddress}/offers`);
  }

  /**
   * Import a non-rair contract
   */
  async importContract(params: ImportContractParams) : Promise<ApiResponse> {
    return this.apiCall('import/', params, {}, Methods.post);
  }

  /**
   * Get a single contract by id
   */
  async getById({id}: DatabaseId) : Promise<GetContractByIdResult> {
    return this.apiCall(`${id}`);
  }

  /**
   * Get a single contract by id, include product data
   */
  async getProductsById({id}: DatabaseId) : Promise<GetProductsByIdResult> {
    return this.apiCall(`${id}/products`);
  }

  /**
   * Update information about a contract
   */
  async updateContract(params: UpdateContractParams) : Promise<UpdateContractResult> {
    const {id, ...updateParams} = params;
    return this.apiCall(`${id}`, updateParams, {}, Methods.patch);
  }
}
