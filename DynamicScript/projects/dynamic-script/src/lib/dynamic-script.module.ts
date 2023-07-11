import { NgModule } from '@angular/core';
import { DynamicScriptComponent } from './dynamic-script.component';
import { DynamicScriptDirective } from './dynamic-script.directive';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DynamicScriptComponent,
    DynamicScriptDirective
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    DynamicScriptComponent
  ]
})
export class DynamicScriptModule { }
