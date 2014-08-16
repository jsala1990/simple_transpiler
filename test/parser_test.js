var assert = require('assert'),
    parser = require('../lib/parser').parser,
    nodes = require('../lib/nodes')

describe('Parser', function() {
  it('should parse empty rules', function() {
    assert.deepEqual(parser.parse('h1 {}'),
      new nodes.StyleSheet([
        new nodes.Rule('h1', [])
      ])
    );
  });

  it('should multiple parse empty rules', function() {
    assert.deepEqual(parser.parse('h1 {}\n p {}'),
      new nodes.StyleSheet([
        new nodes.Rule('h1', []),
        new nodes.Rule('p', [])
      ])
    );
  });

  it('should parse class and .div stuff', function() {
    assert.deepEqual(parser.parse('something.class {}'),
      new nodes.StyleSheet([
        new nodes.Rule('something.class', [])
      ])
    );
  });

  it('should parse a rule with one property', function() {
    assert.deepEqual(parser.parse("h1 { color: redValue; }"),
      new nodes.StyleSheet([
        new nodes.Rule('h1', [new nodes.Property('color', ['redValue'])])
      ])
    )
  });

  it('should parse a rule with one property and multiple values', function() {
    assert.deepEqual(parser.parse("h1 { color: redValue; padding: 10px 20px; }"),
      new nodes.StyleSheet([
        new nodes.Rule('h1',
                     [new nodes.Property('color', ['redValue']),
                      new nodes.Property('padding', ['10px', '20px'])])
      ]))
  });

  it('should parse a rule with two properties', function() {
    assert.deepEqual(parser.parse("h1 { color: redValue; size: 100px }"),
      new nodes.StyleSheet([
        new nodes.Rule('h1',
          [new nodes.Property('color', ['redValue']), new nodes.Property('size', ['100px'])]
        )
      ])
     )
  });

  describe('values', function() {
    it('should parse colors correctly in properties', function() {
      assert.deepEqual(parser.parse('h1 { color: #f0f0f0 }'),
      wrapStyleSheet(
        [new nodes.Rule('h1', [new nodes.Property('color', ['#f0f0f0'])])]
      ))
    })

    it('should parse dimensions', function() {
      assert.deepEqual(parseValues('10px 1.2em 5.1%'), ['10px', '1.2em', '5.1%']
                      );
    })
  })


  //helpers
  function wrapStyleSheet(rules) {
    var styleSheet = new nodes.StyleSheet(rules);
    return styleSheet;
  }

  function parseRule(css) {
    return parser.parse(css).rules[0]
  }

  function parseDirective(css) {
    return parseRule('h1 { ' + css + ' }').properties[0]
  }

  function parseValues(values) {
    return parseDirective('property: ' + values).values
  }

//  describe('selector', function() {
//    it('parses h1 and #id', function() {
//      var actual = parser.parse('h1').rules[0]
//      assert.equal(actual, 'h1 {}');
//    });
//  });
})

