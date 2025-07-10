import { RairSDK } from '..';
import {
  UpdateAchievementByIdParams,
  CreateAchievementParams,
  UpdateDistributionPoolByIdParams,
  ReferralLinkParams,
  UpdatePoolTeamByIdParams,
  DistributionSubscriptionParams,
  SentDistributionBatchParams,
  SentDistributionParams,
  SentTokensTeamParams,
  SentTokensSpecialParams,
  DefaultDistributionPoolParams,
  GetAchievementListResponse,
  CreateAchievementResponse,
  GetPoolsResponse,
  GetLevelsResponse,
  GetTeamListResponse,
  CreateTeamResponse,
  GetAdminDataResponse,
  GetAchievementVideosResponse,
  GetTeamByReferralResponse,
  GetRankingResponse,
  GetUserAchievementsResponse,
  GetAwardHistoryResponse,
  GetRewardsSummaryResponse,
  GetDistributionDataResponse,
  SetLevelsParams
} from '../types/achievements';
import { ApiResponse, DatabaseId, Methods, PaginationParams, UserAddress } from "../types/common";
import { DistributionPool, PoolTeam } from '../types/database';

export class AchievementsAPI {

  commonRoute: string = 'achievements';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async getAchievements() : Promise<GetAchievementListResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, '');
  }
  async createAchievement(params: CreateAchievementParams) : Promise<CreateAchievementResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.post);
  }
  async updateAchievementById({id, ...bodyParams}: UpdateAchievementByIdParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}`, bodyParams, {}, Methods.put);
  }
  async deleteAchievementById({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${id}`, {}, {}, Methods.put);
  }
  // Pools
  async getDistributionPools() : Promise<GetPoolsResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'pools');
  }
  async createDistributionPool(params: DistributionPool) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'pools', params, {}, Methods.post);
  }
  async updateDistributionPoolById({id, ...bodyParams}: UpdateDistributionPoolByIdParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `pools/${id}`, bodyParams, {}, Methods.put);
  }
  async deleteDistributionPoolById({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `pools/${id}`, {}, {}, Methods.put);
  }
  // Teams
  async getTeams() : Promise<GetTeamListResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'teams');
  }
  async getTeamByReferralLink({referralLink}: ReferralLinkParams) : Promise<GetTeamByReferralResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `teams/referral/${referralLink}`);
  }
  async connectUserToTeamByReferral({referralLink}: ReferralLinkParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `teams/referra/${referralLink}`, undefined, undefined, Methods.post);
  }
  async createTeam(params: PoolTeam) : Promise<CreateTeamResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'teams', params, {}, Methods.post);
  }
  async updateTeamById({id, ...bodyParams}: UpdatePoolTeamByIdParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `teams/${id}`, bodyParams, {}, Methods.put);
  }
  async deleteTeamById({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `teams/${id}`, {}, {}, Methods.put);
  }

  async getRanking(params: PaginationParams) : Promise<GetRankingResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `ranking`, undefined, params);
  }
  async getRankingOf({id, ...paginationParams}: PaginationParams & DatabaseId) : Promise<GetRankingResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `ranking/${id}`, undefined, paginationParams);
  }

  async getLevels() : Promise<GetLevelsResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `levels`);
  }
  async setLevels(bodyParams: SetLevelsParams) : Promise<GetLevelsResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `levels`, bodyParams, {}, Methods.post);
  }

  async getAdminData() : Promise<GetAdminDataResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `admin`);
  }
  async resetRepoSync({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `admin/${id}`, {}, {}, Methods.put);
  }

  async getAchievementVideos() : Promise<GetAchievementVideosResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `videos`);
  }
  async getUserAchievements({userAddress}: UserAddress) : Promise<GetUserAchievementsResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `user/${userAddress}`);
  }
  async getAwardHistory(params: PaginationParams) : Promise<GetAwardHistoryResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `history`, {}, params);
  }
  async getRewardsSummary() : Promise<GetRewardsSummaryResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'rewards');
  }

  async subscribeToDistribution(params: DistributionSubscriptionParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'rewards/date', params, {}, Methods.post);
  }
  async sentTokensAsBatch(params: SentDistributionBatchParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'rewards/sent/batch', params, {}, Methods.put);
  }
  async sentTokens({id, ...bodyParams}: SentDistributionParams & DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `rewards/sent/${id}`, bodyParams, {}, Methods.put);
  }

  async sentTeamTokens(params: SentTokensTeamParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'rewards/sent/team', params, {}, Methods.post);
  }
  async sentSpecialTokens(params: SentTokensSpecialParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'rewards/sent/special', params, {}, Methods.post);
  }

  async getDistributionData({id, ...paginationParams}: DatabaseId & PaginationParams) : Promise<GetDistributionDataResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `rewards/distribute/${id}`, {}, paginationParams);
  }
  // async getSpecialRewards() : Promise<ApiResponse> {
  //   return this.sdkInstance.apiCall(this.commonRoute, `rewards/distribute/special`);
  // }
  async getRankingStats({id}: DatabaseId) : Promise<GetRankingResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `admin/ranking/${id}`);
  }
  async setDefaultPool(params: DefaultDistributionPoolParams) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'pools/date', params, {}, Methods.post);
  }
}

