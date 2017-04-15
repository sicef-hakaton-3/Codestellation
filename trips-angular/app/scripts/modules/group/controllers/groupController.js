'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.group')
  .controller('groupController', function ($scope, tripzyConfig, groupService, $state, $stateParams, notifyService) {
    $scope.id = $stateParams.id;
    $scope.group = {};
    $scope.person = {};

    groupService.getGroup($scope.id).then(function(res) {
      console.log(res);
      $scope.group = res.data;
    }, function(err) {
      console.log(err)
    });

    $scope.addPersonToGroup = function (person) {
      var flag = true;
      for(var i = 0; i < $scope.group.members.length; i++) {
        if(person.username === $scope.group.members[i].username) {
          flag = false;
          break;
        }
      }

      if(flag) {
        groupService.inviteToGroup($scope.id, person).then(function (res) {
          $scope.group = res.data;
          notifyService.alert('Successfully added user to group!');
          $scope.person = {};
        }, function (err) {
          console.log(err);
          notifyService.alert('Could not add user to group!');
        });
      } else {
        notifyService.alert('Cannot add same user to group twice!');
      }

    };

  });
