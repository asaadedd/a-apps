import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  errorMessages: string[]

  constructor() {
    this.errorMessages = [];
  }

  ngOnInit() {
  }

  login() {

  }

  forgotPassword() {

  }

  register() {

  }
}
