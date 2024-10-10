export interface User {
    email?: string;
    nickName?: string;
    avatar?: string;
    background?: string;
    firstName?: string;
    lastName?: string;
    ageVerified?: boolean;
    publicAddress: string;
    creationDate?: Date;
    blocked?: boolean;
}