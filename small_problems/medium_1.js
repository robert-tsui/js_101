/*

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

*/

// rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']); // ["b", "c", "a"]
// rotateArray(['a']); // ["a"]
// rotateArray([1, 'a', 3, 'c']); // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
// rotateArray([]); // []

// // return `undefined` if the argument is not an array
// rotateArray(); // undefined
// rotateArray(1); // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array); // [2, 3, 4, 1]
// array; // [1, 2, 3, 4]

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:

empty array => empty array
not array => undefined

first and last elements are swapped

-- Intermission --
[7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]
[3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]


[D]ata Structure
================
Array

[A]lgorithm
===========
// add guard clauses
  // if input is an empty array
    // return an empty array
  // if input is not an array
    // return undefined
// declare a new variable `firstElement` and initialize to an empty string
// declare a new variable `resultsArr` and initialize to an empty array
// loop over input array
  // if current element is strictly equal to the first element
    // append element to `firstElement`
  // if current element is not strictly equal to the first element, append to `resultsArr`
// append `firstElement` to `resultsArr`
// return `resultsArr`

*/

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];

//   let firstElement = [];
//   let resultsArr = [];
//   firstElement.push(arr[0]);

//   for (let index = 0; index < arr.length; index += 1) {
//     let currentElement = arr[index];
//     if (currentElement !== arr[0]) {
//       resultsArr.push(currentElement);
//     }
//   }

//   resultsArr.push(firstElement[0]);
//   return resultsArr;
// }

// solution using slice method

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let removedElementArr = arr.slice(1);
  let oneElementArr = arr.slice(0, 1);
  removedElementArr.push(oneElementArr);
  let resultsArr = removedElementArr.flat();

  return resultsArr;
}

// LS solution using slice method

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
console.log(rotateArray(['a'])); // ["a"]
console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
