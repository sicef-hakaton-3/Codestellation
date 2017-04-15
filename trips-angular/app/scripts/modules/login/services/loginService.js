'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.login')
  .service('loginService', function (tripzyConfig, $q, $http, localStorageService) {
    /*localStorageService.get('name')*/
    function _login(user) {
      return $http.post(tripzyConfig.BASE_URL + 'authenticate', user);
    }

    function _register(user) {
      return $http.post(tripzyConfig.BASE_URL + 'register', user);
    }

    this.login = _login;
    this.register = _register;

  });
