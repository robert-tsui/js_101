// Write a program that solicits six numbers from the user
// and logs a message that describes whether the sixth number appears among the first five numbers.

/*
Understanding the [P]roblem
===========================
Input: number

Output: string

Rules:
- 6 numbers are prompted from the program 
- 6th number is used to check if it matches previous 5 numbers

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- prompt the user for 6 numbers and check if the 6th number matches any of the previous 5 numbers

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// require `readlineSync` module 
// declare and initialize `arr` to an empty array
// prompt the user for the first number and append to `arr`
// prompt the user for the second number and append to `arr`
// prompt the user for the third number and append to `arr`
// prompt the user for the fourth number and append to `arr`
// prompt the user for the fifth number and append to `arr`
// prompt the user for the sixth number and append to `arr`

// loop over `arr` 
  // use a conditional statement to check if the last element of the array matches any of the elements in the array
    // if so, return string one
  // otherwise, return string two
*/

let readline = require(`readline-sync`);
let arr = [];

let num1 = readline.question(`Enter the 1st number: `);
arr.push(num1);
console.log(`arr: ${arr}`);
let num2 = readline.question(`Enter the 2nd number: `);
arr.push(num2);
console.log(`arr: ${arr}`);
let num3 = readline.question(`Enter the 3rd number: `);
arr.push(num3);
console.log(`arr: ${arr}`);
let num4 = readline.question(`Enter the 4th number: `);
arr.push(num4);
console.log(`arr: ${arr}`);
let num5 = readline.question(`Enter the 5th number: `);
arr.push(num5);
console.log(`arr: ${arr}`);
let num6 = readline.question(`Enter the 6th number: `);
arr.push(num6);
console.log(`arr: ${arr}`);

let newArr = arr.slice();
newArr.pop();

if (newArr.includes(arr[arr.length - 1])) {
  console.log(
    `The number ${num6} appears in ${num1},${num2},${num3},${num4},${num5}.`
  );
} else {
  console.log(
    `The number ${num6} does not appear in ${num1},${num2},${num3},${num4},${num5}.`
  );
}
