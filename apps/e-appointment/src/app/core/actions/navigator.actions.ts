import { Action } from '@ngrx/store';
import { PagesTypes } from '../interfaces/pages.interfaces';

export enum NavigatorActionsTypes {
    NAVIGATE_TO = '[Navigator] Navigate to'
}

export class NavigateTo implements Action {
    readonly type = NavigatorActionsTypes.NAVIGATE_TO;

    constructor(public payload: PagesTypes) {}
}
