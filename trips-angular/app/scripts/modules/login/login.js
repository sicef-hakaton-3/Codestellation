'use strict';

angular.module('tripzyApp.login', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('login', {
        url: '/login',
        controller: 'loginController',
        templateUrl: './scripts/modules/login/views/login.html'
      });

  });
