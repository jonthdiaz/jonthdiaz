import angular from 'angular'
import { Inject } from 'angular-es6'

let controllers = angular.module('home.controller', [])

export  class HomeController{
  static $inject = ['$scope'];
  constructor(){
    const { scope } = this.$inject
  }
}
controllers.controller("HomeController", HomeController)
module.exports =  controllers
