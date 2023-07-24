/*

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

*/

// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- sum of two of the shortest sides > longest side
- each length of every side > 0
- argument can be non-integer
- output string is one of 4 strings

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
given the lengths of all triangle sides, return the type of triangle it is
triangle(3, 3, 3);        // "equilateral"

3, 3, 3 => '3', '3', '3' => ['3', '3', '3']

=> conditional statements
- equilateral
// 3 === 3 === 3

- isosceles
// 3 === 3 && 3 !== 3

- scalene
// 3 !== 3 !== 3

- valid
// 3 + 3 > 3

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
// write a guard clause such that each argument has to be greater than 0
// 
*/

function triangle(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) return 'invalid';

  if (equilateral(side1, side2, side3)) {
    return 'equilateral';
  } else if (isosceles(side1, side2, side3)) {
    return 'isosceles';
  } else if (scalene(side1, side2, side3)) {
    return 'scalene';
  } else if (isNotValid(side1, side2, side3)) {
    return 'invalid';
  }
}

function scalene(side1, side2, side3) {
  return side1 !== side2 && side1 !== side3 && side2 !== side3;
}

function equilateral(side1, side2, side3) {
  return side1 === side2 && side1 === side3;
}

function isosceles(side1, side2, side3) {
  let sidesArray = [String(side1), String(side2), String(side3)];
  for (let index = 0; index < sidesArray.length; index += 1) {
    let currentSide = sidesArray[index];
    return (
      (side1 === side2 || side1 === side3 || side2 === side3) &&
      (currentSide > side1 || currentSide > side2 || currentSide > side3) &&
      !isNotValid(side1, side2, side3)
    );
  }
}

function isNotValid(side1, side2, side3) {
  let sidesArray = [String(side1), String(side2), String(side3)];
  let longestSide;
  for (let index = 0; index < sidesArray.length; index += 1) {
    let currentSide = sidesArray[index];
    if (
      (currentSide > side1 && currentSide > side2) ||
      (currentSide > side2 && currentSide > side3) ||
      (currentSide > side1 && currentSide > side3)
    ) {
      longestSide = currentSide;
    }

    return (
      side1 + side2 < longestSide ||
      side2 + side3 < longestSide ||
      side1 + side3 < longestSide
    );
  }
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
