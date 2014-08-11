// MACROS

DIGIT                 [0-9]
NUMBER                {DIGIT}+(\.{DIGIT}+)?   // matches: 10 3.14
NAME                  [a-zA-Z][\w\-]*         // matches: body background-color classNames
SELECTOR              (\.|\#|\:\:|\:){NAME}   // matches: .class, #id, :hover, ::before

%%

// RULES

\s+                   //ignore all white spaces, bc CSS

// Numbers
{NUMBER}(px)          return 'DIMENSION' // 10px
{NUMBER}              return 'NUMBER'

// Selectors
{NAME}                return 'IDENTIFIER' // 10px, 1em, 50%

.                     return yytext // Everything else

<<EOF>>               return 'EOF'
