'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.cities')
  .controller('citiesController', function ($scope, tripzyConfig, groupService, $state, $stateParams, $rootScope, $mdDialog) {
    $scope.groupId = $stateParams.id;
    $scope.city = {};
    $rootScope.loading = true;

    groupService.getCities($scope.groupId).then(function(res) {
      $scope.city = res.data;
      $rootScope.loading = false;
    }, function(err) {
      console.log(err);
      $rootScope.loading = false;
    });

    $scope.getImageUrl = getImageUrl;
    $scope.vote = vote;
    $scope.showMore = showMore;

    function getImageUrl() {

      if(!$scope.city.image) {
        return 'http://www.martyranodes.com/sites/default/files/images/kits/no_0.jpg';
      } else {
        return $scope.city.image;
      }
    }

    function vote(voteFor) {
      $rootScope.loading = true;
      try {
        var placeId = $scope.city._id;
        groupService.vote(voteFor, placeId, $scope.groupId).then(function() {
          groupService.getCities($scope.groupId).then(function(res) {
            $scope.city = res.data;
            $rootScope.loading = false;
          }, function(err) {
            console.log(err);
            $rootScope.loading = false;
          })
        });
      } catch(ex) {
        console.log(ex)
        $rootScope.loading = false;
      }
    }

    function showMore(ev, place) {
      $mdDialog.show(
        $mdDialog.show({
          clickOutsideToClose: true,
          parent: angular.element(document.body),
          targetEvent: ev,
        })
      );
    }
  });
