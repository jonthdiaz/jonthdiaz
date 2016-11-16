import { Component } from '@angular/core'

@Component({
  selector:'my-app',
  template:'<div>Esto es un template  <button (click)="sayMyName()">say me name</button></div>'
})
export class MyComponent{
  constructor(){
    alert("esto es una prueba jonathan otra de saludo")
  }
  sayMyName(){
    console.log("My name is")
  }
}
