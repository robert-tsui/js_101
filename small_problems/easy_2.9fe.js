// The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() method was used instead?

// Also, how can we make the function more robust?

// What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to min was greater than max)?

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

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax

- use array destructuring to reassign values if min > max
- generate a random number between 0 and 1
- multiply this number by the number of possible values within the required age range
- round this number down to the nearest integer
- add the min value in the range to shift the number into the required age range
*/

function findAge(min, max) {
  if (min > max) {
    let [a, b] = [min, max];
    max = a;
    console.log(`a: ${a}`);
    min = b;
    console.log(`b: ${b}`);
  }

  return Math.round(Math.random() * (max - min)) + min;
}

// let teddysAge = findAge(20, 120);
let teddysAge = findAge(120, 20);
console.log(`Teddy's age is ${teddysAge} years old!`);
