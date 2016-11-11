import angular from 'angular'
import { Inject } from 'angular-es6'

let controllers = angular.module('home.controller', [])

export  class mainController extends Inject{
  static $inject = ['$scope'];
  constructor(...args){
    super(...args)
    const { $scope } = this.$inject
  }
}
controllers.controller("mainController", mainController)
module.exports =  controllers
