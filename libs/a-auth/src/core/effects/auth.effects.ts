import { LoginGQL } from './../interfaces/a-auth-config.interface';
import { Login } from './../actions/auth.actions';
import { Injectable, Inject } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthActionTypes } from '../actions/auth.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Mutation } from 'apollo-angular';
import { of } from 'rxjs';
import { LoginFailed, LoginSuccessful } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
    // @Effect()
    // login$ = this.actions$.pipe(
    //     ofType(AuthActionTypes.LOGIN),
    //     switchMap((loginActions: Login) =>
    //         this.loginGql.mutate(loginActions.payload).pipe(
    //             catchError(() => of(new LoginFailed())),
    //             map(() => new LoginSuccessful())
    //         )
    //     )
    // )
    //
    // constructor(private actions$: Actions, @Inject(LoginGQL) public loginGql: Mutation) { }
}
