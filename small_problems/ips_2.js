/*

Prompt

/*
Understanding the [P]roblem
===========================
Input: number

Output: symbol

Rules:
- argument is always odd integer
- top and bottom points of diamond are always one star
- argument is the number of stars that contain the left and right diamond points
- first row always contains one star
- last row always contains one star
- argument represents the midline for the diamond shape
- first row and every row thereafter increments in odd number of stars until midline is reached
- each row after midline decrements in odd number of stars until last row

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

the 9 rows will have 1, 3, 5, 7, 9, 7, 5, 3, 1 asterisks
the 9 rows will have 4, 3, 2, 1, 0, 1, 2, 3, 4 spaces
n rows will have n - countOfAsterisks / 2 spaces

diamond(9);
// logs
    * // 5
   *** // 4
  ***** // 3
 ******* // 2
********* // 0
 *******
  *****
   ***
    *

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output


[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

SET countOfAsterisks = 0
FOR loop argument

*/

function diamond(number) {
  let asterisks = '*';
  let countOfAsterisks = 0;
  let spaces = ' ';
  let numOfspaces;
  for (let row = 1; row <= number; row += 1) {
    // console.log(`row: `, row);
    if (row === 1) {
      countOfAsterisks += 1;
      // console.log(`countOfAsterisks: `, countOfAsterisks);
      // console.log(`number: `, number);
      numOfspaces = (number - countOfAsterisks) / 2;
      // console.log(`numOfspaces: `, numOfspaces);
      console.log(spaces.repeat(numOfspaces) + asterisks);
    } else if (row > 1) {
      countOfAsterisks += 2;
      // console.log(`countOfAsterisks: `, countOfAsterisks);
      // console.log(`numOfspaces: `, numOfspaces);
      numOfspaces = (number - countOfAsterisks) / 2;
      console.log(
        spaces.repeat(numOfspaces) + asterisks.repeat(countOfAsterisks)
      );
    }
    if (countOfAsterisks === number) break;
  }
  for (let row = 1; row <= number; row += 1) {
    if (countOfAsterisks === 1) break;
    // console.log(`row: `, row);
    countOfAsterisks -= 2;
    // console.log(`countOfAsterisks: `, countOfAsterisks);
    // console.log(`numOfspaces: `, numOfspaces);
    numOfspaces = (number - countOfAsterisks) / 2;
    console.log(
      spaces.repeat(numOfspaces) + asterisks.repeat(countOfAsterisks)
    );
  }
}

console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// console.log(diamond(1));
// logs
// *

// console.log(diamond(3));
// logs
//  *
// ***
//  *
