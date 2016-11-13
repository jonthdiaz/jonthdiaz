import 'zone.js';
import 'reflect-metadata';
import {bootstrap} from "angular2/platform/browser"
import { Component } from "angular2/core";

@Component({
  selector:'my-component',
  template:'<div>Esto es un template  <button (click)="sayMyName()">say me name</button></div>'
})

export class MyComponent{
  constructor(){
    

  }
  sayMyName(){
    console.log("My name is")
  }
}


bootstrap(MyComponent);
