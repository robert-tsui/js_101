// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1],
// ];

// function transpose(matrix) {
//   let newRowsCount = matrix[0].length;
//   let transposed = [];

//   for (let idx = 0; idx < newRowsCount; idx += 1) {
//     transposed.push([]);
//   }

//   for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
//     for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
//       transposed[colIdx].push(matrix[rowIdx][colIdx]);
//     }
//   }

//   return transposed;
// }

// let newMatrix = transpose(matrix);

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix); // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
// console.log(transpose([[1]])); // [[1]]

// console.log(
//   transpose([
//     [1, 2, 3, 4, 5],
//     [4, 3, 2, 1, 0],
//     [3, 7, 8, 6, 2],
//   ])
// );
// // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// const matrix = [[1, 2], [4, 3], [2, 6]];

// - outer loop: `for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1)`
//   matrix.length --> 3

//   - inner loop: `for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1)`
//   matrix[rowIdx].length --> 2

//   [[1, 2], [4, 3], [2, 6]];
//   transposed --> [[], []]
//   rowIdx --> 0
//   colIdx --> 0
//   transposed[0].push(matrix[0][0])

//   transposed --> [[1], []]
//   rowIdx --> 0
//   colIdx --> 1
//   transposed[1].push(matrix[0][1])

//   transposed --> [[1], [2]]
//   rowIdx --> 1
//   colIdx --> 0
//   transposed[0].push(matrix[1][0])

//   transposed --> [[1, 4], [2]]
//   rowIdx --> 1
//   colIdx --> 1
//   transposed[1].push(matrix[1][1])

//   transposed --> [[1, 4], [2, 3]]
//   rowIdx --> 2
//   colIdx --> 0
//   transposed[0].push(matrix[2][0])

//   transposed --> [[1, 4, 2], [2, 3]]
//   rowIdx --> 2
//   colIdx --> 1
//   transposed[1].push(matrix[2][1])

//   transposed --> [[1, 4, 2], [2, 3, 6]]

//------------------------------ new attempt
function createNewArrayStructureForTranspose(originalMatrix) {
  let transposedStructure = [];
  let numberOfColumnsInOriginal = originalMatrix[0].length;
  for (let column = 0; column < numberOfColumnsInOriginal; column++) {
    transposedStructure.push([]);
  }
  return transposedStructure;
}

function transpose(matrix) {
  let transposedMatrix = createNewArrayStructureForTranspose(matrix);

  for (let originalCol = 0; originalCol < matrix.length; originalCol++) {
    let currentColumn = matrix[originalCol];
    for (
      let originalRow = 0;
      originalRow < matrix[originalCol].length;
      originalRow++
    ) {
      let element = currentColumn[originalRow];
      transposedMatrix[originalRow].push(element);
    }
  }
  return transposedMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
];
/* transposedMatrix
[
  [1, 4, 3],
  [5, 7, 9],
  [8, 2, 6],
  [5, 0, 1],
];
*/

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix); // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
console.log(transpose([[1]])); // [[1]]

console.log(
  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
  ])
);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
