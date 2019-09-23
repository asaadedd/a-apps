import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Location } from '@angular/common';
import { NavigateTo, NavigatorActionsTypes } from '../actions/navigator.actions';
import { tap } from 'rxjs/operators';
import { PAGES } from '../constants/pages.constants';

@Injectable()
export class NavigatorEffects {
    @Effect({ dispatch: false })
    public navigateTo$ = this.actions$.pipe(
        ofType(NavigatorActionsTypes.NAVIGATE_TO),
        tap((action: NavigateTo) =>
            this.location.go(PAGES[action.payload].url)
        )
    );

    constructor(public readonly actions$: Actions, public readonly location: Location){}
}
