import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../modules/auth/components/login/login.component';
import { PAGES } from '../constants/pages.constants';

const appRoutes: Routes = [
  { path: PAGES.Login.url, component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  exports: [RouterModule]
})

export class CoreRoutingModule {}
