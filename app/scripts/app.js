'use strict';

/**
 * @ngdoc overview
 * @name iptrackApp
 * @description
 * # iptrackApp
 *
 * Main module of the application.
 */
angular
  .module('iptrackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

      var config = {
        apiKey: "AIzaSyCdVUfB7z5pvVOngvf_dD25O7VhdohgYM4",
        authDomain: "auth-react-6f095.firebaseapp.com",
        databaseURL: "https://auth-react-6f095.firebaseio.com",
        storageBucket: "auth-react-6f095.appspot.com",
        messagingSenderId: "961579648331"
      };
      firebase.initializeApp(config);

  });
