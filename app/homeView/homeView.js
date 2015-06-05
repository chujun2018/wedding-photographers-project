'use strict';

angular.module('myApp.homeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homeView', {
    templateUrl: 'homeView/homeView.html',
    controller: 'homeViewCtrl'
  });
}])

.controller('homeViewCtrl', ['$rootScope','$scope',function($rootScope,$scope) {
    $rootScope.searchLocation = 'Select Location';
       $scope.photos=[
       {'src':'images/isle_of_wight/1.jpg'},
       {'src':'images/isle_of_wight/2.jpg'},
       {'src':'images/isle_of_wight/3.jpg'},
       {'src':'images/amenda/1.jpg'},
       {'src':'images/amenda/2.jpg'},
       {'src':'images/amenda/3.jpg'},
       {'src':'images/xiaohe/1.jpg'},
       {'src':'images/xiaohe/2.jpg'},
       {'src':'images/xiaohe/3.jpg'}
       ];

}]);