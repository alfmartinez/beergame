'use strict'

angular.module 'beerApp'
.factory 'Round', ($resource) ->
  $resource '/api/rounds/:factory/:last',
    factory: '@factory'
  ,
    placeOrder:
      method: 'PUT'
    get:
      method: 'GET'
      isArray: true
    getLast:
      method: 'GET'
      params:
        last: "last"
