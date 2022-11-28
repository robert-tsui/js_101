/* 

INPUTS AND OUTPUTS

i: none
o: Number (even)

EXPLICIT REQUIREMENTS  

Number: even numbers from 1 to 99, inclusive

IMPLICIT REQUIREMENTS

none

CLARIFYING QUESTIONS  

none

MENTAL MODEL

Print all even integers from 1 to 99, inclusive, to the console 

EXAMPLES/TEST CASES

Validation Example 1

1,3,5,7,9,11,13...

DATA STRUCTURE/ALGORITHM
  
1. Write a for loop that initializes i to 2, i is less than 99, and i increments by 2

2. Print each number to the console

*/

// solution 1

function evenNumbers() {
  for (let i = 2; i < 99; i += 2) {
    console.log(i);
  }
}

/* LS solution

function evenNumbers() {
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
      continue;
    }

    console.log(i);
  }
}

*/

evenNumbers();
