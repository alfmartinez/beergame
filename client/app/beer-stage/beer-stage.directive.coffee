'use strict'

angular.module 'beerApp'
.directive 'beerStage', ->
  templateUrl: 'app/beer-stage/beer-stage.html'
  restrict: 'E'
  scope: {
    state:'='
  }
  link: (scope, element, attrs) ->
