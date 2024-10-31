import { ApiResponse, Hex } from "./common";

export interface GetUploadTokenResult extends ApiResponse {
    secret: string;
}

export interface ValidateUploadParams {
    offers?: Array<string>;
    category: string;
    demo: boolean;
    demoEndpoint: boolean;
    publicAddress: Hex;
}

export interface ValidateUploadResult extends ApiResponse {
    ok: boolean;
    offers: Array<string>;
}

export interface AddMediaParams {
    cid: string;
    meta: {
        mainManifest: string;
        uploader: Hex;
        encryptionType: string;
        title?: string;
        offers?: Array<string>;
        category: string;
        staticThumbnail?: string;
        animatedThumbnail: string;
        type: string;
        extension: string;
        duration: string;
        demo?: boolean;
        totalEncryptedFiles?: number;
        storage: string;
        storagePath: string;
        description?: string;
    }
}
export interface AddMediaResult extends ApiResponse {

}