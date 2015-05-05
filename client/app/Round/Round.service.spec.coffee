'use strict'

describe 'Service: Round', ->

  # load the service's module
  beforeEach module 'beerApp'

  # instantiate service
  Round = undefined
  beforeEach inject (_Round_) ->
    Round = _Round_

  it 'should do something', ->
    expect(!!Round).toBe true