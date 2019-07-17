import { NgModule } from '@angular/core';

// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FlexLayoutModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
