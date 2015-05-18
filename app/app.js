'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.homeView',
  'myApp.photographerView',
  'myApp.signupView',
  'myApp.searchView',
  'myApp.userView',
  'ui.bootstrap.datetimepicker'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homeView'});
}]).controller('mainCtrl', ['$rootScope', '$scope',function($rootScope, $scope) {
   $rootScope.closeModel = function(){
   $('#loginModel').modal('hide');
}}]);
