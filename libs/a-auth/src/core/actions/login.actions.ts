import { Action } from '@ngrx/store';
import { LoginData } from '../../../../ui-apps/src/lib/login/login.interfaces';

export enum LoginActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_FAILED = '[Login] Login failed',
  LOGIN_SUCCESSFUL = '[Login] Login successful'
}

export class Login implements Action {
  readonly type = LoginActionTypes.LOGIN;
  payload: LoginData;

  constructor(username: string, password: string) {
    this.payload = { username, password };
  }
}

export class LoginFailed implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILED;
}

export class LoginSuccessful implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESSFUL;
}

export type LoginActions = Login | LoginFailed | LoginSuccessful;
