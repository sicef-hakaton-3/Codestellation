'use strict';

angular.module('tripzyApp.grouplist', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('grouplist', {
        url: '/grouplist',
        controller: 'grouplistController',
        templateUrl: './scripts/modules/grouplist/views/grouplist.html'
      });

  });
