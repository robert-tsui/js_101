// Write a function that takes an Array as an argument and reverses its elements in place.
// That is, mutate the Array passed into this method. The return value should be the same Array object.
// You may not use Array.prototype.reverse().

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:
- mutate the array
- reverse elements in place
- create `reverse()` from scratch

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

[1, 2, 3, 4] => [4, 3, 2, 1]
use `pop()` during `for` loop

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// create a loop to iterate over input array for the length of the array
  // during each iteration, remove last element and append to the beginning of input array
// return the input array
*/

// function reverse(arr) {
//   let arrCopy = arr.slice();
//   let newArr = [];

//   for (let i = 0; i < arrCopy.length; i++) {
//     newArr.push(arr.pop());
//   }

//   for (let i = 0; i < arrCopy.length; i++) {
//     arr.push(newArr[i]);
//   }

//   return arr;
// }

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ['a', 'b', 'c', 'd', 'e'];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ['abc'];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
