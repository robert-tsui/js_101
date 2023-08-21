// 1.2fe student solution

function transposeInPlace(matrix) {
  let subArray0 = [matrix[0][0], matrix[1][0], matrix[2][0]];
  let subArray1 = [matrix[0][1], matrix[1][1], matrix[2][1]];
  let subArray2 = [matrix[0][2], matrix[1][2], matrix[2][2]];

  matrix[0] = subArray0;
  matrix[1] = subArray1;
  matrix[2] = subArray2;

  return matrix;
}

console.log(`matrix: `, transposeInPlace(matrix));
