import { ApiResponse, Hex } from "./common";

enum Intents {
    Login = 'login',
    Decrypt = 'decrypt',
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
    ownerAddress?: Hex,
    userAddress?: Hex,
    mediaId?: string,
    zoomId?: string,
}

export interface LoginResponse {
    user: {
        creationDate: Date;
        email: string;
        avatar: string;
        background: string;
        firstName: string;
        lastName: string;
        ageVerified: boolean;
        publicAddress: string;
        nonce: string;
        blocked: boolean;
        nickName?: string
    }
}

export interface UnlockParams {
    type: string,
    fileId: string
}