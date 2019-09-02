import { NgModule, ModuleWithProviders } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { LoginComponent } from './login.component';
import { ApplicationLoginInformationComponent } from './application-login-information/application-login-information.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    declarations: [LoginComponent, ApplicationLoginInformationComponent, LoginFormComponent],
    imports: [
        CommonModule, BrowserAnimationsModule, MatInputModule, FontAwesomeModule,
        ReactiveFormsModule, MatButtonModule, FlexLayoutModule
    ],
    providers: [],
    exports: [LoginComponent]
})

export class LoginModule {
    constructor() {
        library.add(faUser, faUserCircle, faLock, faCalendarCheck);
    }
}
