// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- input is an integer
- output calculates the future year the user will retire in from the current year
- output calculates the difference between the user's retiring age and the user's current age
- output prints a string that interpolates two variables, one for the future year 
- and one for the difference in years from current year until retirement

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

-- Intermission --

30
70
70 - 30 = 40
2017 + 40 = 2057
40

[D]ata Structure
================
- Do I need an array or an object for my solution? No

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax

- prompt user for their current age
- prompt user for their retirement age
- use `Date` object to get current year
- calculate difference between current age and retirement age
- add difference to current year
- print messages to console

*/

let rlSync = require(`readline-sync`);
let currentAge = Number(rlSync.question(`What is your age?\n`));
let retirementAge = Number(
  rlSync.question(`At what age would you like to retire?\n`)
);
let today = new Date();
let currentYear = today.getFullYear();
let numOfYears = retirementAge - currentAge;
let retirementYear = numOfYears + currentYear;
console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${numOfYears} years of work to go!`);
