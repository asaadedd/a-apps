import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../modules/auth/components/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  exports: [RouterModule]
})

export class CoreRoutingModule {}
