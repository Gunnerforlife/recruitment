'use strict';

/**
 * @ngdoc function
 * @name iptrackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iptrackApp
 */
angular.module('iptrackApp')
  .controller('MainCtrl', function ($scope, $interval, $http, $firebaseArray) {

    var ref = firebase.database().ref().child("addresses");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    $scope.addrs = $firebaseArray(ref);

    console.log('address',$scope.addrs);

    var stayOnline = function() {
      $http({
          method: 'GET',
          url: 'http://35.161.143.68:3000/track'
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          alert('there is some issue with the server');
        });
    }

    $interval(stayOnline, 10000);


  });
