var assert = require('assert'),
    parser = require('../lib/parser').parser,
    nodes = require('../lib/nodes')

describe('Parser', function() {
  it('should parse empty rules', function() {
    assert.deepEqual(parser.parse('h1 {}'),
      new nodes.Rule('h1', [])
    );
  });

  it('should parse a rule with one property', function() {
    assert.deepEqual(parser.parse("h1 { color: redValue }"),
      new nodes.Rule('h1', [new nodes.Property('color', 'redValue')]));
  });

  it('should parse a rule with two properties', function() {
    assert.deepEqual(parser.parse("h1 { color: redValue, size: 100px }"),
      new nodes.Rule('h1',
        [new nodes.Property('color', 'redValue'), new nodes.Property('size', '100px')]));
  });
})
