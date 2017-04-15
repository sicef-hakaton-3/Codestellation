'use strict';

angular.module('tripzyApp.country', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('country', {
        url: '/country?{q}',
        controller: 'countryController',
        templateUrl: './scripts/modules/select-country/views/select-country.html'
      });

  });
