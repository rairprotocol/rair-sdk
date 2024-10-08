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
  loginWeb3(params: LoginParams) : Promise<LoginResponse> {
    return this.apiCall('auth/get_challenge', params, Methods.post);
  }
  loginSmartAccount(params: LoginParams) : Promise<LoginResponse> {
    return this.apiCall('auth/get_challenge', params, Methods.post);
  }
  logout() : Promise<ApiResponse> {
    return this.apiCall('auth/logout');
  }
  currentUser() : Promise<LoginResponse> {
    return this.apiCall('auth/me');
  }
  endFileStream() : Promise<ApiResponse> {
    return this.apiCall('auth/stream/out');
  }
  unlock(params: UnlockParams) {
    return this.apiCall('auth/logout', params, Methods.post);
  }
}
