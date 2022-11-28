/* INPUTS AND OUTPUTS

i: none
o: integers (set of odd)

EXPLICIT REQUIREMENTS

integers: all odd integers from 1 to 99, inclusive


IMPLICIT REQUIREMENTS

none

CLARIFYING QUESTIONS

- what happens when an argument is passed into the function?
- are we returning the integers?

MENTAL MODEL

print all odd integers from 1 to 99, inclusive, to the console with each integer on a separate line

EXAMPLES/TEST CASES

i: none
o: 1,3,5,7,9,11

DATA STRUCTURE/ALGORITHM

1. Write a for loop that initializes i at 1 and increments i by 2 until i = 99
2. Print the value of i to the console, each to a separate line

*/

function oddNumbers() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

oddNumbers();
