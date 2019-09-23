import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RegisterGQL } from '@a-apps/a-auth/core/interfaces/a-auth-config.interface';
import { Mutation } from 'apollo-angular';
import {
    CreateUser,
    CreateUserFailed,
    CreateUserSuccessful,
    RegisterActionTypes
} from '@a-apps/a-auth/core/actions/register.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffects {
    @Effect()
    createUser$ = this.actions$.pipe(
        ofType(RegisterActionTypes.CREATE_USER),
        mergeMap((action: CreateUser) =>
            this.register.mutate(action.payload).pipe(
                catchError((error: HttpErrorResponse) => of(new CreateUserFailed(error.message))),
                map(() => new CreateUserSuccessful())
            )
        )
    );

    constructor(private actions$: Actions, @Inject(RegisterGQL) public register: Mutation) { }
}
