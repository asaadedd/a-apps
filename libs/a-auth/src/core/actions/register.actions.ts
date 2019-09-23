import { Action } from '@ngrx/store';
import { User } from '@a-apps/a-graphql';

export enum RegisterActionTypes {
    CREATE_USER = '[Register] Create user',
    CREATE_USER_FAILED = '[Register] Create user failed',
    CREATE_USER_SUCCESSFUL = '[Register] Create user successful'
}

export class CreateUser implements Action {
    readonly type = RegisterActionTypes.CREATE_USER;
    constructor(public readonly payload: User) {}
}

export class CreateUserFailed implements Action {
    readonly type = RegisterActionTypes.CREATE_USER_FAILED;
    constructor(public readonly payload: string) {}
}

export class CreateUserSuccessful implements Action {
    readonly type = RegisterActionTypes.CREATE_USER_SUCCESSFUL;
}

export type RegisterActions = CreateUser | CreateUserFailed | CreateUserSuccessful;

