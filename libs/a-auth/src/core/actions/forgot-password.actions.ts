import { Action } from '@ngrx/store';

export enum ForgotPasswordActionTypes {
    RESET_PASSWORD = '[Forgot password] Reset password',
    RESET_PASSWORD_FAILED = '[Forgot password] Reset password failed',
    RESET_PASSWORD_SUCCESSFUL = '[Forgot Password] Reset password successful'
}

export class ResetPassword implements Action {
    readonly type = ForgotPasswordActionTypes.RESET_PASSWORD;
    constructor(public readonly payload: { email: string }) {}
}

export class ResetPasswordFailed implements Action {
    readonly type = ForgotPasswordActionTypes.RESET_PASSWORD_FAILED;
    constructor(public readonly payload?: string) {}
}

export class ResetPasswordSuccessful implements Action {
    readonly type = ForgotPasswordActionTypes.RESET_PASSWORD_SUCCESSFUL;
    constructor(public readonly payload?: string) {}
}

export type ForgotPasswordActions = ResetPassword | ResetPasswordFailed | ResetPasswordSuccessful;

