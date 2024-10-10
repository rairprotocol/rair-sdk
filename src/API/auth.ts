import Api from '../common/Api';
import {
  GetChallengeParams,
  UnlockParams,
  LoginParams,
  GetChallengeResponse,
  LoginResponse
} from '../types/auth';
import { ApiResponse, Methods } from "../types/common";

export class AuthAPI extends Api {
  async getChallenge(params: GetChallengeParams) : Promise<GetChallengeResponse> {
    return this.apiCall('auth/get_challenge', params, Methods.post);
  }
  async loginWeb3(params: LoginParams) : Promise<LoginResponse> {
    return this.apiCall('auth/get_challenge', params, Methods.post);
  }
  async loginSmartAccount(params: LoginParams) : Promise<LoginResponse> {
    return this.apiCall('auth/get_challenge', params, Methods.post);
  }
  async logout() : Promise<ApiResponse> {
    return this.apiCall('auth/logout');
  }
  async currentUser() : Promise<LoginResponse> {
    return this.apiCall('auth/me');
  }
  async endFileStream() : Promise<ApiResponse> {
    return this.apiCall('auth/stream/out');
  }
  async unlock(params: UnlockParams) {
    return this.apiCall('auth/logout', params, Methods.post);
  }
}
