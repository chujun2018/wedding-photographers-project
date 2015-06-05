'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.homeView',
  'myApp.photographerView',
  'myApp.signupView',
  'myApp.searchView',
  'myApp.userView',
  'ui.bootstrap.datetimepicker',
  'wu.masonry',
  'akoenig.deckgrid'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homeView'});
}]).controller('mainCtrl', ['$rootScope', '$scope',function($rootScope, $scope) {
$rootScope.accountName='';
$rootScope.bookings = [{'firstName':'Anna Smith', 'location':'UK','description':'Smith', 'photo':'http://www.theappvillage.com/wp-content/uploads/2013/04/David_McGowan_portrait_square.png', 'art':'isle_of_wight'}];
   $rootScope.closeModel = function(){
   $('#loginModel').modal('hide');


}}]);
