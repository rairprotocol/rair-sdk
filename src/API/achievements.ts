

import Api from '../common/Api';
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

export class AchievementsAPI extends Api {
  async getAchievements() : Promise<GetAchievementListResponse> {
    return this.apiCall('');
  }
  async createAchievement(params: CreateAchievementParams) : Promise<CreateAchievementResponse> {
    return this.apiCall('', params, {}, Methods.post);
  }
  async updateAchievementById({id, ...bodyParams}: UpdateAchievementByIdParams) : Promise<ApiResponse> {
    return this.apiCall(`${id}`, bodyParams, {}, Methods.put);
  }
  async deleteAchievementById({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`${id}`, {}, {}, Methods.put);
  }
  // Pools
  async getDistributionPools() : Promise<GetPoolsResponse> {
    return this.apiCall('pools');
  }
  async createDistributionPool(params: DistributionPool) : Promise<ApiResponse> {
    return this.apiCall('pools', params, {}, Methods.post);
  }
  async updateDistributionPoolById({id, ...bodyParams}: UpdateDistributionPoolByIdParams) : Promise<ApiResponse> {
    return this.apiCall(`pools/${id}`, bodyParams, {}, Methods.put);
  }
  async deleteDistributionPoolById({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`pools/${id}`, {}, {}, Methods.put);
  }
  // Teams
  async getTeams() : Promise<GetTeamListResponse> {
    return this.apiCall('teams');
  }
  async getTeamByReferralLink({referralLink}: ReferralLinkParams) : Promise<GetTeamByReferralResponse> {
    return this.apiCall(`teams/referral/${referralLink}`);
  }
  async connectUserToTeamByReferral({referralLink}: ReferralLinkParams) : Promise<ApiResponse> {
    return this.apiCall(`teams/referra/${referralLink}`, undefined, undefined, Methods.post);
  }
  async createTeam(params: PoolTeam) : Promise<CreateTeamResponse> {
    return this.apiCall('teams', params, {}, Methods.post);
  }
  async updateTeamById({id, ...bodyParams}: UpdatePoolTeamByIdParams) : Promise<ApiResponse> {
    return this.apiCall(`teams/${id}`, bodyParams, {}, Methods.put);
  }
  async deleteTeamById({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`teams/${id}`, {}, {}, Methods.put);
  }

  async getRanking(params: PaginationParams) : Promise<GetRankingResponse> {
    return this.apiCall(`ranking`, undefined, params);
  }
  async getRankingOf({id, ...paginationParams}: PaginationParams & DatabaseId) : Promise<GetRankingResponse> {
    return this.apiCall(`ranking/${id}`, undefined, paginationParams);
  }

  async getLevels() : Promise<GetLevelsResponse> {
    return this.apiCall(`levels`);
  }
  async setLevels(bodyParams: SetLevelsParams) : Promise<GetLevelsResponse> {
    return this.apiCall(`levels`, bodyParams, {}, Methods.post);
  }

  async getAdminData() : Promise<GetAdminDataResponse> {
    return this.apiCall(`admin`);
  }
  async resetRepoSync({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`admin/${id}`, {}, {}, Methods.put);
  }

  async getAchievementVideos() : Promise<GetAchievementVideosResponse> {
    return this.apiCall(`videos`);
  }
  async getUserAchievements({userAddress}: UserAddress) : Promise<GetUserAchievementsResponse> {
    return this.apiCall(`user/${userAddress}`);
  }
  async getAwardHistory(params: PaginationParams) : Promise<GetAwardHistoryResponse> {
    return this.apiCall(`history`, {}, params);
  }
  async getRewardsSummary() : Promise<GetRewardsSummaryResponse> {
    return this.apiCall('rewards');
  }

  async subscribeToDistribution(params: DistributionSubscriptionParams) : Promise<ApiResponse> {
    return this.apiCall('rewards/date', params, {}, Methods.post);
  }
  async sentTokensAsBatch(params: SentDistributionBatchParams) : Promise<ApiResponse> {
    return this.apiCall('rewards/sent/batch', params, {}, Methods.put);
  }
  async sentTokens({id, ...bodyParams}: SentDistributionParams & DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`rewards/sent/${id}`, bodyParams, {}, Methods.put);
  }

  async sentTeamTokens(params: SentTokensTeamParams) : Promise<ApiResponse> {
    return this.apiCall('rewards/sent/team', params, {}, Methods.post);
  }
  async sentSpecialTokens(params: SentTokensSpecialParams) : Promise<ApiResponse> {
    return this.apiCall('rewards/sent/special', params, {}, Methods.post);
  }

  async getDistributionData({id, ...paginationParams}: DatabaseId & PaginationParams) : Promise<GetDistributionDataResponse> {
    return this.apiCall(`rewards/distribute/${id}`, {}, paginationParams);
  }
  // async getSpecialRewards() : Promise<ApiResponse> {
  //   return this.apiCall(`rewards/distribute/special`);
  // }
  async getRankingStats({id}: DatabaseId) : Promise<GetRankingResponse> {
    return this.apiCall(`admin/ranking/${id}`);
  }
  async setDefaultPool(params: DefaultDistributionPoolParams) : Promise<ApiResponse> {
    return this.apiCall('pools/date', params, {}, Methods.post);
  }
}

