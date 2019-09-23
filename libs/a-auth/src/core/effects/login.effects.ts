import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginGQL } from '../interfaces/a-auth-config.interface';
import { of } from 'rxjs';
import { Mutation } from 'apollo-angular';
import { Inject, Injectable } from '@angular/core';
import { Login, LoginActionTypes, LoginFailed, LoginSuccessful } from '../actions/login.actions';
import { NavigateTo } from '../../../../../apps/e-appointment/src/app/core/actions/navigator.actions';
import { PagesTypes } from '../../../../../apps/e-appointment/src/app/core/interfaces/pages.interfaces';

@Injectable()
export class LoginEffects {
    @Effect()
    login$ = this.actions$.pipe(
        ofType(LoginActionTypes.LOGIN),
        switchMap((loginActions: Login) =>
            this.loginGql.mutate(loginActions.payload).pipe(
                catchError(() => of(new LoginFailed())),
                mergeMap(() => of(new LoginSuccessful(), new NavigateTo(PagesTypes.REGISTER)))
            )
        )
    );

    constructor(private actions$: Actions, @Inject(LoginGQL) public loginGql: Mutation) { }
}
