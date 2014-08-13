// Jison parser grammar

%{
  var nodes = require('./nodes');
%}

%%

rule:
  selector '{' properties '}'       { return new nodes.Rule($1, $3)}
;

selector:
  IDENTIFIER
| SELECTOR
;

properties:
  /* empty */                        { $$ = [] }
| property                           { $$ = [ $1 ] }
| properties ';' property            { $$ = $1.concat($3) }
;

property:
  IDENTIFIER ':' value           { $$ = new nodes.Property($1, $3) }
;

value:
  IDENTIFIER
| DIMENSION
| COLOR
;
