import 'zone.js'
import 'reflect-metadata'

import {BrowserModule} from '@angular/platform-browser'
import { AboutComponent } from './about.component'
import { ProjectsComponent } from './projects.component'
import { ServicesComponent } from './services.component'
import { MainComponent } from './main.component'
import { NgModule} from '@angular/core'

@NgModule({
  imports: [BrowserModule],
  declarations: [MainComponent ,AboutComponent, ProjectsComponent, ServicesComponent],
  bootstrap: [MainComponent]
})

export class AppModule {
  }
