function Rule(selector, properties) {
  console.log(selector)
  this.selector = selector;
  this.properties = properties;
}
exports.Rule = Rule

function Property(name, value) {
  this.name = name;
  this.value = value;
}
exports.Property = Property
