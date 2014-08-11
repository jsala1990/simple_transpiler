// Jison parser grammar

%{
  var nodes = require('./nodes');
%}

%%

rule:
  IDENTIFIER '{' properties '}'       { return new nodes.Rule($1, $3)}
;

properties:
  /* empty */                        { $$ = [] }
| property                           { $$ = [ $1 ] }
| properties ',' property            { $$ = $1.concat($3) }
;

property:
  IDENTIFIER ':' value           { $$ = new nodes.Property($1, $3) }
;

value:
  IDENTIFIER
| DIMENSION
;
