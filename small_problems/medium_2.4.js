/*

Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. 

*/

// fridayThe13ths(1986); // 1
// fridayThe13ths(2015); // 3
// fridayThe13ths(2017); // 2

/*
Understanding the [P]roblem
===========================
Input: number

Output: number

Rules:
- assume the year is greater than 1752
- return the number of Friday the 13ths in that year

Questions:
- how many days in each month?
- what day does the first of each month start?

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
Iterate over all the months of the given year.
For each month, get the day that falls on the 13th.
Count the 13ths that fall on a Friday.
Return the count.

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

*/

// LS solution

// function fridayThe13ths(year) {
//   let thirteenths = [];
//   for (let month = 0; month < 12; month += 1) {
//     thirteenths.push(new Date(year, month, 13));
//   }
//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? count + 1 : count;
//   }, 0);
// }

// using filter

// function fridayThe13ths(year) {
//   let thirteenths = [];
//   for (let month = 0; month < 12; month += 1) {
//     thirteenths.push(new Date(year, month, 13));
//   }
//   let fridaysOnly = thirteenths.filter((day) => {
//     return day.getDay() === 5;
//   });

//   return fridaysOnly.length;
// }

// student solution

const MONTH_IN_YEAR = 12;
const FRIDAY = 5;

const fridayThe13ths = (year) => {
  let curDate = new Date(year, 0);
  console.log(`curDate: `, curDate);
  let result = 0;

  let curMonth = 0;
  while (curMonth < MONTH_IN_YEAR) {
    curDate.setDate(13);
    console.log(`curDate: `, curDate);

    if (curDate.getDay() === FRIDAY) result += 1;

    curDate.setMonth(++curMonth);
  }

  return result;
};

console.log(fridayThe13ths(1986)); // 1
