import 'zone.js';
import 'reflect-metadata';
import 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";
import {BrowserModule} from '@angular/platform-browser'
import { AboutComponent } from './about.component'
import { ProjectsComponent } from './projects.component'
import { ServicesComponent } from './services.component'
import { MainComponent } from './main.component'
import { ProjectManagmentComponent }  from './projectm.component'
import { WorkingTogetherComponent } from './working-together.component'
import { NgModule} from '@angular/core'

@NgModule({
  imports: [BrowserModule],
  declarations: [MainComponent ,AboutComponent, ProjectsComponent, ServicesComponent, ProjectManagmentComponent, WorkingTogetherComponent,
  MaterializeDirective],
  bootstrap: [MainComponent]
})

export class AppModule {
  }
