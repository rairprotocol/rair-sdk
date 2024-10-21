import { ApiResponse, Hex, PaginationParams } from "./common";
import { MediaViewLog } from "./database";

export interface GetAnalyticsParams extends PaginationParams {
    mediaId: string;
    fromDate?: Date;
    toDate?: Date;
    userAddress?: Hex;
    onlyCount?: boolean;
}

export interface GetAnalyticsResult extends ApiResponse {
    results: Array<MediaViewLog>,
    totalCount: number,
    uniqueAddresses: Array<Hex>,
}