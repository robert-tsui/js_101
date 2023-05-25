// Given an unordered array and the information
// that exactly one value in the array occurs twice (every other value occurs exactly once),
// determine which value occurs twice.
// Write a function that will find and return the duplicate value that is in the array.

/*
Understanding the [P]roblem
===========================
Input: array

Output: object

Rules:
- input array has only one duplicate value
- output can be any data type (string, number, object, array, ...)
- 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

findDup([1, 5, 3, 1]);                                // 1
- [1, 5, 3, 1]
- [1, 5, 3, 1]

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output
*/

// LS solution #1
// function findDup(arr) {
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]]) {
//       return arr[i];
//     } else {
//       seen[arr[i]] = true;
//       console.log(`seen: ${seen}`);
//     }
//   }

//   return undefined;
// }

// LS solution #2
function findDup(arr) {
  return arr.find((el) => count(arr, el) === 2);
}

function count(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count += 1;
    }
  }

  return count;
}

console.log(findDup([1, 5, 3, 1])); // 1

console.log(
  findDup([
    18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
    27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
    37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
    3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
    28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
    88, 67, 5, 58,
  ])
); // 73
