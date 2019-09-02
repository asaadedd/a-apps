import { Action } from '@ngrx/store';
import { LoginData } from '../interfaces/auth.interfaces';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_FAILED = '[Auth] Login failed',
  LOGIN_SUCCESSFUL = '[Auth] Login successful'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  payload: LoginData;

  constructor(username: string, password: string) {
    this.payload = { username, password };
  }
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class LoginSuccessful implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESSFUL;
}

export type AuthActions = Login | LoginFailed | LoginSuccessful;
