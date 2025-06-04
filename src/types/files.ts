import { ApiResponse, DatabaseId, FileId, FilterAndSortParams, PaginationParams } from "./common";
import { Contract, MediaFile, Offer, Unlock } from "./database";

export interface UpdateMediaParams extends FileId {
  title?: string;
  description?: string;
  contract?: string;
  product?: string;
  offer?: Array<string>;
  category?: string;
  demo?: boolean;
}
export interface DeleteMediaResult extends ApiResponse {
  message: string;
}
export interface ListMediaParams extends
    Partial<FilterAndSortParams>,
    Partial<PaginationParams>,
    Partial<Pick<
      MediaFile,
        'title' |
        'description' |
        'uploader' |
        'ageRestricted' |
        'demo'
      >
    > {
  _id?: string;
  author?: string;
  contract?: string;
  product?: string;
  offer?: Array<string>
}

export interface ListMediaResult extends ApiResponse {
  list: Array<MediaFile & {unlockData: Unlock}>;
  totalNumber: number;
}

export interface GetFileByIdResult extends ApiResponse {
  file: Omit<MediaFile, 'key'>;
}

export interface UpdateFileByIdParams extends FileId, Pick<
  MediaFile,
    'title' |
    'description' |
    'uploader' |
    'ageRestricted' |
    'demo'
  >
{}

export interface GetFilesByCategoryParams extends DatabaseId, PaginationParams {}

export interface GetFilesByCategoryResult extends ApiResponse {
  results: number;
  data: Array<MediaFile>;
}

export interface GetFilesByTokenResult extends ApiResponse {
  results: number;
  data: Array<MediaFile>;
}

export interface GetOffersByFileResult extends ApiResponse {
  data: Array<
          Omit<Unlock, 'offers'> & {
            offers: Omit<Offer, 'contract'> & {
              contract: Contract
            };
        }>;
}
export interface ConnectOfferAndFileParams extends FileId {
  offers: Array<string>;
}
export interface ConnectOfferAndFileResult extends ApiResponse {
  offer: Unlock
}
export interface RemoveOfferFromFileParams extends FileId {
  offer: string;
}
export interface RemoveOfferFromFileResult extends ApiResponse {
  offer: Unlock
}
