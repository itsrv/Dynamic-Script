import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicScriptModule } from 'dynamic-script';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicScriptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
