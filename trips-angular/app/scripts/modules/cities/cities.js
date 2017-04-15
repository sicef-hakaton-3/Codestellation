'use strict';

angular.module('tripzyApp.cities', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('cities', {
        url: '/cities/{id}',
        controller: 'citiesController',
        templateUrl: './scripts/modules/cities/views/cities.html'
      });

  });
