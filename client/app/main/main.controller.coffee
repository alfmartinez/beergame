'use strict'

angular.module 'beerApp'
.controller 'MainCtrl', ($scope, $http, socket) ->
  $scope.state =
    name: 'MyFactory'
    history: []
    last:
      incoming: 5
      newOrder: 6
      delivery: 10
      backorder: 4
      inventory: 15
      yourOrder: 10
    current:
      incoming: 5
      newOrder: 6
      delivery: 10
      backorder: 4
      inventory: 15
      yourOrder: 10
