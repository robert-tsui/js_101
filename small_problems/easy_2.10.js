/* 
I: String (of digits)
O: Integer

EXPLICIT REQUIREMENTS  
- string may have a leading + or - sign
- + returns a positive number
- - returns a negative number
- no sign returns a postive number
- assume string always contains valid number
- cannot use standard conversion methods 
  - parseInt()
  = Number()
- can use stringToInteger() function from 2.9
 
MENTAL MODEL
Convert a string into its substrings and then elements of integers in an array. Finally, use the base 10 number system to convert into an integer.

EXAMPLES/TEST CASES/EDGE CASES

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

DATA STRUCTURE/ALGORITHM
*/
// solution #1 (failed algorithm)

// declare a variable numArray and assign to evaluated result of converting string into array of substrings
// write an if statement to check if first index of array has a positive or negative character
// if positive
// remove first element
// invoke helper function stringToInteger

// if negative
// remove first element
// invoke helper function stringToInteger
// return number

// otherwise
// remove first element
// invoke helper function stringToInteger
// return number

// write a helper function stringToInteger
// declare a variable DIGITS and assign to an object with base 10 numbers as keys and their equivalents as values
// transform string elements into integers and reassign to array
// declare a variable number and assign to 0
// declare a variable power and assign to one less than length of array
// iterate over array and reassign number to evaluated result of multiplying each element by 10 to the power
// decrement power by 1
// return number
// let stringToSignedInteger = (str) => {
//   if (str[0] === '+') {
//     let positiveStr = str.slice(1);
//     console.log(`newStr: ${newStr}`);
//     stringToInteger(positiveStr);
//   } else if (str[0] === '-') {
//     let negativeStr = str.slice(1);
//     console.log(`newStr: ${newStr}`);
//     stringToInteger(negativeStr);
//   }
// };

// declare a variable DIGITS and assign to an object with base 10 numerals as mirrored keys and values
// declare a variable number and assign to 0
// declare a variable power and initialize it
// declare a variable str1 and assign to empty string
// declare a variable str2 and assign to empty string
// write an if statement to check if input string has a leading positive sign
// if yes, remove sign and convert to array and then reduce the resulting number
// write an if statement to check if input string has a leading negative sign
// if yes, remove sign and convert to array and then reduce the resulting number, adding a negative leading sign
// write an if statement to check if input string has no sign
// if yes, remove sign and convert to array and then reduce the resulting number
// return result

// solution #1

// let stringToSignedInteger = (str) => {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//   };
//   let number = 0;
//   let power;
//   let str1 = '';
//   let str2 = '';

//   if (str[0] === '+') {
//     str1 = str.slice(1);
//     console.log(`str1: ${str1}`);
//     let numArray = str1.split('').map(function (el) {
//       return DIGITS[el];
//     });
//     power = numArray.length - 1;
//     for (let i = 0; i < numArray.length; i++) {
//       number += numArray[i] * 10 ** power;
//       power -= 1;
//     }

//     return number;
//   } else if (str[0] === '-') {
//     str2 = str.slice(1);
//     console.log(`str2: ${str2}`);
//     let numArray = str2.split('').map(function (el) {
//       return DIGITS[el];
//     });
//     power = numArray.length - 1;
//     for (let i = 0; i < numArray.length; i++) {
//       number += numArray[i] * 10 ** power;
//       power -= 1;
//     }

//     return -number;
//   } else {
//     let numArray = str.split('').map(function (el) {
//       return DIGITS[el];
//     });
//     power = numArray.length - 1;
//     for (let i = 0; i < numArray.length; i++) {
//       number += numArray[i] * 10 ** power;
//       power -= 1;
//     }
//   }

//   return number;
// };

// console.log(stringToSignedInteger('4321') === 4321); // logs true
// console.log(stringToSignedInteger('-570') === -570); // logs true
// console.log(stringToSignedInteger('+100') === 100); // logs true

// solution #2

let stringToSignedInteger = (str) => {
  switch (str[0]) {
    case '+':
      return stringToInteger(str.slice(1, str.length));
    case '-':
      return -stringToInteger(str.slice(1, str.length));
    default:
      return stringToInteger(str);
  }
};

let stringToInteger = (str) => {
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
  let numArray = str.split('').map(function (el) {
    return DIGITS[el];
  });
  console.log(`numArray; ${numArray}`);
  let number = 0;
  let power = numArray.length - 1;
  for (let i = 0; i < numArray.length; i++) {
    number += numArray[i] * 10 ** power;
    console.log(`number: ${number}`);
    power -= 1;
  }

  return number;
};

console.log(stringToSignedInteger('4321') === 4321); // logs true
console.log(stringToSignedInteger('-570') === -570); // logs true
console.log(stringToSignedInteger('+100') === 100); // logs true
