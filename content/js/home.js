import angular from 'angular'
import ngRoute from 'angular-route'
import controllers from '../es6/home/controllers'
import dom from '../es6/home/dom'


let app = angular.module('home', [
  'ngRoute',
  controllers.name
])
.config(['$routeProvider', '$interpolateProvider', '$httpProvider',
($routeProvider, $interpolateProvider, $httpProvider)=>{
  $routeProvider
    .when('/', {
      templateUrl: '/views/home/main.html',
      controller: 'mainController',
    })
    .otherwise({
      redirectTo: '/'
    })

}])
angular.bootstrap(document, [app.name])
