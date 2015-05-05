'use strict'

describe 'Directive: beerRound', ->

  # load the directive's module and view
  beforeEach module 'beerApp'
  beforeEach module 'app/beer-round/beer-round.html'
  element = undefined
  scope = undefined
  beforeEach inject ($rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<beer-round></beer-round>'
    element = $compile(element) scope
    scope.$apply()
    expect(element.text()).toBe 'this is the beerRound directive'

