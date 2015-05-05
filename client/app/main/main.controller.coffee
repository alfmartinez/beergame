'use strict'

angular.module 'beerApp'
.controller 'MainCtrl', ($scope, $http, socket) ->
  $scope.state =
    name: 'MyFactory'
    history: [
      round: 1
      incoming: 5
      available: 20
      newOrder: 9
      toShip: 9
      delivery: 9
      backorder: 0
      inventory: 11
      yourOrder: 5
      cost: 5.5
    ,
      round: 2
      incoming: 5
      available: 16
      newOrder: 9
      toShip: 9
      delivery: 9
      backorder: 0
      inventory: 7
      yourOrder: 5
      cost: 9
    ,
      round: 3
      incoming: 5
      available: 12
      newOrder: 9
      toShip: 9
      delivery: 9
      backorder: 0
      inventory: 3
      yourOrder: 5
      cost: 10.5
    ,
      round: 4
      incoming: 5
      available: 8
      newOrder: 9
      toShip: 9
      delivery: 8
      backorder: 1
      inventory: 0
      yourOrder: 5
      cost: 11.5
    ,
    ]
    current:
      round: 5
      incoming: 5
      available: 5
      newOrder: 9
      toShip: 10
      delivery: 5
      backorder: 5
      inventory: 0
      yourOrder: 10
      cost: 16.5
