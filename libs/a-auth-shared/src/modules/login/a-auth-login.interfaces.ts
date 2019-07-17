export enum LoginTypes {
  NONE = 'None',
  IN_PROGRESS =  'In progress',
  FAILED = 'Failed',
  SUCCESSFUL = 'Successful'
}
export type LoginStatusTypes = LoginTypes.FAILED | LoginTypes.IN_PROGRESS | LoginTypes.NONE | LoginTypes.SUCCESSFUL;
export interface LoginData {
  username: string;
  password: string;
}
