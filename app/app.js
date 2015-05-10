'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.homeView',
  'myApp.photographerView',
  'ui.bootstrap.datetimepicker'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homeView'});
}]);
