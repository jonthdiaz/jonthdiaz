import angular from 'angular'
// import initjs from './layout/init'
import controllers from './layout/controllers'
//

let app = angular.module('main', [
  controllers.name,
])
angular.bootstrap(document, [app.name])
