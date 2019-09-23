export enum PagesTypes {
    LOGIN = 'Login',
    REGISTER = 'REGISTER',
    FORGOT_PASSWORD = 'FORGOT_PASSWORD'
}

export type Pages = {
    [key in PagesTypes]: PageInfo;
}

export interface PageInfo {
    url: string;
}
