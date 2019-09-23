import { NgModule, ModuleWithProviders } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginModule } from '@a-apps/ui-apps';

// services
import {
    AAuthConfig,
    LoginGQL,
    RegisterGQL,
    ResetPasswordGQL
} from './core/interfaces/a-auth-config.interface';

// reducers
import { loginReducer } from './core/reducers/login.reducer';
import { registerReducer } from '@a-apps/a-auth/core/reducers/register.reducer';
import { forgotPasswordReducer } from '@a-apps/a-auth/core/reducers/forgot-password.reducer';

// effects
import { LoginEffects } from './core/effects/login.effects';
import { RegisterEffects } from '@a-apps/a-auth/core/effects/register.effects';
import { ForgotPasswordEffects } from '@a-apps/a-auth/core/effects/forgot-password.effects';

// components
import { AAuthLoginComponent } from './components/login/a-auth-login.component';

@NgModule({
    declarations: [AAuthLoginComponent],
    imports: [
        CommonModule, BrowserAnimationsModule, MatInputModule, FontAwesomeModule,
        ReactiveFormsModule, FlexLayoutModule, MatButtonModule,
        FlexLayoutModule,
        StoreModule.forFeature('Authorization', {
            login: loginReducer,
            register: registerReducer,
            forgotPassword: forgotPasswordReducer
        }),
        EffectsModule.forFeature([LoginEffects, RegisterEffects, ForgotPasswordEffects]),
        LoginModule,
    ],
    exports: [AAuthLoginComponent],
    providers: []
})

export class AAuthModule {
    constructor() {
        library.add(faUser, faUserCircle, faLock, faCalendarCheck);
    }

    static forRoot<L, F, R>(config: AAuthConfig<L, F, R>): ModuleWithProviders {
        return {
            ngModule: AAuthModule,
            providers: [
                { provide: LoginGQL, useClass: config.mutation.login },
                { provide: ResetPasswordGQL, useClass: config.mutation.resetPassword },
                { provide: RegisterGQL, useClass: config.mutation.register }
            ]
        }
    }
}
