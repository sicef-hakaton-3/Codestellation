'use strict';

angular.module('tripzyApp').directive('header', function ($state, localStorageService, groupService, countryService) {

  function linker (scope) {
    scope.logOut = function () {
      localStorageService.remove('token');
      $state.go('login');
      groupService.logout();
      countryService.logout();
    };
  }

  return {
    name: 'header',
    replace: true,
    restrict: 'E',
    templateUrl: './scripts/modules/shared/directives/header.html',
    link: linker
  };
});
