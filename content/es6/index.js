import angular from 'angular'
import controllers from './layout/controllers'
import initjs from './layout/init'
let app = angular.module('main', [
  controllers.name,
])
angular.bootstrap(document, [app.name]);
