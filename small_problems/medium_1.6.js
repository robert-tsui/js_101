/*

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

*/

// findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

/*
Understanding the [P]roblem
===========================
Input: number

Output: number

Rules:
- argument is an integer >= 2
- argument represents first fibonnaci number with an `argument` number of digits
- given the argument, return the index when this first occurs 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
- write a function that sequences the fibonacci sequence 
- and check when the argument matches the number of digits in the sequence, 
- then return the index
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13

Xn 1 1 2 3 5 8 13
n  0 1 2 3 4 5 6

Xn = (n - 1) + (n - 2)

- Xn represents the term
- n represents the index of the term number in the sequence and starts at 0
- iterate from n


[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `termNumber` and initialize to 0
// iterate over `termNumber`
  // build the fibonacci sequence
  // convert the current number into a string
  // split the string into an array of string numbers
  // create a conditional statement to check if argument matches the current length of the array
    // if so, return the index
*/

// Xn 1 1 2 3 5 8 13
// n  1 2 3 4 5 6

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second; // 1n + 1n = 2n // 1n + 2n = 3n // 2n + 3n = 5n // 3n + 5n = 8n // 5n + 8n = 13n
    count += 1n; // 2n + 1n = 3n // 3n + 1n = 4n // 4n + 1n = 5n // 5n + 1n = 6n // 6n + 1n = 7n
    first = second; // 1n // 2n // 3n // 5n // 8n
    second = fibonacci; // 2n // 3n // 5n // 8n // 13n
  } while (String(fibonacci).length < length); // 1 < 2 // 1 < 2 // 1 < 2 // 1 < 2 // 2 < 2

  return count;
}

console.log(findFibonacciIndexByLength(2n)); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
