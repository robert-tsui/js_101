/* INPUTS AND OUTPUTS

i: integers (1 lower limit and 1 upper limit)
o: integers (set of odd)

EXPLICIT REQUIREMENTS

integers: all odd integers from 1 to 99, inclusive


IMPLICIT REQUIREMENTS

none

CLARIFYING QUESTIONS

- what happens when an even number is passed as an argument?

MENTAL MODEL

print all odd integers from a defined user input of 2 arguments that represent a lower and upper limit, inclusive, to the console with each integer on a separate line

EXAMPLES/TEST CASES

Validation Example 1
i: 2,10
o: 3,5,7,9

Validation Example 2 
i: 3, 22
o: 3,5,7,9,11,13,15,17,19,21

DATA STRUCTURE/ALGORITHM

1. Write a for loop that initializes i at the user's first argument input and increments i until i is assigned the value of the user's second argument input
2. Write an if statement to increment i by 1 if the first argument is even. Else increment i by 2
3. Print the value of i to the console, each to a separate line

*/

function oddNumbers(input1, input2) {
  if (input1 % 2 === 0) {
    for (let i = input1 + 1; i <= input2; i += 2) {
      console.log(i);
    }
  } else {
    for (let i = input1; i <= input2; i += 2) {
      console.log(i);
    }
  }
}

oddNumbers(0, 15);
oddNumbers(1, 26);
oddNumbers(4, 26);
