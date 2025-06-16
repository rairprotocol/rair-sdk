import Api from '../common/Api';
import { ApiResponse, DatabaseId, Methods, UserAddress } from '../types/common';
import { UserProjects, UserReferences } from '../types/database';
import {
  ListUsersResponse,
  ExportUsersResponse,
  VerifyAgeParams,
  VerifyAgeResponse,
  CreateUserParams,
  FindUserParams,
  UpdateUserParams,
  SingleUserResponse,
  ListUsersParams,
  GetReferencesResponse,
  CreateUserReferenceResponse,
  UpdateReferenceResponse,
  GetPastProjectsResponse,
  CreatePastProjectResponse,
  UpdatePastProjectResponse,
  GetAchievementDataResponse,
  GetUserValueResponse,
  SetUserValueResponse,
  GetUserValueParams,
  SetUserValueParams
} from '../types/users';

export class UsersAPI extends Api {
  async listUsers(params: ListUsersParams) : Promise<ListUsersResponse> {
    return this.apiCall('list', {}, params);
  }
  async exportUserData() : Promise<ExportUsersResponse> {
    return this.apiCall('export');
  }
  async verifyAge(params: VerifyAgeParams) : Promise<VerifyAgeResponse> {
    return this.apiCall('verify-age', params, {}, Methods.post);
  }
  async createUser(params: CreateUserParams) : Promise<SingleUserResponse> {
    return this.apiCall('', params, {}, Methods.post);
  }
  async findUserByUserAddress({publicAddress}: FindUserParams) : Promise<SingleUserResponse> {
    return this.apiCall(`${publicAddress}`);
  }
  async updateUserByUserAddress(params: UpdateUserParams) : Promise<SingleUserResponse> {
    const { publicAddress, ...updateParams } = params;
    return this.apiCall(`${publicAddress}`, updateParams, {}, Methods.patch);
  }

  async getReferencesForUser({userAddress}: UserAddress) : Promise<GetReferencesResponse> {
    return this.apiCall(`reference/${userAddress}`);
  }
  async createReference(params: Omit<UserReferences, 'gitHandle'>) : Promise<CreateUserReferenceResponse> {
    return this.apiCall(`reference`, params, {}, Methods.post);
  }
  async updateReference({id, ...bodyParams}: DatabaseId & Omit<UserReferences, 'gitHandle'>) : Promise<UpdateReferenceResponse> {
    return this.apiCall(`reference/${id}`, bodyParams, {}, Methods.put);
  }
  async deleteReference({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`reference/${id}`, {}, {}, Methods.delete);
  }

  async getPastProjectForUser({userAddress}: UserAddress) : Promise<GetPastProjectsResponse> {
    return this.apiCall(`experience/${userAddress}`);
  }
  async createPastProject(params: Omit<UserProjects, 'gitHandle'>) : Promise<CreatePastProjectResponse> {
    return this.apiCall(`experience`, params, {}, Methods.post);
  }
  async updatePastProject({id, ...bodyParams}: DatabaseId & Omit<UserProjects, 'gitHandle'>) : Promise<UpdatePastProjectResponse> {
    return this.apiCall(`experience/${id}`, bodyParams, {}, Methods.put);
  }
  async deletePastProject({id}: DatabaseId) : Promise<ApiResponse> {
    return this.apiCall(`experience/${id}`, {}, {}, Methods.delete);
  }

  async getAchivementData({userAddress}: UserAddress) : Promise<GetAchievementDataResponse> {
    return this.apiCall(`achievement/${userAddress}`);
  }
  async getUserValue({userAddress, namespace, label}: UserAddress & GetUserValueParams) : Promise<GetUserValueResponse> {
    return this.apiCall(`${userAddress}/${namespace}/${label}`);
  }
  async setUserValue({userAddress, namespace, label, value}: UserAddress & SetUserValueParams) : Promise<SetUserValueResponse> {
    return this.apiCall(`${userAddress}/${namespace}/${label}`, {
      value
    }, {}, Methods.post);
  }
};
