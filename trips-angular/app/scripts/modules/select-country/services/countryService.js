'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.country')
  .service('countryService', function (tripzyConfig, $q, $http, localStorageService) {
    /*localStorageService.get('name')*/

    var token = localStorageService.get('token');

    function _getCountries(query) {
      var url = tripzyConfig.BASE_URL + 'api/countries?token=' + token;
      if(query) {
        url += '&q=' + query;
      }
      return $http.get(url);
    }

    function logout() {
      token = null;
    }

    function loadToken() {
      token = localStorageService.get('token');
    }

    this.getCountries = _getCountries;
    this.logout = logout;
    this.loadToken = loadToken;

  });
