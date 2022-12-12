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
// use an array object to hold array of base 10 numerals represented as strings
// check if input number has a leading sign and return the helper function

Data Structure

================

- an object to hold the numbers to compare the positions to the input numbers
- an array to hold the input numbers to manipulate 

Algorithm

===========

// LS solution recall

// declare a function signedIntegerToString
// check if input number is positive or negative
// if positive, return the '+` sign concatenated with invoking the helper function with string as argument 
// if positive, return the '-` sign concatenated with invoking the helper function with string multiplied by -1 as argument 
// if zero or -zero, return the the string as argument for helper function invocation

// declare a helper function integerToString
// return the helper function for each leading sign
// declare a variable DIGITS to be used as a lookup table and assign to an array of base 10 numerals represented as strings
// create a loop to separate individual digits from the input integer
// declare a variable remainder and assign to the evaluated result of getting the remainder from dividing integer by 10
// assign number to the evaluated result of dividing integer by 10
// declare a variable result and use the remainder to assign to the corresponding index in the lookup table
// set a condition that the integer is greater than 0
// return result
*/

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case 1:
      console.log('1');
      return '+' + integerToString(num);
    case -1:
      console.log('2');
      return `-` + integerToString(num * -1);
    case 0:
      console.log('3');
      return integerToString(num);
  }
}

function integerToString(num) {
  // console.log(`num: ${num}`);
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');
