var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'zone.js';
import 'reflect-metadata';
import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
var MyComponent = (function () {
    function MyComponent() {
        alert("esto es una prueba jonathan otra de saludo ");
    }
    MyComponent.prototype.sayMyName = function () {
        console.log("My name is");
    };
    return MyComponent;
}());
MyComponent = __decorate([
    Component({
        selector: 'my-component',
        template: '<div>Esto es un template  <button (click)="sayMyName()">say me name</button></div>'
    }),
    __metadata("design:paramtypes", [])
], MyComponent);
export { MyComponent };
bootstrap(MyComponent);
//# sourceMappingURL=app.js.map