/* 

INPUTS AND OUTPUTS

i: Number
o: Boolean 

EXPLICIT REQUIREMENTS  
- a leap year is any year divisible by 4 (and not divisible by 100)
- a leap year is any year divisible by 4, 100, 400
- any year greater than 0 applies to these rules
- return true if leap year, false if not

IMPLICIT REQUIREMENTS
- number is an integer representing a year

MENTAL MODEL
write a function that takes a year as an input and returns true if it's a leap year and false if it's not

EXAMPLES/TEST CASES

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

DATA STRUCTURE/ALGORITHM
// write an if statement. is remainder of dividing input by 4, 100, 400 equal to 0?
  // if true, return true
// otherwise, is remainder of dividing input by 4 equal to 0 AND remainder of dividing input by 100 not equal to 0?
  // if true, return true
// otherwise, return false



*/

// solution #1

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

// solution #2

function isLeapYear(year) {
  if (year % 400) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// solution #3

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(2022));
