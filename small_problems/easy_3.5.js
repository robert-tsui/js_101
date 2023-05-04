// Write a function that takes a positive integer, n, as an argument
// and logs a right triangle whose sides each have n stars.
// The hypotenuse of the triangle (the diagonal side in the images below)
// should have one end at the lower-left of the triangle, and the other end at the upper-right.

/*
Understanding the [P]roblem
===========================
Input: positive integer

Output: stars (symbol)

Rules:
- one argument, a positive integer
- output is a star pattern
- the hypotenuse connect between the lower-left end and upper-right end
- the argument is equal to the length of all sides of the triangle

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

* => ** => ***

arg: 5
    * 0 | whitespace => n - 1 (n - 1 - i) | stars => 1 (i + 1)
   ** 1 | whitespace => n - 2 (n - 1 - i) | stars => 2 (i + 1)
  *** 2 | whitespace => n - 3 (n - 1 - i) | stars => 3 (i + 1)
 **** 3 | whitespace => n - 4 (n - 1 - i) | stars => 4 (i + 1)
***** 4 | whitespace => n - 5 (n - 1 - i) | stars => 5 (i + 1)

[D]ata Structure
================
- Do I need an array or an object for my solution? 
- no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `result`
// write a `for` loop to incrementally build the star pattern
  // log a repeat of a single whitespace string `n - 1 - i` number of times and concatenate `i + 1` times with a `*`
  // append to the `result` variable
// return `result`
*/

// function triangle(height) {
//   for (let i = 0; i < n; i++) {
//     console.log(' '.repeat(height - 1 - i) + `*`.repeat(i + 1));
//   }
// }

// console.log(triangle(5));
// console.log(triangle(9));

// LS

// function triangle(height) {
//   // 5
//   let spaces = height - 1; // 5 - 1 = 4
//   let stars = 1; // 1
//   while (height > 0) {
//     // 5
//     console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
//     spaces -= 1; // 4 - 1 = 3
//     stars += 1; // 2
//     height -= 1; // 4
//   }
// }

// console.log(triangle(5));

// loop 1     // loop 2

// log 1      // log 2

// height = 5 // height = 4
// spaces = 4 // spaces = 3
// stars  = 1 // stars  = 2

// reassign 1 // reassign 2

// spaces = 3 // spaces = 2
// stars = 2  // stars = 3
// height = 4 // height = 3

// difference

// height - 1
// spaces - 1
// stars + 1

function triangle(n) {
  let triSide = '';
  for (let i = 0; i < n; i += 1) {
    triSide += '*';
    console.log(triSide.padStart(n, ' '));
  }
}

console.log(triangle(9));
