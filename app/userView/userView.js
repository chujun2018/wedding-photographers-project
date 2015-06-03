'use strict';

angular.module('myApp.userView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userView', {
    templateUrl: 'userView/userView.html',
    controller: 'userViewCtrl'
  });
}])

.controller('userViewCtrl', ['$scope','$location',function($scope,$location) {
  $scope.selectedPhotographers = function(){
          $location.path('photographerView');
     }

}]);