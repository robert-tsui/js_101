let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  let rotated = [];
  for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx += 1) {
    rotated.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      // console.log(transposed);
      rotated[colIdx].push(matrix[rowIdx][colIdx]);
      // console.log(`rowIdx: `, rowIdx);
      // console.log(`colIdx: `, colIdx);
      // console.log(`transposed[colIdx]: `, transposed[colIdx]);
    }
  }
  // console.log(`transposed: `, transposed);

  for (let rowIdx = 0; rowIdx < rotated.length; rowIdx += 1) {
    rotated[rowIdx].reverse();
  }
  return rotated;
}

// solution that works for only matrix1

// for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
//   for (let colIdx = matrix[rowIdx].length - 1; colIdx >= 0; colIdx -= 1) {
//     console.log(transposed);
//     transposed[colIdx].push(matrix[colIdx][rowIdx]);
//     console.log(`rowIdx: `, rowIdx);
//     console.log(`colIdx: `, colIdx);
//     console.log(`transposed[colIdx]: `, transposed[colIdx]);
//   }
// }

// let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
