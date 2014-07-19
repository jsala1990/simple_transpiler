// MACROS
DIGIT                 [0-9]
NUMBER                {DIGIT}+(\.{DIGIT}+)?   // matches: 10 3.14
NAME                  [a-zA-Z][\w\-]*         // matches: body background-color classNames
// SELECTOR              (\.|\#|\:\:|\:){NAME}   // matches: .class, #id, :hover, ::before

%%

// RULES

\s+                   //ignore all white spaces, bc CSS

{NAME}                return 'IDENTIFIER'

.                     return yytext

<<EOF>>               return 'EOF'
