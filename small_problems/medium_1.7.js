/*

Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.


*/

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(5); // 5
fibonacci(12); // 144
fibonacci(20); // 6765

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


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

*/

// Xn 1 1 2 3 5 8 13
// n  1 2 3 4 5 6 7

function fibonacci(termNumber) {
  if (termNumber === 1 || termNumber === 2) {
    return 1;
  }
  return fibonacci(termNumber - 1) + fibonacci(termNumber - 2);
}

// 1 => 1
// 2 => 1
// 3 => fibonnaci(2) + fibonacii(1)

// fibonacci(1); // 1
// fibonacci(2); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
// fibonacci(5); // 5
// fibonacci(12); // 144
// fibonacci(20); // 6765
