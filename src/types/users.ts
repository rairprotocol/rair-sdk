import { ApiResponse, Hex } from "./common";
import { User } from "./database";

export interface ListUsersResponse extends ApiResponse {
    data: Array<Pick<User, 'email' | 'nickName' | 'publicAddress' | 'creationDate' | 'blocked'>>;
}

export interface ExportUsersResponse extends ApiResponse {
    file: File
}

export interface VerifyAgeParams {
    file: File
}

export interface VerifyAgeResponse extends ApiResponse {
    age: { age_check: string }
}

export interface CreateUserParams {
    publicAddress: Hex;
}

export interface SingleUserResponse extends ApiResponse {
    user: User
}

export interface FindUserParams {
    publicAddress: Hex
}

export type UpdateUserParams = Pick<User,
    'nickName' |
    'avatar'  |
    'background' |
    'email' |
    'firstName' |
    'lastName' |
    'blocked'
>
