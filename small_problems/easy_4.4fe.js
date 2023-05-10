// Write a function that returns true if its integer argument is palindromic, or false otherwise.
// A palindromic number reads the same forwards and backwards.
// Suppose the number argument begins with one or more 0s. Will the solution still work?
// Why or why not? Is there any way to address this?

/*
Understanding the [P]roblem
===========================
Input: number

Output: boolean

Rules:
- only integers are provided as inputs

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

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

// reverse the input integer and return a boolean
*/
function isPalindromicNumber(num) {
  let arr = [];
  let num1 = parseInt(num, 10);
  console.log(num1);
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return num === Number(arr.reverse().join(''));
}

console.log(isPalindromicNumber(`000292000`)); // false
// console.log(isPalindromicNumber(34543)); // true
// console.log(isPalindromicNumber(123210)); // false
// console.log(isPalindromicNumber(22)); // true
// console.log(isPalindromicNumber(5)); // true
