import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AAuthLoginComponent } from './a-auth-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AAuthLoginComponent],
  imports: [CommonModule, BrowserAnimationsModule, MatInputModule, FontAwesomeModule],
  providers: []
})

export class AAuthLoginModule {
  constructor() {
    library.add(faUser);
  }

}
