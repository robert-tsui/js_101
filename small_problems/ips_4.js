/*

Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. 
The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

Input: number

Output: log asterisks

Example: 

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
- the `midRow` = Math.ceil(n / 2), which has n stars
- every row except midrow has 3 stars each

Mental Model:
- loop the upper half of rows
  - 1st row -> `startingSpaces` = 0, `middleSpaces` = `midRow` - 2
  - every row thereafter -> `startingSpaces` += 1, `middleSpaces` -= 1

- reassign `startingSpaces` = `midRow` - 2 and `middleSpaces` = 0

- loop the lower half of rows
  - 1st row -> `startingSpaces` = `midRow` - 2, `middleSpaces` = 0
  - every row thereafter -> `startingSpaces` -= 1, `middleSpaces` += 1

START
SET star = '*'
SET midRow = Math.ceil(n / 2)
SET row = 1
SET column = 1
SET startingSpaces = 1;
SET middleSpaces = midRow - 2;

FOR loop until row < midRow
  IF row === 1
    PRINT star first then separated by spaces and stars
  IF row > 1
    PRINT space first then separated by stars and spaces
  INCREMENT row += 1

PRINT midRow stars

SET startingSpaces = midRow - 2;
SET middleSpaces = 0;

FOR loop until row < midRow
  PRINT space first then separated by stars and spaces
  INCREMENT row += 1
  DECREMENT startingSpaces -= 1;
  INCREMENT middleSpaces += 1;
END
*/

// function star(n) {
//   let star = '*';
//   let space = ' ';
//   let midRow = Math.ceil(n / 2);
//   let startingSpaces = 1;
//   let middleSpaces = midRow - 2;

//   for (let row = 1; row < midRow; row += 1) {
//     if (row === 1) {
//       console.log(
//         star +
//           space.repeat(middleSpaces) +
//           star +
//           space.repeat(middleSpaces) +
//           star
//       );
//     }
//     if (row > 1) {
//       middleSpaces -= 1;
//       console.log(
//         space.repeat(startingSpaces) +
//           star +
//           space.repeat(middleSpaces) +
//           star +
//           space.repeat(middleSpaces) +
//           star
//       );
//       startingSpaces += 1;
//     }
//   }
//   console.log(star.repeat(n));
//   startingSpaces = midRow - 2;
//   middleSpaces = 0;

//   for (let row = 1; row < midRow; row += 1) {
//     console.log(
//       space.repeat(startingSpaces) +
//         star +
//         space.repeat(middleSpaces) +
//         star +
//         space.repeat(middleSpaces) +
//         star
//     );
//     startingSpaces -= 1;
//     middleSpaces += 1;
//   }
// }

// console.log(star(7));
// console.log(star(9));
// console.log(star(21));

// LS attempt
function buildStarRow(spacesBetween, spacesPadding) {
  let starArr = ['*', '*', '*'];
  let starStr = starArr.join(' '.repeat(spacesBetween));
  return ' '.repeat(spacesPadding) + starStr;
}

function star(size) {
  let spacesBetween = (size - 3) / 2;
  let spacesPadding = 0;
  let middleIdx = Math.floor(size / 2);

  // first row up to middle row
  for (let idx = 0; idx < middleIdx; idx++) {
    // console.log(`idx: `, idx);
    // console.log(`spacesBetween: `, spacesBetween);
    // console.log(`spacesPadding: `, spacesPadding);
    console.log(buildStarRow(spacesBetween, spacesPadding));
    spacesBetween = spacesBetween - 1;
    spacesPadding = spacesPadding + 1;
  }
  // middle row
  console.log('*'.repeat(size));
  spacesBetween = 0;
  spacesPadding = (size - 3) / 2;
  // console.log(`spacesBetween: `, spacesBetween);
  // console.log(`spacesPadding: `, spacesPadding);

  // middle row up to last row
  for (let idx = 0; idx < middleIdx; idx++) {
    // console.log(`spacesBetween: `, spacesBetween);
    // console.log(`spacesPadding: `, spacesPadding);
    console.log(buildStarRow(spacesBetween, spacesPadding));
    spacesBetween = spacesBetween + 1;
    spacesPadding = spacesPadding - 1;
  }
}

star(7);
star(9);
star(25);
