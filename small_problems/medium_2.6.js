/*

Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

/*
Understanding the [P]roblem
===========================
Input:

Output:

Rules:

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========

*/

function sumSquareDifference(number) {
  let sumSquare = 0;
  let squareSum = 0;
  for (let count = 1; count <= number; count += 1) {
    sumSquare += count;
    squareSum += squareNum(count);
  }

  return squareNum(sumSquare) - squareSum;
}

function squareNum(number) {
  return Math.pow(number, 2);
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
