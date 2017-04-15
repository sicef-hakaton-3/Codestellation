'use strict';

/**
 * @ngdoc function
 * @name tripzyApp.controller:loginController
 * @description
 * # MainCtrl
 * Controller of the tripzyApp
 */
angular.module('tripzyApp')
  .service('groupService', function (tripzyConfig, $q, $http, localStorageService) {
    /*localStorageService.get('name')*/

    var token = localStorageService.get('token');

    function loadToken() {
      token = localStorageService.get('token');
    }

    function _addGroup(group) {
      group.token = token;
      return $http.post(tripzyConfig.BASE_URL + 'api/groups', group);
    }

    function _getGroups() {
      return $http.get(tripzyConfig.BASE_URL + 'api/groups?token=' + token);
    }

    function _getGroup(id) {
      return $http.get(tripzyConfig.BASE_URL + 'api/groups/' + id + '?token=' + token);
    }

    function _inviteToGroup(groupId, user) {
      return $http.post(tripzyConfig.BASE_URL + 'api/groups/' + groupId + '/invite?token=' + token, user);
    }

    function _getCities(groupId) {
      return $http.get(tripzyConfig.BASE_URL + 'api/groups/' + groupId + '/places/suggestion?token=' + token);
    }

    function vote(voteFor, place, group) {
      return $http.post(tripzyConfig.BASE_URL + 'api/groups/' + group + '/vote?token=' + token, {
        vote: voteFor,
        placeId: place
      })
    }

    function _getVotes(groupId) {
      return $http.get(tripzyConfig.BASE_URL + 'api/groups/' + groupId + '/votes?token=' + token);
    }

    function logout() {
      token = null;
    }

    this.addGroup = _addGroup;
    this.getGroups = _getGroups;
    this.inviteToGroup = _inviteToGroup;
    this.getGroup = _getGroup;
    this.getCities = _getCities;
    this.vote = vote;
    this.getVotes = _getVotes;
    this.logout = logout;
    this.loadToken = loadToken
  });
