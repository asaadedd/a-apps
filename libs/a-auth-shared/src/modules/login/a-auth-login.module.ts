import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AAuthLoginComponent } from './a-auth-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AAuthLoginComponent],
  imports: [
    CommonModule, BrowserAnimationsModule, MatInputModule, FontAwesomeModule,
    ReactiveFormsModule, FlexLayoutModule, MatButtonModule
  ],
  providers: [],
  exports: [AAuthLoginComponent]
})

export class AAuthLoginModule {
  constructor() {
    library.add(faUser, faUserCircle, faLock, faCalendarCheck);
  }

}
