/* 

INPUTS AND OUTPUTS

i: Number (in meters)
o: Number (in square meters and square feet)

EXPLICIT REQUIREMENTS  

input number (length)
input number (width)
output number (area of input numbers) must be logged to the console
note: 1 square meter == 10.7639 square feet
input validation not required
use the readlineSync.prompt method to collect user input.

IMPLICIT REQUIREMENTS

input numbers can be any number

CLARIFYING QUESTIONS

does the output need to be rounded? to the nearest hundredth

MENTAL MODEL

compute the area of the user's inputs of length and width and print the calculation to the console in both square meters and square feet

DATA STRUCTURE/ALGORITHM
  
1. Require the readline sync module
2. Declare variables for length and width
3. Write a function to collect the user's input for length and width and store them as converted integers `length` and `width`
4. Write a function to calculate the area from the user's inputs and store it as `output`
5. Convert `output` to `sq feet`
3. Print `output` and `sq feet` to the console, rounded to nearest 2 decimals

*/

const readlineSync = require(`readline-sync`);
let userLength;
let userWidth;
let length;
let width;

function getUserInput() {
  userLength = readlineSync.question(
    `Enter the length of the room in meters: `
  );
  length = parseInt(userLength, 10);
  console.log(`length: `, length);
  userWidth = readlineSync.question(`Enter the width of the room in meters: `);
  width = parseInt(userWidth, 10);
  console.log(`width: `, width);
}

function getRoomArea(length, width) {
  let output = length * width;
  let sqFeet = output * 10.7639;
  console.log(
    `The area of the room is ${output.toFixed(
      2
    )} square meters (${sqFeet.toFixed(2)} square feet).`
  );
}

getUserInput();
getRoomArea(length, width);
