// Write a function that determines the mean (average) of the three scores passed to it,
// and returns the letter associated with that grade.
// Numerical score letter grade list:
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100.
// There is no need to check for negative values or values greater than 100.

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- inputs are between 0 and 100
- output is a letter grade
- 3 inputs are to be averaged to find the mean score
- letter grades `A-D` correspond to a range of 10 values each 
- letter grade `F` corresponds to a range of 60 values

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- a reference array of scores and grades is used to determine the mean score of 3 input scores

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

[D]ata Structure
================
- Do I need an array or an object for my solution? 
- array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize an array to an ordered list of key value pairs
// calculate the mean of the 3 scores and assign to a variable `meanScore`
// write a conditional statement to check if the mean score matches the value corresponding to the letter grade
  // if so, return the associated key
*/

function getGrade(num1, num2, num3) {
  let meanScore = (num1 + num2 + num3) / 3;

  if (meanScore >= 90) {
    return `A`;
  } else if (meanScore >= 80 && meanScore < 90) {
    return 'B';
  } else if (meanScore >= 70 && meanScore < 80) {
    return `C`;
  } else if (meanScore >= 60 && meanScore < 70) {
    return `D`;
  } else {
    return `F`;
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
