'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.grouplist')
  .controller('grouplistController', function ($scope, tripzyConfig, groupService, $state) {
    $scope.groups = [];

    groupService.getGroups().then(function(res) {
      $scope.groups = res.data;
    }, function(err) {
      console.log(err);
    });
  });
