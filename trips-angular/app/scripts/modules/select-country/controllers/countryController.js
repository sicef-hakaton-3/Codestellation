'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:countryController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp.country')
  .controller('countryController', function ($scope, $rootScope, tripzyConfig, groupService, countryService, $state, notifyService, localStorageService) {
    $scope.countries = [];
    $rootScope.loading = true;

    $scope.getCountries = function (query) {
      countryService.getCountries(query).then(function (res) {
        $scope.countries = res.data;
        $rootScope.loading = false;
      }, function (err) {
        console.log(err,'err');
        $rootScope.loading = false;
      });
    };

    $scope.getCountries('');

    $scope.newGroup = function (country) {
      var group = {
        name: '',
        country: country.name
      };
      $rootScope.loading = true;
      groupService.addGroup(group).then(function (res) {
        var groupId = res.data._id;
        $rootScope.loading = false;
        $state.go('group',{id: groupId});
      }, function(err) {
        console.log(err);
        $rootScope.loading = false;
      });
    };


  });
