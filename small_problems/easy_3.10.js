// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- return value is a string 
- return value starts with a number ends with 'st', 'nd', 'rd', or 'th'
- new centuries are denoted by years that end with 01
- input can be any integer

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

calculate the century number from the input number and append the appropriate suffix

1st => 0-100 // 1001-1100 // 2001-2100
2nd => 101-200 // 1101-1200 // 2101-2200
3rd => 201-300 // 1201-1300 ...
4th => 301-400 // 1301-1400 ... 
5th => 401-500 // 1401-1500 ... 
... 6th
... 7th
... 8th
... 9th
... 10th
- 1, 2, and 3 end in "st", "nd", and "rd"
- ranges all end in same 3 numbers

Math.ceil(input / 100) => century number

[D]ata Structure
================
- Do I need an array or an object for my solution? 
- no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize variable `result` to empty string
// divide input integer by 100 and round it up to nearest integer
// append to `result`
// write a `for` loop to iterate over input number
  // write a conditional statement to check if last character of input number is a `1`
    // if so, append `st` to `result`
  // else if last character is a `2`
    // append `nd` to `result`
  // else if last character is a `3`
    // append `rd` to `result`

// return `result`
*/

// function century(year) {
//   let result = Math.ceil(year / 100).toString();

//   if (result[result.length - 1] === `1` && result[result.length - 2] !== '1') {
//     result += `st`;
//   } else if (
//     result[result.length - 1] === '2' &&
//     result[result.length - 2] !== '1'
//   ) {
//     result += `nd`;
//   } else if (
//     result[result.length - 1] === '3' &&
//     result[result.length - 2] !== '1'
//   ) {
//     result += `rd`;
//   } else {
//     result += `th`;
//   }

//   return result;
// }

// ls attempt

function century(year) {
  // declare and initialize `centuryNumber`to the input divided by 100, adding 1 and rounding the result down
  let centuryNumber = Math.floor(year / 100 + 1);
  // write a conditional statement to check if input year is a multiple of 100
  if (year % 100 === 0) {
    // if so, `centuryNumber` is the current year divided by 100
    centuryNumber -= 1;
  }
  // return `centuryNumber` concatenated with `centurySuffix` function call
  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  // insert a guard clause to check if `centuryNumber` is 11, 12, or 13
  if (catchWithTh(centuryNumber % 100)) {
    return `th`;
  }
  // assign `lastDigit` to the last digit of `centuryNumber`
  let lastDigit = centuryNumber % 10;
  // check if the last digit is any one of 3 numbers, then return appropriate suffix
  // otherwise, return default suffix
  switch (lastDigit) {
    case 1:
      return `st`;
    case 2:
      return `nd`;
    case 3:
      return `rd`;
    default:
      return `th`;
  }
}

function catchWithTh(lastTwo) {
  // return boolean to append special suffix cases for 11, 12, 13
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
