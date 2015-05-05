'use strict'

angular.module 'beerApp'
.directive 'beerRound', ->
  templateUrl: 'app/beer-round/beer-round.html'
  restrict: 'EA'
  scope:
    state: '='
    editable: '='
  link: (scope, element, attrs) ->
    
