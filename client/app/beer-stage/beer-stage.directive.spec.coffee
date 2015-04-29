'use strict'

describe 'Directive: beerStage', ->

  # load the directive's module and view
  beforeEach module 'beerApp'
  beforeEach module 'app/beer-stage/beer-stage.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<beer-stage></beer-stage>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the beerStage directive'

