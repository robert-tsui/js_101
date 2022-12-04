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

// solution #1 

// require readlineSync module
// ask for user's name
// write an if statement to check for input cases
  // if input does not include exclamation mark using String.prototype.includes
    // replace the character with an empty string using replace method
    // log shout greet
  // otherwise
    // log normal greet

// solution #2

// require readlineSync module
// ask for user's name
// write an if statement to check for input cases
  // if last character of input is exclamation mark
    // remove the character using slice method
    // log the shouting greet
  // otherwise, log the normal greet
*/

// solution #1

// const inquire = require(`readline-sync`);
// let getName = inquire.question(`What is your name?\n`);
// let exclamationMark = '!';
// let modifiedName = getName.replace('!', '');

// if (getName.includes(exclamationMark)) {
//   console.log(`HELLO ${modifiedName.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${getName}`);
// }

// solution #2

// const readlineSync = require(`readline-sync`);
// let name = readlineSync.question(`What is your name?\n`);

// if (name[name.length - 1] === `!`) {
//   name = name.slice(0, -1);
//   console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}`);
// }
