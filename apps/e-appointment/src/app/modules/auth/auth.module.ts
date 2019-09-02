import { NgModule } from '@angular/core';

// modules
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AAuthModule } from '@a-apps/a-auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// components

@NgModule({
  declarations: [LoginComponent],
  imports: [
      AAuthModule,
  ],
  providers: [],
  exports: [LoginComponent]
})
export class AuthModule {s}
