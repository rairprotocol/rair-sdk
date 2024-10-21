import { Hex } from "./common";

export interface User {
    email?: string;
    nickName?: string;
    avatar?: string;
    background?: string;
    firstName?: string;
    lastName?: string;
    ageVerified?: boolean;
    publicAddress: Hex;
    creationDate?: Date;
    blocked?: boolean;
}

export interface MediaViewLog {
    userAddress: Hex;
    file: string;
    decryptedFiles: number
    offer?: string;
}