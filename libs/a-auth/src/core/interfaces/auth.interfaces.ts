export enum AuthStatusTypes {
    AUTHENTICATEED = 'AUTHENTICATED',
    NOT_AUTHENTICATEED =  'NOT_AUTHENTICATEED'
}
export type AuthStatus = AuthStatusTypes.AUTHENTICATEED | AuthStatusTypes.NOT_AUTHENTICATEED;
export interface LoginData {
  username: string;
  password: string;
}
