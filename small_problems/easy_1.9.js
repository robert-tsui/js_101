/* 

INPUTS AND OUTPUTS

i: Number
o: Boolean 

EXPLICIT REQUIREMENTS  
- prior to 1752, a leap year is any year that's divisible by 4
- after 1752, a leap year is any year divisible by 4 (and not divisible by 100)
- after 1752, a leap year is any year divisible by 4, 100, 400
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
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

DATA STRUCTURE/ALGORITHM

// write an if statement to check if the input year is before or after 1752
  // if before 1752 check if year is divisible by 4
    // return true
  // if after 1752 check if year is divisible by 400 or divisible by 4 and not divisible by 100
    // return true
*/

function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    }
    return false;
  } else if (year >= 1752) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
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
console.log(isLeapYear(2));
console.log(isLeapYear(3));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(1752));
