/*

Prompt

/*
Understanding the [P]roblem
===========================
Input: array of arrays

Output: array of arrays

Rules: 
- access a row by using bracket notation
- access a column by using two brackets


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

// Test Cases

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- the transposed elements 
  - to access the first array of elements, use one bracket
  - to access the second/third array of elements, use two brackets

return a new nested array comprised of elements from each column of elements of the original matrix
[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

Given an array of arrays.

Iterate over the array
  - access the first column of elements 
  - append to new array

After iterating through the array, return the new array

*/

// function transpose(matrix) {
//   let subArray1 = [1, 5, 8];
//   let subArray2 = [4, 7, 2];
//   let subArray3 = [3, 9, 6];
//   let outerArray = [subArray1, subArray2, subArray3];
//   let newMatrix1 = [];
//   let newMatrix2 = [];
//   let newMatrix3 = [];
//   let newMatrix4 = [];

//   outerArray.forEach((subArray) => {
//     // console.log(`subArray: `, subArray);
//     subArray.forEach((number, idx) => {
//       // console.log(`number: `, number);
//       if (idx === 0) {
//         // console.log(`number: `, number);
//         newMatrix1.push(number);
//       }
//       if (idx === 1) {
//         // console.log(`number: `, number);
//         newMatrix2.push(number);
//       }
//       if (idx === 2) {
//         // console.log(`number: `, number);
//         newMatrix3.push(number);
//       }
//     });
//   });
//   newMatrix4.push(newMatrix1, newMatrix2, newMatrix3);
//   return newMatrix4;
// }

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// let newMatrix = transpose(matrix);
// console.log(newMatrix);
// console.log(matrix);

// LS solution

// function transpose(matrix) {
//   let transposed = [];

//   for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
//     transposed.push([]);
//     console.log(`transposed: `, transposed);
//   }

//   for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
//     for (let colIdx = 0; colIdx < 3; colIdx += 1) {
//       transposed[colIdx].push(matrix[rowIdx][colIdx]);
//     }
//   }

//   return transposed;
// }

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// // console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*

// on each iteration
The outer loop iterates over `matrix`, selects all elements from one array per iteration and appends each current number from that array to `transposed` at index'th element of the inner loop (corresponding to appending three nested arrays per iteration)

// The trick to the nested loops is reversing the index positions to populate the new nested array. Typically, nested arrays are populated row-by-row, but the solution does it column-by-column.

- outer loop: `for (let rowIdx = 0; rowIdx < 3; rowIdx += 1)`

  - inner loop: `for (let colIdx = 0; colIdx < 3; colIdx += 1)`

      transposed --> [[], [], []]
      rowIdx --> 0
      colIdx --> 0
      transposed[0].push(matrix[0][0]);

      transposed --> [[1], [], []]
      rowIdx --> 0
      colIdx --> 1
      transposed[1].push(matrix[0][1]);

      transposed --> [[1], [5], []]
      rowIdx --> 0
      colIdx --> 2
      transposed[2].push(matrix[0][2]);

    transposed --> [[1], [5], [8]]

      transposed --> [[1], [5], [8]]
      rowIdx --> 1
      colIdx --> 0
      transposed[0].push(matrix[1][0]);

      transposed --> [[1, 4], [5], [8]]
      rowIdx --> 1
      colIdx --> 1
      transposed[1].push(matrix[1][1]);

      transposed --> [[1, 4], [5, 7], [8]]
      rowIdx --> 1
      colIdx --> 2
      transposed[2].push(matrix[1][2]);

    transposed --> [[1, 4], [5, 7], [8, 2]]

      transposed --> [[1, 4], [5, 7], [8, 2]]
      rowIdx --> 2
      colIdx --> 0
      transposed[0].push(matrix[2][0]);

      transposed --> [[1, 4, 3], [5, 7], [8, 2]]
      rowIdx --> 2
      colIdx --> 1
      transposed[1].push(matrix[2][1]);

      transposed --> [[1, 4, 3], [5, 7, 9], [8, 2]]
      rowIdx --> 2
      colIdx --> 2
      transposed[2].push(matrix[2][2]);
*/

// another solution

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// function transposeInPlace(matrix) {
//   let subArray1 = [1, 5, 8];
//   let subArray2 = [4, 7, 2];
//   let subArray3 = [3, 9, 6];
//   let outerArray = [subArray1, subArray2, subArray3];
//   console.log(`outerArray: `, outerArray);

//   for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
//     for (let colIdx = 0; colIdx < 3; colIdx += 1) {
//       matrix[rowIdx][colIdx] = outerArray[colIdx][rowIdx];
//     }
//   }
//   return matrix;
// }

// console.log(`matrix: `, transposeInPlace(matrix));

// student solution
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  let subArray1 = [1, 5, 8];
  let subArray2 = [4, 7, 2];
  let subArray3 = [3, 9, 6];
  let outerArray = [subArray1, subArray2, subArray3];
  let transformedArray = outerArray.map((subArray, idx1, array) => {
    console.log(`subArray: `, subArray);
    let transformedSubArray = subArray.map((_, idx2) => {
      console.log(`whatisthis: `, array[idx2][idx1]);
      return array[idx2][idx1];
    });
    console.log(`transformedSubArray: `, transformedSubArray);
    return transformedSubArray;
  });
  console.log(`transformedArray: `, transformedArray);
  // return matrix.map((ele, ind, arr) => ele.map((_, id) => arr[id][ind]));
}

console.log(transpose(matrix));
