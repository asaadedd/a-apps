import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData, LoginStatusTypes } from './index';

@Component({
  selector: 'a-auth-login',
  templateUrl: './a-auth-login.component.html',
  styleUrls: ['./a-auth-login.component.scss']
})

export class AAuthLoginComponent {
  @Output() login: EventEmitter<LoginData> = new EventEmitter<LoginData>();
  @Output() forgotPassword: EventEmitter<void> = new EventEmitter();
  @Output() register: EventEmitter<void> = new EventEmitter();
  @Output() loginStatus: EventEmitter<LoginStatusTypes> = new EventEmitter<LoginStatusTypes>();
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
}
