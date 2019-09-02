// modules
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './routing/core-routing.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../modules/auth/auth.module';

// components
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [CommonLayoutComponent, HeaderComponent],
  imports: [CoreRoutingModule, AuthModule],
  providers: [],
  exports: [RouterModule, CommonLayoutComponent]
})

export class CoreModule {}
