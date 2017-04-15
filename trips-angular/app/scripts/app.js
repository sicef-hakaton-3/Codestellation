'use strict';

/**
 * @ngdoc overview
 * @name tripzyApp
 * @description
 * # tripzyApp
 *
 * Main module of the application.
 */
angular
  .module('tripzyApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'cgNotify',
    'gajus.swing',
    'LocalStorageModule',
    /*modules*/
    'tripzyApp.login',
    'tripzyApp.total-votes',
    'tripzyApp.grouplist',
    'tripzyApp.config',
    'tripzyApp.country',
    'tripzyApp.group',
    'tripzyApp.cities',

  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('tripzy');
    //$routeProvider
    //  .when('/', {
    //    templateUrl: 'views/main.html',
    //    //controller: 'MainCtrl',
    //    //controllerAs: 'main'
    //  })
    //  .otherwise({
    //    redirectTo: '/'
    //  });
  })
  .run(function($state) {
    $state.go('login');
  });
