/*

Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. 
The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

Input: number

Output: log asterisks

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   * // 1 star, 3 spaces, 1 star, 3 spaces, 1 star // 1 5 9
 *  *  * // 1 space, 1 star, 2 spaces, 1 star, 2 spaces, 1 star, 1 space // 2, 5, 8
  * * * // 2 spaces, 1 star, 1 space, 1 star, 1 space, 1 star, 2 spaces // 3, 5, 7
   *** // 3 spaces, 3 stars, 3 spaces // 4, 5, 6
********* // 9 stars // 1, 2, 3, 4, 5, 6, 7, 8, 9
   *** // 3 spaces, 3 stars, 3 spaces // 4, 5, 6
  * * * // 2 spaces, 1 star, 1 space, 1 star, 1 space, 1 star, 2 spaces // 3, 5, 7
 *  *  * // 1 space, 1 star, 2 spaces, 1 star, 2 spaces, 1 star, 1 space // 2, 5, 8
*   *   * // 1 star, 3 spaces, 1 star, 3 spaces, 1 star // 1 5 9

Rules:
- argument is always greater than or equal to n
- argument n corresponds to n x n grid
- every output displays an 8 pointed star
- each pointed star aligns with the same pattern for the first and last row/columns of stars
- there are n rows in the output
- the midrow = Math.ceil(n / 2), which has n stars
- every row except midrow has 3 stars each
- the upper half of rows
  - 1st star => starts at 1, increments by 1, until it reaches less than midrow 
  - 2nd star => midrow stars
  - 3rd star => starts at n, decrements by 1, until it reaches midrow
- the lower half of rows
  - 1st star => starts at midrow - 1, decrements by 1 until it reaches 1
  - 2nd star => midrow stars
  - 3rd star => starts at midrow + 1, increments by 1 until it reaches n

SET star = '*'
SET midRow = Math.ceil(n / 2)
SET row = 1
SET column = 1

FOR loop until row <= n
  INCREMENT row += 1
  FOR loop until column <= n
    PRINT stars (`column` `star` + `midRow` `star` + `n` `star`)
    INCREMENT column += 1

*/

function star(n) {
  let star = '*';
  let space = ' ';
  let midRow = Math.ceil(n / 2);
  let startingSpaces = 1;
  let middleSpaces = midRow - 2;

  for (let row = 1; row < midRow; row += 1) {
    if (row === 1) {
      console.log(
        star +
          space.repeat(middleSpaces) +
          star +
          space.repeat(middleSpaces) +
          star
      );
    }
    if (row > 1) {
      middleSpaces -= 1;
      console.log(
        space.repeat(startingSpaces) +
          star +
          space.repeat(middleSpaces) +
          star +
          space.repeat(middleSpaces) +
          star
      );
      startingSpaces += 1;
    }
  }
  console.log(star.repeat(n));
  startingSpaces = midRow - 2;
  middleSpaces = 0;

  for (let row = 1; row < midRow; row += 1) {
    console.log(
      space.repeat(startingSpaces) +
        star +
        space.repeat(middleSpaces) +
        star +
        space.repeat(middleSpaces) +
        star
    );
    startingSpaces -= 1;
    middleSpaces += 1;
  }
}

console.log(star(7));
console.log(star(9));
// console.log(star(21));
// logs
/*
1, 5, 9
2, 5, 8
3, 5, 7
4, 5, 6
1, 2, 3, 4, 5, 6, 7, 8, 9
4, 5, 6
3, 5, 7
2, 5, 8
1, 5, 9
 */
