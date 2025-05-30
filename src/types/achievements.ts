import {
    ApiResponse,
    DatabaseId,
    DatabaseIdArray,
    Hex,
} from "./common";
import {
    Achievement,
    AchievementAward,
    Category,
    DistributionPool,
    MediaFile,
    PoolTeam,
    TeamDistribution,
    User,
    Versioning
} from "./database";

export interface CreateAchievementParams {
    displayName: string;
    internalName: string;
    githubLabel?: string;
    gitHubRepo?: string;
    awardLimit: number;
    pointsValue: number;
    githubActionType?: string;
    timeEstimate: string;
    connectedFile?: string;
    connectedURL?: string;
    standalonePublicAddress?: string;
    standaloneTokens?: string;
    sortingRelevance?: number;
}

export interface CreateDistributionPoolParams {
    name: string;
    startTime: Date;
    endTimes: Array<Date>;
    multipliers: Array<number>
    tokenPool: number;
    tokenAddress: Hex;
    ranks: Array<number>
    percentagePerRank: Array<number>;
}

export interface ReferralLinkParams {
    referralLink: string;
}

export interface CreatePoolTeamParams {
    name: string;
    address?: Hex;
    percentage: number;
    referralLink?: string;
}

export interface DistributionSubscriptionParams {
    pool: string;
    date: Date;
}

interface SentTokensCommonParams {
    txHash: Hex;
    date: Date;
    value: number;
}

export interface SentTokensTeamParams extends SentTokensCommonParams {
    pool: string;
    teamId: string;
}

export interface SentTokensSpecialParams extends SentTokensCommonParams {
    user: string;
    awardIds: Array<string>;
    tokenAddress: Hex;
}

export interface DefaultDistributionPoolParams {
    poolId: string;
    date: Date;
}

export interface SentDistributionParams {
    txHash: Hex;
}

export interface SentDistributionBatchParams extends DatabaseIdArray, SentDistributionParams {}

export interface UpdateAchievementByIdParams extends CreateAchievementParams, DatabaseId {}
export interface UpdateDistributionPoolByIdParams extends CreateDistributionPoolParams, DatabaseId {}
export interface UpdatePoolTeamByIdParams extends CreatePoolTeamParams, DatabaseId {}

export interface GetAchievementListResponse extends ApiResponse {
    achievements: Array<Achievement>;
}
export interface CreateAchievementResponse extends ApiResponse {
    newAchievement: Achievement;
}
export interface GetLevelsResponse extends ApiResponse {
    levels: Array<number>;
}
export interface GetPoolsResponse extends ApiResponse {
    pools: Array<DistributionPool>
}
export interface CreatePoolResponse extends ApiResponse {
    newPool: DistributionPool;
}
export interface GetTeamListResponse extends ApiResponse {
    teams: Array<PoolTeam>;
}
export interface CreateTeamResponse extends ApiResponse {
    team: PoolTeam;
}
interface Reward {
    startLevel: number;
    startPoints: number;
    endPoints: number;
    endLevel: number;
    devNum: number;
    percentage: number;
    sharePerDev: number;
}
interface UserRankingData {
    gitHandle?: string;
    avatar?: string;
    publicAddress: Hex;
    _id: string;
    email?: string;
    creationDate?: string;
    level: number;
    team: string;
}
export interface GetRankingResponse extends ApiResponse {
    devNum: number;
    totalLevels: number;
    rewards: Array<Reward>,
    launchDate: string;
    poolSize: number;
    data: Array<UserRankingData>;
}
export interface GetAdminDataResponse extends ApiResponse {
    data: Array<Versioning>;
}
interface FileAchievementData extends Omit<
    MediaFile,
        'category' |
        'encryptionType' |
        'storage' |
        'storagePath' |
        'totalEncryptedFiles'> {
        achievements: Pick<
            Achievement,
                'displayName' |
                'githubLabel' |
                'gitHubRepo' |
                'connectedURL' |
                'pointsValue' |
                'timeEstimate' |
                'sortingRelevance'> & {
            levelValue: number;
        };
    catego
    ry: Pick<Category, 'name'>;
}
export interface GetAchievementVideosResponse extends ApiResponse {
    data: {
        [category: string]: Array<FileAchievementData>
    }
}

export interface GetUserAchievementsResponse extends ApiResponse {
    data: Array<AchievementAward & {
        achievementData: Pick<
            Achievement,
                'displayName' |
                'gitHubRepo' |
                'githubLabel' |
                'timeEstimate' |
                'connectedFile' |
                'connectedURL'> & {
            levelValue: number
        };
        videoData: Omit<MediaFile,
            'authorPublicAddress' |
            'creationDate' |
            'encryptionType' |
            'offer' |
            'storage' |
            'storagePath' |
            'totalEncryptedFiles'>
    }>;
}

export interface GetAwardHistoryResponse extends ApiResponse {
    awards: Array<AchievementAward>
    totalNumber: number;
}

export interface GetTeamByReferralResponse extends ApiResponse {
    team: string;
}

interface SpecialBalance {
    tokens: number;
    publicAddress: Hex;
    awards: Array<string>;
}

export interface GetRewardsSummaryResponse extends ApiResponse {
    pools: Array<{
        poolId: string;
        dates: Array<{
            date: string;
            multiplier: number;
            selected: boolean;
        }>
        name: string;
        startTime: string;
        tokenPool: number;
        tokenAddress: Hex;
        specialBalance: Array<SpecialBalance> | 0;
        offChainBalance: number;
    }>;
}

export interface GetDistributionDataResponse extends ApiResponse {
    distributionDates: {
        [date: string]: Array<{
            subscriptionId: string;
            gitHandle: string;
            publicAddress: Hex;
            userId: string;
            specialBalance: Array<SpecialBalance>
            rawBalance: number;
            teamShare: number;
            teamPercentage: number;
            stakingMultiplier: number;
            offChainBalance: number;
            teamData: PoolTeam;
        }>;
    },
    teamTokens: {
        [date: string]: Array<{
            teamId: string;
            teamName: string;
            publicAddress: Hex;
            tokens: number;
            transfers: Array<TeamDistribution>;
        }>
    },
    totalData: number;
    page: number;
    pages: number;
}

export interface GetAdminRankingResponse extends ApiResponse {
    data: User & { rank: number };
}

export interface SetLevelsParams {
    levels: Array<number>;
}
