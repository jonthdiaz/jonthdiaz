import 'zone.js';
import 'reflect-metadata';
import {Component, View} from 'angular2/core';
import {HelloComponent} from './hello.component'

@Component({
  selector: 'hello-app'
})
@View({
  directives: [HelloComponent],
  template: `
    <div>
    <hello-component></hello-component>
    </div>
  `
})
class HelloApp{}

bootstrap(HelloApp, []);
