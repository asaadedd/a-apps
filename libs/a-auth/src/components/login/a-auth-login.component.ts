import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'a-auth-login',
  templateUrl: './a-auth-login.component.html',
  styleUrls: ['./a-auth-login.component.scss']
})

export class AAuthLoginComponent {
    loginForm: FormGroup;

    constructor() {
        this.loginForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    triggerLogin() {
    }

    triggerForgotPassword() {
    }

    triggerRegister() {
    }
}
