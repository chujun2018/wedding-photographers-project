'use strict';

angular.module('myApp.signupView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signupView', {
    templateUrl: 'signupView/signupView.html',
    controller: 'signupViewCtrl'
  });
}])

.controller('signupViewCtrl', [function() {


}]);