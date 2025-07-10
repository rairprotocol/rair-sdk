import { RairSDK } from '..';
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

export class UsersAPI {

  commonRoute: string = 'users';
  sdkInstance: RairSDK;

  constructor(sdkInstance: RairSDK) {
    this.sdkInstance = sdkInstance;
  }

  async listUsers(params: ListUsersParams) : Promise<ListUsersResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'list', {}, params);
  }
  async exportUserData() : Promise<ExportUsersResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'export');
  }
  async verifyAge(params: VerifyAgeParams) : Promise<VerifyAgeResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, 'verify-age', params, {}, Methods.post);
  }
  async createUser(params: CreateUserParams) : Promise<SingleUserResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, '', params, {}, Methods.post);
  }
  async findUserByUserAddress({publicAddress}: FindUserParams) : Promise<SingleUserResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${publicAddress}`);
  }
  async updateUserByUserAddress(params: UpdateUserParams) : Promise<SingleUserResponse> {
    const { publicAddress, ...updateParams } = params;
    return this.sdkInstance.apiCall(this.commonRoute, `${publicAddress}`, updateParams, {}, Methods.patch);
  }

  async getReferencesForUser({userAddress}: UserAddress) : Promise<GetReferencesResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `reference/${userAddress}`);
  }
  async createReference(params: Omit<UserReferences, 'gitHandle'>) : Promise<CreateUserReferenceResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `reference`, params, {}, Methods.post);
  }
  async updateReference({id, ...bodyParams}: DatabaseId & Omit<UserReferences, 'gitHandle'>) : Promise<UpdateReferenceResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `reference/${id}`, bodyParams, {}, Methods.put);
  }
  async deleteReference({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `reference/${id}`, {}, {}, Methods.delete);
  }

  async getPastProjectForUser({userAddress}: UserAddress) : Promise<GetPastProjectsResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `experience/${userAddress}`);
  }
  async createPastProject(params: Omit<UserProjects, 'gitHandle'>) : Promise<CreatePastProjectResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `experience`, params, {}, Methods.post);
  }
  async updatePastProject({id, ...bodyParams}: DatabaseId & Omit<UserProjects, 'gitHandle'>) : Promise<UpdatePastProjectResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `experience/${id}`, bodyParams, {}, Methods.put);
  }
  async deletePastProject({id}: DatabaseId) : Promise<ApiResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `experience/${id}`, {}, {}, Methods.delete);
  }

  async getAchivementData({userAddress}: UserAddress) : Promise<GetAchievementDataResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `achievement/${userAddress}`);
  }
  async getUserValue({userAddress, namespace, label}: UserAddress & GetUserValueParams) : Promise<GetUserValueResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${userAddress}/${namespace}/${label}`);
  }
  async setUserValue({userAddress, namespace, label, value}: UserAddress & SetUserValueParams) : Promise<SetUserValueResponse> {
    return this.sdkInstance.apiCall(this.commonRoute, `${userAddress}/${namespace}/${label}`, {
      value
    }, {}, Methods.post);
  }
};
