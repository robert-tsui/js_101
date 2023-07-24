/*

Prompt

*/

triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- valid triangle
-- sum of the angles must be exactly 180 degrees
-- every angle must be greater than 0

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
(60, 70, 50)
60 + 70 + 50 = 180
60 > 0, 70 > 0, 50 > 0

- right
arg === 90?

- acute
arg < 90

- obtuse
arg > 90

given 3 angles, return the types of triangles they are assuming they're valid

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

*/

function triangle(angle1, angle2, angle3) {
  if (!isValid(angle1, angle2, angle3)) return 'invalid';

  return triangleType(angle1, angle2, angle3);
}

function triangleType(angle1, angle2, angle3) {
  if (angle1 === 90 || angle2 === 90 || angle3 == 90) {
    return 'right';
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'acute';
  } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    return 'obtuse';
  }
}

function isValid(angle1, angle2, angle3) {
  return (
    angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0
  );
}

// console.log(triangle(60, 70, 50)); // "acute"
// console.log(triangle(30, 90, 60)); // "right"
// console.log(triangle(120, 50, 10)); // "obtuse"
// console.log(triangle(0, 90, 90)); // "invalid"
// console.log(triangle(50, 50, 50)); // "invalid"
