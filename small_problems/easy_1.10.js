/* 

INPUTS AND OUTPUTS

i: integer (greater than 1)
o: integer

EXPLICIT REQUIREMENTS  

- sum of all numbers between 1 and input number, inclusive
- all numbers must be multiples of 3 or 5
- integer greater than 1 

IMPLICIT REQUIREMENTS

- each number can be a multiple of 3 or 5

MENTAL MODEL
compute the sum of incrementing numbers that are divisible by 3 or 5 and return the sum

EXAMPLES/TEST CASES

validation example 1

input: 20
output: 98
sum of all numbers between 1 and 20: 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

DATA STRUCTURE/ALGORITHM

// declare a counter variable sum and assign a value of 0
// initialize a for loop to increment counter
  // write an if statement to check if i is divisible by 3 or 5
    // if so, add to counter variable
// return sum
*/

function multisum(num) {
  let sum = 0;
  for (let i = 3; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
