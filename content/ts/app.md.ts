import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser'
import { Component, NgModule } from "@angular/core";

import { MyComponent } from './app.cp'
@NgModule({
    imports: [BrowserModule],
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})

export class AppModule { }
