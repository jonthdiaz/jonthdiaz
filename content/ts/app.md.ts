import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser'
import { Component, NgModule, AfterViewInit } from "@angular/core";

import { MyComponent } from './app.cp'
@NgModule({
    imports: [BrowserModule],
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})

export class AppModule implements AfterViewInit{
  ngAfterViewInit(): void{
      $(document).ready(()=>{
        setTimeout(function () {
          (<any>$('.button-collapse')).sideNav();
          (<any>$('.parallax')).parallax();
        }, 0);
      })
  }
}
