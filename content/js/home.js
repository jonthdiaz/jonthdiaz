import angular from 'angular'
// import initjs from './layout/init'
import controllers from '../es6/home/controllers'
//

let app = angular.module('home', [
  controllers.name,
])
angular.bootstrap(document, [app.name])
