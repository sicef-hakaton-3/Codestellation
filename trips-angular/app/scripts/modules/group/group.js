'use strict';

angular.module('tripzyApp.group', ['ui.router'])

  .config(function($stateProvider) {

    $stateProvider.
      state('group', {
        url: '/group/{id}',
        controller: 'groupController',
        templateUrl: './scripts/modules/group/views/group.html'
      });

  });
