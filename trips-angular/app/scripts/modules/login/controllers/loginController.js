'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.login')
  .controller('loginController', function ($scope, tripzyConfig, loginService, groupService, countryService, $state, notifyService, localStorageService) {
    $scope.user = {};

    $scope.login = function () {

      loginService.login($scope.user).then(function (res) {
        localStorageService.set('token', res.data.token);
        countryService.loadToken();
        groupService.loadToken();

        $state.go('grouplist');
      }, function (err) {
        console.log('err', err);
      });
    };

    $scope.register = function () {
      if(!$scope.user.username || !$scope.user.password) {
        notifyService.alert('Both username and password are required fields.');
      } else {
        loginService.register($scope.user).then(function (res) {
          notifyService.alert('You have successfully registered. You can log in now.');
        }, function (err) {
          notifyService.alert('Something went wrong. Please try again later.');
        });
      }
    };
  });
