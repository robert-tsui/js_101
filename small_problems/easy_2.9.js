/* 

INPUTS AND OUTPUTS

i: String of numeric characters
o: Number as integer

EXPLICIT REQUIREMENTS  
- no methods allowed
- assume numeric characters
- assume no + or - signs

MENTAL MODEL
convert the string of numeric characters into an integer without using methods

EXAMPLES/TEST CASES
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

DATA STRUCTURE/ALGORITHM
// use a for loop to iterate over string
// return the characters
*/
// solution #1

function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let newArr = str.split('').map((el) => DIGITS[el]);
  let value = 0;
  newArr.forEach((el) => (value = value * 10 + el));
  return value;
}

// Solution #3
// function stringToInteger(str) {
//   return str * 1;
// }

// console.log(stringToInteger('4321'));
console.log(stringToInteger('4321') === 4321); // logs true
console.log(stringToInteger('570') === 570); // logs true
