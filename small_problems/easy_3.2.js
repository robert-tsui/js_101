/* 
Understanding the problem
===========================
I: String
O: String
Rules:
- string must be inside of box when logged to console
- output will always fit in your browser window
- empty box length is 3 pipes x 2 dashes
- string has a leading and ending whitespace character 
- string is preceded and followed with a newline character
- each dash represents one character

Questions:
- does the string have to be center aligned? yes

Examples and Test Cases
=========================

1) Use the test cases to confirm your understanding of the problem thus far
2) Taking a look at the test cases to see if there are implied (implicit) requirements, that weren't explicitly stated in the problem statement

logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
-- Intermission --

Do I have a mental model?

Mental model: WHAT you have to do in order to get from input to output

- print special characters separated by newline characters to represent a box. Take an optional input string and center it inside of the box.

Data Structure

================

- Asking yourself: Do I need an array or object in order to hold the values that I'm working with?

Algorithm

===========

The HOW you're going to get to input from output

- A series of steps written in plain english
- Has to be specific enough to know how you're going to get from A to B
- But general enough, where you're not naming specific methods
- Indicator that you're doing it right, is that your algorithm is language agnostic

// declare and initialize a variable `numOfSpaces` to an empty string
// declare and initialize a variable `numOfDashes` to an empty string
// write a `for` loop to iterate over input string
  // reassign `numOfSpaces` to `numOfSpaces` + " " on each iteration
  // reassign `numOfDashes` to `numOfDashes` + "-" on each iteration
// print to console the starting structure with the variable template literals for the login box 
*/

// function logInBox(str) {
//   let numOfSpaces = '';
//   let numOfDashes = '';
//   for (let i = 0; i < str.length; i++) {
//     numOfDashes += '-';
//     numOfSpaces += ' ';
//   }
//   console.log(
//     `+-${numOfDashes}-+\n| ${numOfSpaces} |\n| ${str} |\n| ${numOfSpaces} |\n+-${numOfDashes}-+`
//   );
// }

// LS

function logInBox(str) {
  let numOfSpaces = `|${' '.repeat(str.length + 2)}|`;
  let numOfDashes = `+` + '-'.repeat(str.length + 2) + `+`;

  console.log(numOfDashes);
  console.log(numOfSpaces);
  console.log(`| ${str} |`);
  console.log(numOfSpaces);
  console.log(numOfDashes);
}

logInBox('');
logInBox('Hello world.');
