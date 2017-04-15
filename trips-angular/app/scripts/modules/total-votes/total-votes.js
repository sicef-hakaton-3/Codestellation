'use strict';

angular.module('tripzyApp.total-votes', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('total-votes', {
        url: '/total-votes/:id',
        controller: 'totalVotesController',
        templateUrl: './scripts/modules/total-votes/views/total-votes.html'
      });

  });
