import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../core/actions/login.actions';
import { NavigateTo } from '../../../../../apps/e-appointment/src/app/core/actions/navigator.actions';
import { PagesTypes } from '../../../../../apps/e-appointment/src/app/core/interfaces/pages.interfaces';
import { LoginData } from '../../../../ui-apps/src/lib/login/login.interfaces';

@Component({
  selector: 'a-auth-login',
  templateUrl: './a-auth-login.component.html',
  styleUrls: ['./a-auth-login.component.scss']
})

export class AAuthLoginComponent {
    constructor(private readonly store: Store<{}>) {}

    triggerLogin(loginData: LoginData) {
        this.store.dispatch(new Login(loginData.username, loginData.password));
    }

    triggerForgotPassword() {
        this.store.dispatch(new NavigateTo(PagesTypes.FORGOT_PASSWORD));
    }

    triggerRegister() {
        this.store.dispatch(new NavigateTo(PagesTypes.REGISTER));
    }
}
