import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginData } from '../login.interfaces';

@Component({
    selector: 'ui-apps-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginFormComponent {
    @Output() login: EventEmitter<LoginData> = new EventEmitter<LoginData>();
    @Output() register: EventEmitter<never> = new EventEmitter<never>();
    @Output() forgotPassword: EventEmitter<never> = new EventEmitter<never>();
    loginForm: FormGroup;
    constructor() {
        this.loginForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    triggerLogin() {
        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.login.emit({
            username,
            password
        });
    }
}
