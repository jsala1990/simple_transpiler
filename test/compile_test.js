var assert = require('assert'),
    parser = require('../lib/parser').parser;

describe('Compilation to CSS', function() {
  it('compiles empty rules', function() {
    var code = 'h1 {  }\n' +
               'p {  }'
    assert.equal(parser.parse(code).toCSS(), code)
  });
})

describe('compiles properties', function() {
  var code = 'h1 { font-size: 10px; padding: 10px 20px; }';
  assert.equal(parser.parse(code).toCSS(), code);
})
