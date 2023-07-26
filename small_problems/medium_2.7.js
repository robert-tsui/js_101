/*

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:
- mutate the array
- if first number > second number, swap the two numbers

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

*/
// how do you check if the array is sorted without actually using a method to sort it?

function bubbleSort(array) {
  let strArray = array.join();
  while (true) {
    sort(array);
    if (strArray === array.join()) break;
    strArray = array.join();
  }
  return array;
}

function sort(array) {
  let firstNumber;
  let secondNumber;
  for (let index = 0; index < array.length; index += 1) {
    firstNumber = array[index];
    secondNumber = array[index + 1];
    if (firstNumber > secondNumber) {
      array.splice(index, 2, secondNumber, firstNumber);
    }
  }

  return array;
}

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1); // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2); // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// let array4 = [3, 5];
// bubbleSort(array4);
// console.log(array4); // [3, 5]
