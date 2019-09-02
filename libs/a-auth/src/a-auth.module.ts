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
import { AAuthConfig, LoginGQL, ForgotPasswordGQL, registerGQL } from './core/interfaces/a-auth-config.interface';

// reducers
import { authReducer } from './core/reducers/auth.reducer';

// effects
import { AuthEffects } from './core/effects/auth.effects';

// components
import { AAuthLoginComponent } from './components/login/a-auth-login.component';

@NgModule({
    declarations: [AAuthLoginComponent],
    imports: [
        CommonModule, BrowserAnimationsModule, MatInputModule, FontAwesomeModule,
        ReactiveFormsModule, FlexLayoutModule, MatButtonModule,
        FlexLayoutModule,
        StoreModule.forFeature('Authorization', authReducer),
        EffectsModule.forFeature([AuthEffects]),
        LoginModule
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
                { provide: ForgotPasswordGQL, useClass: config.mutation.forgotPassword },
                { provide: registerGQL, useClass: config.mutation.register }
            ]
        }
    }
}
