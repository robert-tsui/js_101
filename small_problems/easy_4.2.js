// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
// A palindrome reads the same forwards and backwards.
// For this problem, the case matters and all characters matter.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules: 
- first and last letter of string are equal
- function should detect differences in case
- function should consider all characters to align linearly in sequence

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

madam ==== madam
madam => mada => mad => ma  => m    =>
         m    => ma  => mad => mada => madam

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output
    
*/

// function isPalindrome(str) {
//   // split the string and assign to a variable `arr`
//   let arr = str.split('');
//   // make a copy of `arr` and assign to a variable `arrCopy`
//   let arrCopy = arr.slice();
//   // declare and initialize a variable `newArr` to an empty array
//   let newArr = [];
//   // use a `for` loop to iterate over `arrCopy`
//   for (let i = 0; i < arr.length; i++) {
//     // remove last element of `arrCopy`and append to `newArr`
//     newArr.push(arrCopy.pop());
//     console.log(`newArr: ${newArr}`);
//     console.log(`arrCopy: ${arrCopy}`);
//     // use a conditional statement to check if current element of `newArr` matches current element of `arrCopy`
//     if (newArr[i] === arr[i]) {
//       // if so, continue
//       continue;
//     } else {
//       // otherwise, return false
//       return false;
//     }
//   }

//   // return true
//   return true;
// }

// student submitted

// // Better time complexity than method chaining but more verbose.
// function isPalindrome(str) {
//   // Two-pointer strategy. One for the front of the string and one for the back.
//   let front = 0;
//   let back = str.length - 1;

//   // Loop over the string until front is greater than back.
//   while (front <= back) {
//     if (str[front] !== str[back]) return false;
//     front += 1;
//     back -= 1;
//   }
//   return true;
// }
// `madam`
// front = 0
// back = 4

// 1st loop
// 0 <= 4 => true
// (`m` === `m`) => true
// front = 1
// back = 3

// 2nd loop
// 1 <= 3 => true
// (`a` === `a`) => true
// front = 2
// back = 2

// 3rd loop
// 2 <= 2 => true
// (`d` === `d`) => true
// front = 3
// back = 1

// return true

// LS attempt

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Madam')); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome('356653')); // true
