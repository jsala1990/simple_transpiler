
%{
  var nodes = require('./nodes');
%}

%%

rule:
    IDENTIFIER                    { return new nodes.Rule($1, []) }
;

value:
    IDENTIFIER
;
