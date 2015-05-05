'use strict'

angular.module 'beerApp'
.controller 'MainCtrl', ($scope, Round) ->
  $scope.state =
    name: 'MyFactory'
    history: []
    current: {}
  $scope.state.history = Round.get factory: 1
  $scope.state.current = Round.getLast factory: 1

  $scope.order = ->
    Round.placeOrder factory: 1 , $scope.state.current, (newRound)->      
      $scope.state.history.push $scope.state.current
      $scope.state.current = newRound
