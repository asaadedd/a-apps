import { NgModule } from '@angular/core';

// modules
import { AAuthLoginModule } from '../../../../../../libs/a-auth-shared/src/modules/login/a-auth-login.module';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// components

@NgModule({
  declarations: [LoginComponent],
  imports: [AAuthLoginModule, FlexLayoutModule],
  providers: [],
  exports: [LoginComponent]
})

export class AuthModule {}
