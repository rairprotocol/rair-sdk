import { ApiResponse, DatabaseId, FilterAndSortParams, Hex, PaginationParams, UserAddress } from "./common";
import { Contract, Offer, Product, TokenMetadata, User } from "./database";


/**
 * @extends PaginationParams
 * @extends Contract
 */
export interface GetContractListParams extends Partial<PaginationParams>, Partial<Contract> {}

export interface GetContractListResult extends ApiResponse {
    result: Array<Contract>;
    totalCount: number;
}

export interface GetContractFactoryListResult extends ApiResponse {
    contracts: Array<
        Pick<
            Contract,
            '_id' |
            'contractAddress' |
            'title' |
            'blockchain' |
            'diamond' |
            'blockView' |
            'blockSync'
        >
    >
}

export interface GetUserContractsListParams extends GetContractListParams, UserAddress {}

export interface GetFullContractListParams extends PaginationParams, FilterAndSortParams {}

export interface GetFullContractListResult extends ApiResponse {
    contracts: Array<FullContractData>,
    totalNumber: number;
    pageNumber: number;
    itemsPerPage: number;
}

export interface ProductAndOffers extends Product {
    offers: Array<Offer>;
}

export interface FullContractData extends Contract {
    product: ProductAndOffers;
    frontToken: {
        metadata: Pick<TokenMetadata, 'image' | 'image_thumbnail' | 'animation_url'>;
    }
    userData?: User;
}

export interface FindContractParams {
    networkId: Hex;
    contractAddress: Hex;
}

export interface FindContractResult extends ApiResponse {
    contract: Contract;
}
export interface FindContractAndProductResult extends ApiResponse {
    products: Array<Product>;
}
export interface FindContractAndOfferResult extends ApiResponse {
    products: Array<ProductAndOffers>;
}

export interface ImportContractParams {
    networkId: Hex;
    contractAddress: Hex;
    limit: number;
    contractCreator: Hex;
}

export interface UpdateContractParams extends DatabaseId, Pick<Contract, 'blockSync' | 'blockView'> {}

export interface UpdateContractResult extends ApiResponse {
    data: {
        doc: Contract,
    },
}

export interface GetProductsByIdResult extends ApiResponse {
    products: Array<Pick<Product, 'name' | '_id'>>
}

export interface GetContractByIdResult extends ApiResponse {
    contract: Pick<
        Contract,
            '_id' |
            'contractAddress' |
            'title' |
            'blockchain' |
            'diamond' |
            'external'
        >
}
