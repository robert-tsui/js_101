// Write a function that takes a grocery list in a two-dimensional array
// and returns a one-dimensional array.
// Each element in the grocery list contains a fruit name
// and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
// Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

/*
Understanding the [P]roblem
===========================
Input: array

Output: array

Rules:
- input is a 2D array
- output is a 1D array
- array contains fruit types and associated quantities
- output elements are ordered in the order they appear in the input array

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input array, return an array of fruits that appear based on the quantities in the input array

[['apple', 3], ['orange', 1], ['banana', 2]] => ["apple", "apple", "apple", "orange", "banana", "banana"]

[[1, 3], [2, 1], [3, 2]] => [1, 1, 1, 2, 3, 3]

sum of numbers at first idx of inner arrays => output length

first element at zeroeth idx of inner arrays represent all elements in output array

second element at first idx of inner arrays represent the number of times each fruit appears in output array

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `newArr` and initialize to an empty array
// iterate up to output array length
  // 
*/

// function buyFruit(arr) {
//   let sum = 0;
//   arr.map((subArr) =>
//     subArr.map((el) => {
//       if (typeof el === 'number') {
//         sum += el;
//         let quantity = el[1];
//         while (quantity <= sum) {
//           return el;
//         }
//       }
//     })
//   );
// }

// function `buyFruit`
// transform the grocery list into the expanded grocery list by passing each subarray/element to the `repeat` function
// concatenate each subarray together consecutively until the array flattens

// function `repeat`
// in the `repeat` function we declare and initialize `result` to an empty array
// declare `fruit` and initialize to the first element of the subarray argument
// declare `quantity` and initialize to the second element of the subarray argument
// loop `num` for as long as `num` is less than `quantity`
// append `fruit` to `result` array
// return `result` array

// function buyFruit(fruitsList) {
//   return fruitsList
//     .map((fruit) => repeat(fruit))
//     .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }

// function repeat(fruitAndQuantity) {
//   let result = [];
//   let fruit = fruitAndQuantity[0];
//   let quantity = fruitAndQuantity[1];

//   for (let num = 0; num < quantity; num += 1) {
//     result.push(fruit);
//   }

//   return result;
// }

function buyFruit(arr) {
  return arr
    .map((subArr) => expandFruits(subArr))
    .reduce((acc, cv) => acc.concat(cv));
}

function expandFruits(subArr) {
  let newArr = [];
  let fruit = subArr[0];
  let quantity = subArr[1];

  for (let num = 1; num <= quantity; num++) {
    newArr.push(fruit);
  }

  return newArr;
}

// console.log(expandFruits(['apple', 3])); // [`apple`, `apple`, `apple`]

console.log(
  buyFruit([
    ['apple', 3],
    ['orange', 1],
    ['banana', 2],
  ])
);
// returns[('apple', 'apple', 'apple', 'orange', 'banana', 'banana')];
