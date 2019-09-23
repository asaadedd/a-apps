import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    ResetPasswordGQL
} from '@a-apps/a-auth/core/interfaces/a-auth-config.interface';
import { Mutation } from 'apollo-angular';
import {
    ForgotPasswordActionTypes,
    ResetPassword, ResetPasswordFailed,
    ResetPasswordSuccessful
} from '@a-apps/a-auth/core/actions/forgot-password.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ForgotPasswordEffects {
    @Effect()
    resetPassword$ = this.actions$.pipe(
        ofType(ForgotPasswordActionTypes.RESET_PASSWORD),
        mergeMap((action: ResetPassword) =>
            this.resetPassword.mutate({ email: action.payload.email }).pipe(
                map(() => new ResetPasswordSuccessful()),
                catchError(() => of(new ResetPasswordFailed()))
            )
        )
    );

    constructor(private actions$: Actions, @Inject(ResetPasswordGQL) public resetPassword: Mutation) { }
}
