import { ApiResponse, Hex, PaginationParams } from "./common";
import { PoolTeam, User, UserProjects, UserReferences, UserValue } from "./database";

export interface ListUsersParams extends PaginationParams {
    fields: Array<string>;
}

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

export interface UpdateUserParams extends FindUserParams, Pick<User,
    'nickName' |
    'avatar'  |
    'background' |
    'email' |
    'firstName' |
    'lastName' |
    'blocked'
> {};

export interface GetReferencesResponse extends ApiResponse {
    references: Array<Omit<UserReferences, '__v' | 'award' | 'gitHandle'>>;
}

export interface GetPastProjectsResponse extends ApiResponse {
    projects: Array<Omit<UserProjects, 'gitHandle' | 'award' | '__v'>>;
}

export interface CreateUserReferenceResponse extends ApiResponse {
    result: UserReferences;
}

export interface CreatePastProjectResponse extends ApiResponse {
    result: UserProjects;
}

export interface UpdateReferenceResponse extends ApiResponse {
    reference: UserReferences;
}

export interface UpdatePastProjectResponse extends ApiResponse {
    project: UserProjects;
}

export interface GetAchievementDataResponse extends ApiResponse {
    team: PoolTeam
    userLevel: number;
    userRank: number;
    levelDiff: number;
    rankDiff: number;
}

export interface GetUserValueResponse extends ApiResponse {
    data: UserValue;
}

export interface SetUserValueResponse extends ApiResponse {
    data: UserValue;
}

export interface UserValueParam {
    namespace: string;
    value: string;
}