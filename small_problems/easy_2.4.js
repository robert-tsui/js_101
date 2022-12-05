/* 

INPUTS AND OUTPUTS

i: Number
o: Number

EXPLICIT REQUIREMENTS  
- compute the square of its argument

MENTAL MODEL
- given a number, compute the square of its argument and return the result

EXAMPLES/TEST CASES

validation example 1
i: negative power
o: 1/125

console.log(powerToThe(5, -3) === 1/125); // logs true

validation example 2
i: zero power
o" 1

console.log(powerToThe(5, 0) === 1); // logs true

DATA STRUCTURE/ALGORITHM
// multiply num by itself
// return the result

*/

// solution #1

function powerToThe(base, power) {
  if (power === 0) {
    return 1;
  }

  let negativePower = false;
  if (power < 0) {
    negativePower = true;
  }

  power = Math.abs(power);

  let output = 1;
  for (let i = 1; i <= power; i++) {
    output = multiply(output, base);
  }

  if (negativePower) {
    return 1 / output;
  } else {
    return output;
  }
}

function multiply(num1, num2) {
  return num1 * num2;
}

// recursive solution

// function multiply(first, second) {
//   return first * second;
// }

// function toPower(base, power) {
//   if (power === 1) {
//     return base;
//   } else {
//     return multiply(base, toPower(base, power - 1));
//   }
// }

// console.log(toPower(5, 4)); // 625

console.log(powerToThe(5, 0) === 1); // logs true
console.log(powerToThe(5, -3) === 1 / 125); // logs true
console.log(powerToThe(5, 1) === 5); // logs true
console.log(powerToThe(5, 2) === 25); // logs true
console.log(powerToThe(-8, 2) === 64); // logs true
console.log(powerToThe(5, 3) === 125); // logs true
console.log(powerToThe(5, 4) === 625); // logs true
