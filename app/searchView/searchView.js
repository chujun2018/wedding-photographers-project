'use strict';

angular.module('myApp.searchView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchView', {
    templateUrl: 'searchView/searchView.html',
    controller: 'searchViewCtrl'
  });
}])

.controller('searchViewCtrl', [function() {


}]);