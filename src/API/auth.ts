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
  /**
   * Get the signature challenge to login into the system
   *
   * @param userAddress   Public address of the user
   * @param ownerAddress  In case of smart accounts, the public address of the smart account manager
   * @param intent        Intention of the signature request, e.g.: 'login', 'decrypt'
   * @param mediaId       Id of the media to unlock, in case of 'decrypt' intent
   * @param zoomId        Id of the zoom meeting to unlock, in case of 'decrypt' intent
   * @public
   */
  async getChallenge(params: GetChallengeParams) : Promise<GetChallengeResponse> {
    return this.apiCall('auth/get_challenge', params, {}, Methods.post);
  }

  /**
   * Get the signature challenge to login into the system
   *
   * @param MetaMessage     Message received from the get challenge call
   * @param MetaSignature   Message signed by the user
   * @param userAddress     Public address of the user
   * @public
   */
  async loginWeb3(params: LoginParams) : Promise<LoginResponse> {
    return this.apiCall('auth/login', params, {}, Methods.post);
  }

  /**
   * Get the signature challenge to login into the system with web3Auth
   *
   * @param MetaMessage     Message received from the get challenge call
   * @param MetaSignature   Message signed by the user
   * @param userAddress     Public address of the user
   * @public
   */
  async loginSmartAccount(params: LoginParams) : Promise<LoginResponse> {
    return this.apiCall('auth/loginSmartAccount', params, {}, Methods.post);
  }

  /**
   * Closes the current user's session in the system
   *
   * @public
   */
  async logout() : Promise<ApiResponse> {
    return this.apiCall('auth/logout');
  }

  /**
   * Returns the information of the current user
   *
   * @public
   */
  async currentUser() : Promise<LoginResponse> {
    return this.apiCall('auth/me');
  }

  /**
   * Stops any file stream
   *
   * @public
   */
  async endFileStream() : Promise<ApiResponse> {
    return this.apiCall('auth/stream/out');
  }

  /**
   * Returns the information of the current user
   *
   * @param type    Type of file to unlock
   * @param fileId  Id for the file to unlock
   * @public
   */
  async unlock(params: UnlockParams) {
    return this.apiCall('auth/unlock', params, {}, Methods.post);
  }
}
