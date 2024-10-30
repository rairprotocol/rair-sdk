import { ApiResponse, Hex } from "./common";

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
    type: FileTypes,
    fileId: string
}