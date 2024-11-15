import Api from '../common/Api';
import { Methods } from '../types/common';
import {
  ListUsersResponse,
  ExportUsersResponse,
  VerifyAgeParams,
  VerifyAgeResponse,
  CreateUserParams,
  FindUserParams,
  UpdateUserParams,
  SingleUserResponse,
  ListUsersParams
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
};
