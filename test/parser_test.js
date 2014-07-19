var assert = require('assert'),
    parser = require('../lib/parser').parser,
    nodes = require('../lib/nodes')

describe('Parser', function() {
  it('should parse a rule with no properties', function() {
    var something = parser.parse("h1{}")
    console.log("0-0-0-0-0-0-0")
    console.log(something)
    assert.equal(something, new nodes.Rule('h1', []))
  })
})
