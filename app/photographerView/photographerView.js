'use strict';

angular.module('myApp.photographerView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photographerView', {
    templateUrl: 'photographerView/photographerView.html',
    controller: 'photographerViewCtrl'
  });
}])

.controller('photographerViewCtrl', [function() {


}]);