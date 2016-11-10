import angular from 'angular'
import { Inject } from 'angular-es6'

let controllers = angular.module('home.controller', [])

export  class mainController{
  static $inject = ['$scope'];
  constructor(){
    const { scope } = this.$inject
  }
}
controllers.controller("mainController", mainController)
module.exports =  controllers
