'use strict';

angular.module('myApp.searchView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/searchView', {
    templateUrl: 'searchView/searchView.html',
    controller: 'searchViewCtrl'
  });
}])

.controller('searchViewCtrl', ['$rootScope','$scope', '$location', function($rootScope, $scope, $location) {
 $rootScope.bookings = [{'firstName':'Anna Smith', 'location':'UK','description':'Smith', 'photo':'http://www.theappvillage.com/wp-content/uploads/2013/04/David_McGowan_portrait_square.png', 'art':'isle_of_wight'}];
  $rootScope.photographers = [
                               {'firstName':'John Doe', 'location':'UK','description':'','photo':'http://fc07.deviantart.net/fs70/f/2010/126/4/8/square_portrait_2_by_newodin.jpg', 'art':'amenda'},
                               {'firstName':'Anna Smith', 'location':'UK','description':'Smith', 'photo':'http://www.theappvillage.com/wp-content/uploads/2013/04/David_McGowan_portrait_square.png', 'art':'isle_of_wight'},
                               {'firstName':'Peter Jones', 'location':'UK','description':'Jones', 'photo':'http://static.tumblr.com/930104885128abd6ad11c6527ae51a37/xg89oyf/w2Cmj2gt9/tumblr_static_pw_self_portrait_square.jpg', 'art':'xiaohe'},
                               {'firstName':'John Doe', 'location':'France','description':'','photo':'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7WzYeAOJZbBYDd483IJlqSeJJaOXDgkmAOk7Gjw6c05bU2RnTpg', 'art':'amenda'},
                               {'firstName':'Anna Smith', 'location':'France','description':'Smith', 'photo':'https://groupmuse.s3.amazonaws.com/uploads/user/avatar/14101/60d777ba-40cd-4e4e-b3b4-1255184f4417/andreas-portrait_square.jpg', 'art':'isle_of_wight'},
                               {'firstName':'Peter Jones', 'location':'France','description':'Jones', 'photo':'http://www.polimodamag.com/http://www.polimodamag.com/wp-content/uploads/2015/05/daniele-davitti-portrait-square.jpg', 'art':'xiaohe'},
                               {'firstName':'John Doe', 'location':'Italy','description':'','photo':'http://static1.squarespace.com/static/54279b1fe4b047c33e12b5cf/t/54ed98ede4b0f58a26d62367/1424857328206/Michael+Strintzos+square+portrait.jpg', 'art':'amenda'},
                               {'firstName':'Anna Smith', 'location':'Italy','description':'Smith', 'photo':'http://www.hufworldwide.com/managed/team/huf_craig_anderson_portrait_square_1.jpg.460x460_q100_crop.jpg', 'art':'isle_of_wight'},
                               {'firstName':'Peter Jones', 'location':'Italy','description':'Jones', 'photo':'http://cdn.c.photoshelter.com/img-get/I0000L6gemWxxECY/s/860/688/Square-JackDorsey-0577.jpg', 'art':'xiaohe'}
                             ];
   $scope.selectedPhotographers = function(index){
        $rootScope.selectedBooking = $rootScope.photographers[index];
//        $rootScope.bookings.push($rootScope.photographers[index]);
        $location.path('photographerView');
   }


}]);