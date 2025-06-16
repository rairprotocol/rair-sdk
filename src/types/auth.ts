import { ApiResponse, Hex } from "./common";
import { User } from "./database";

export enum Intents {
    Login = 'login',
    Decrypt = 'decrypt',
}

enum FileTypes {
    file = 'file'
}
  
export interface GetChallengeParams {
    userAddress: Hex;
    intent: Intents;
    ownerAddress?: Hex;
    mediaId?: string;
    zoomId?: string;
}

export interface GetChallengeResponse extends ApiResponse {
    response: string
}
 
export interface LoginParams {
    MetaMessage: string,
    MetaSignature: string,
    userAddress?: Hex,
    method: string,
}

export interface LoginResponse extends ApiResponse {
    user: Omit<User, '_id'>;
}

export interface UnlockParams {
    type: FileTypes,
    fileId: string
}