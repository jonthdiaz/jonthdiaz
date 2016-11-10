import angular from 'angular'
// import initjs from './layout/init'
import controllers from '../es6/home/controllers'
import ngRoute from 'angular-route'

let app = angular.module('home', [
  'ngRoute',
  controllers.name,
])
.config(['$routeProvider', '$interpolateProvider', '$httpProvider',
($routeProvider, $interpolateProvider, $httpProvider)=>{
  $routeProvider
    .when('/', {
      templateUrl: '/static/angular/objectives_calendar/views/main.html',
      controller: 'mainController',
    })
    .otherwise({
      redirectTo: '/'
    })
}])
angular.bootstrap(document, [app.name])
