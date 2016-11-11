import angular from 'angular'
import { Inject } from 'angular-es6'
let directives = angular.module('home.directives', [])

class aboutMe {
  constructor(){
    this.template = "<div>Esto es una prueba</div>"
    this.restrict = "E"
  }
}

directives.directive('aboutMe', aboutMe)
module.exports = directives
