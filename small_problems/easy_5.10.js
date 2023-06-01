// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array,
// rounded down to the integer component of the average.
// The array will never be empty, and the numbers will always be positive integers.

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40

/*
Understanding the [P]roblem
===========================
Input: array

Output: number

Rules:
- output result is the average of all integers in input array 
- output result is rounded down to the nearest integer
- input array is never empty
- input array of numbers will always be positive numbers

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

average([1, 5, 87, 45, 8, 8]);       // 25

output the average of all numbers in given array, rounded down

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

average([1, 5, 87, 45, 8, 8]);       // 25

// declare and initialize a variable `sum` to the value `0`
// loop over input array for the length of the array
  // add current value to the `sum` variable for each iteration
// return sum divided by the length of the array and round it down
*/

// function average(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return Math.floor(sum / arr.length);
// }

// using reduce

function average(arr) {
  let avg = arr.reduce((acc, cv) => {
    return acc + cv;
  }, 0);

  return Math.floor(avg / arr.length);
}

// using forEach

// function average(arr) {
//   let sum = 0;
//   arr.forEach((el) => {
//     // sum += el / arr.length;
//     sum += el;
//   });

//   // return Math.floor(sum);
//   return Math.floor(sum / arr.length);
// }

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
