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
  SingleUserResponse
} from '../types/users';

export class UsersAPI extends Api {
  async listUsers() : Promise<ListUsersResponse> {
    return this.apiCall('/users/list');
  }
  async exportUserData() : Promise<ExportUsersResponse> {
    return this.apiCall('/users/export');
  }
  async verifyAge(params: VerifyAgeParams) : Promise<VerifyAgeResponse> {
    return this.apiCall('/users/verify-age', params, {}, Methods.post);
  }
  async createUser(params: CreateUserParams) : Promise<SingleUserResponse> {
    return this.apiCall('/users/', params, {}, Methods.post);
  }
  async findUserByUserAddress({publicAddress}: FindUserParams) : Promise<SingleUserResponse> {
    return this.apiCall(`/users/${publicAddress}`);
  }
  async updateUserByUserAddress(params: UpdateUserParams) : Promise<SingleUserResponse> {
    const { publicAddress, ...updateParams } = params;
    return this.apiCall(`/users/${publicAddress}`, updateParams, {}, Methods.patch);
  }
};
