// import angular from 'angular'
// import ngRoute from 'angular-route'
// import controllers from '../es6/home/controllers'
// import dom from '../es6/home/dom'

import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#app',
  render: function (createElement) {
     return createElement(App)
   },

})



// let app = angular.module('home', [
//   'ngRoute',
//   controllers.name
// ])
// .config(['$routeProvider', '$interpolateProvider', '$httpProvider',
// ($routeProvider, $interpolateProvider, $httpProvider)=>{
//   $routeProvider
//     .when('/', {
//       templateUrl: '/views/home/main.html',
//       controller: 'mainController',
//     })
//     .otherwise({
//       redirectTo: '/'
//     })
//
// }])
// angular.bootstrap(document, [app.name])
