/**
 * Created by pedja on 6.11.16..
 */

angular.module('tripzyApp.total-votes')
  .controller('totalVotesController', function ($scope, tripzyConfig, groupService, $state, $stateParams) {
    var group = $stateParams.id;

    groupService.getGroup(group).then(function(res) {
      $scope.group = res.data;
    }, function(err) {
      console.log(err);
    });


    groupService.getVotes(group).then(function(votes) {
      console.log(votes)
      var grouppedVotes = _.groupBy(votes.data, function(vote) {
        return vote.place ? vote.place._id : 'old';
      })
      $scope.grouppedVotes = grouppedVotes;
    })
  });
