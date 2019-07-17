import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../modules/auth/auth.module';

@NgModule({
  declarations: [],
  imports: [CoreRoutingModule, AuthModule],
  providers: [],
  exports: [RouterModule]
})

export class CoreModule {}
