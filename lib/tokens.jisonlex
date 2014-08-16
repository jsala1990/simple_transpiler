// MACROS

DIGIT                 [0-9]
NUMBER                {DIGIT}+(\.{DIGIT}+)?   // matches: 10 3.14
NAME                  [a-zA-Z][\w\-]*         // matches: body background-color classNames
SELECTOR              (\.|\#|\:\:|\:){NAME}   // matches: .class, #id, :hover, ::before

%%

// RULES

\s+                   //ignore all white spaces, bc CSS

// Numbers
{NUMBER}(px|em|\%)          return 'DIMENSION' // 10px 4em
{NUMBER}              return 'NUMBER'
\#[0-9A-Fa-f]{3,6}    return 'COLOR'

// Selectors

{NAME}{SELECTOR}      return 'SELECTOR'
{NAME}                return 'IDENTIFIER' // 10px, 1em, 50%
{SELECTOR}            return 'SELECTOR'

.                     return yytext // Everything else

<<EOF>>               return 'EOF'
