/* 

INPUTS AND OUTPUTS

i: String
o: String

EXPLICIT REQUIREMENTS  
- input is a string to represent person's name
- output is a string to greet the user
- if input contains exclamation mark, output is all caps

IMPLICIT REQUIREMENTS
- require readlineSync module

CLARIFYING QUESTIONS  

MENTAL MODEL
write an if statement to greet the user's first name in sentence case unless the user inputs an exclamation mark adjoining their name

EXAMPLES/TEST CASES

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

DATA STRUCTURE/ALGORITHM

// require readlineSync module
// write an if statement to check for input cases
  // if input does not include exclamation mark
    // log greeting in sentence case
  // otherwise
    // log greeting in upper case

*/

const inquire = require(`readline-sync`);
let getName = inquire.question(`What is your name?\n`);
let exclamationMark = '!';

if (getName) {
  console.log(`Hello ${getName}`);
} else if (getName.includes(exclamationMark)) {
  console.log('true');
  // console.log(`HELLO ${getName.toUpperCase()}. WHY ARE WE SCREAMING?`);
}
