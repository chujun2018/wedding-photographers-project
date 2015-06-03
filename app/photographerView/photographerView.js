'use strict';

angular.module('myApp.photographerView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photographerView', {
    templateUrl: 'photographerView/photographerView.html',
    controller: 'photographerViewCtrl'
  });
}])

.controller('photographerViewCtrl', ['$rootScope','$scope',function($rootScope,$scope) {
  $rootScope.photographers = [
                               {'firstName':'John Doe', 'description':'','photos':''},
                               {'firstName':'Anna Smith', 'description':'Smith', 'photos':''},
                               {'firstName':'Peter Jones', 'description':'Jones', 'photos':''}
                             ];
  $scope.takeBooking = function(){
    $rootScope.bookings.push($rootScope.selectedBooking);
  }

}]);