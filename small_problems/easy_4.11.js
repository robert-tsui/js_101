/* 
Understanding the problem

===========================
I: Number
O: String
Rules: 
- integers are non-negative
- may not use standard conversion functions (String(), Number.prototype.toString, '' + number)
- converts integer to string representation of that integer

Examples and Test Cases

=========================

1) Use the test cases to confirm your understanding of the problem thus far
2) Taking a look at the test cases to see if there are implied (implicit) requirements, that weren't explicitly stated in the problem statement

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"


-- Intermission --

Do I have a mental model?

Mental model: WHAT you have to do in order to get from input to output
// use an object to hold integers as keys
// and their corresponding string representations as values. 
// hold the numbers in an array and map them to their string represented equivalents
// reduce the array elements and return the result

Data Structure

================

- an object to hold the numbers to compare the positions to the input numbers
- an array to hold the input numbers to manipulate 

Algorithm

===========

// Failed algorithm (couldn't convert number to array for manipulation without converting to string first)

The HOW you're going to get to input from output

// declare a variable DIGITS and assign to an object with the base ten numerals as keys and their string representations as values
// declare a variable numArr and assign to an empty array to hold the input integer
// declare a variable str and assign to an empty string to hold the string result
// map each number from input array to string in object
// split numbers in array into new empty array
// concatenate each element from new array to empty string
// return str

// second attempt

// declare a variable DIGITS as a lookup table and assign to an array with the base ten numerals as string values
// declare a variable numArr and assign to an empty array to hold the input integer
// declare a variable str and assign to an empty string to hold the string result
// split the number into the empty array
// map each number from array to indexed string in lookup table
// concatenate each element from new array to empty string
// return str

// LS solution recall
// declare a variable DIGITS to be used as a lookup table and assign to an array of base 10 numerals represented as strings
// create a loop to separate individual digits from the input integer
// declare a variable remainder and assign to the evaluated result of getting the remainder from dividing integer by 10
// assign number to the evaluated result of dividing integer by 10
// declare a variable result and use the remainder to assign to the corresponding index in the lookup table
// set a condition that the integer is greater than 0
// return result
*/

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"

// function integerToString(num) {
//   const DIGITS = {
//     0: '0',
//     1: '1',
//     2: '2',
//     3: '3',
//     4: '4',
//     5: '5',
//     6: '6',
//     7: '7',
//     8: '8',
//     9: '9',
//   };
//   let numArr = [];
//   let str = '';
//   arr.map(function (el, idx) {
//     numArr.push(DIGITS[el]);
//   });
//   for (let i = 0; i < numArr.length; i++) {
//     console.log(`str: ${str}`);
//     str += numArr[i];
//   }
//   console.log(typeof str);
//   return str;
// }

// console.log(integerToString(4321)); // "4321"
// integerToString(0); // "0"
// integerToString(5000); // "5000"
// integerToString(1234567890); // "1234567890"
