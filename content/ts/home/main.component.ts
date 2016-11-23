import { Component, AfterViewInit } from '@angular/core'

@Component({
  selector: 'main-app',
  template: `
  <about></about>
  <projects-component></projects-component>
  <services-component></services-component>
  <project-management></project-management>
  <working-together></working-together>
  `
})

export class MainComponent implements AfterViewInit{
  ngAfterViewInit(): void{
    $(document).ready(()=>{
        setTimeout(function () {
          // (<any>$('.button-collapse')).sideNav();
          // (<any>$('.parallax')).parallax();
        }, 0);
      })
  }
}
