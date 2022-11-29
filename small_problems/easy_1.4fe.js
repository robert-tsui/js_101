/* 

INPUTS AND OUTPUTS

i: Number (in feet or meters)
o: Number (in square meters and square feet)

EXPLICIT REQUIREMENTS  

input number (length)
input number (width)
output number (area of input numbers) must be logged to the console
1 square meter == 10.7639 square feet
1 square feet == 0.092903 square meters
input validation required (ask the user for the input type in meters or feet)
use the readlineSync.prompt method to collect user input.

IMPLICIT REQUIREMENTS

input numbers can be any number

CLARIFYING QUESTIONS

does the output need to be rounded? yes, to the nearest hundredth

MENTAL MODEL

compute the area of the user's inputs of length and width and print the calculation to the console in both square meters and square feet

DATA STRUCTURE/ALGORITHM
  
1. Require the readline sync module
2. Ask the user to choose a metric system
3. Write an if statement to invoke the appropriate function
4. Collect the user's input for length and width and store them as converted integers `length` and `width`
5. Calculate the area from the user's inputs and store it as `output`
6. Convert `output` to `sq feet`
7. Print `output` and `sq feet` to the console, rounded to nearest 2 decimals

*/

const readlineSync = require(`readline-sync`);
const SQ_FEET_TO_SQMETERS = 10.7369;
const SQMETERS_TO_SQFEET = 0.092903;
let chooseMetric = readlineSync.question(
  `Do you want to measure your room in feet or meters? 1)feet 2)meters\n`
);

if (chooseMetric === `1`) {
  findAreaInSqFeet();
} else {
  findAreaInMeters();
}

function findAreaInMeters() {
  let length = readlineSync.question(
    `Enter the length of the room in meters: `
  );
  length = parseInt(length, 10);
  let width = readlineSync.question(`Enter the width of the room in meters: `);
  width = parseInt(width, 10);
  let output = length * width;
  let areaInFeet = output * SQMETERS_TO_SQFEET;
  console.log(
    `The area of the room is ${output.toFixed(
      2
    )} square meters (${areaInFeet.toFixed(2)} square feet).`
  );
}

function findAreaInSqFeet() {
  let length = readlineSync.question(`Enter the length of the room in feet: `);
  length = parseInt(length, 10);
  let width = readlineSync.question(`Enter the width of the room in feet: `);
  width = parseInt(width, 10);
  let output = length * width;
  let areaInMeters = output * SQ_FEET_TO_SQMETERS;
  console.log(
    `The area of the room is ${output.toFixed(
      2
    )} square feet (${areaInMeters.toFixed(2)} square meters).`
  );
}
