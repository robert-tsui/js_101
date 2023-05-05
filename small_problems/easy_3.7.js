// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits.
// For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number;
// otherwise, return the double number as-is.

/*
Understanding the [P]roblem
===========================
Input: number

Output: number

Rules:
- a double number is an even-length number (missed this rule)
- argument is any integer, including double numbers and non-double numbers
- if argument is not a double number, return the value multiplied by 2
- otherwise, return as-is

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- test if argument is a double number within a conditional statement that returns a doubling of the number unless it's a double number

// double number

44 => 4 => 4
103103 => 1 => 0 => 3 => 1
[103] [103]

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// push to first array if no duplicates found
// push to second array if duplicates found
// compare values in both arrays
  // if all matching then return number from first array
  // else multiply input number by 2 and return the value

// notes: algorithm only compares the current value with the previous value when any value in a previous index can match the right side of the string
*/

function twice(num) {
  let arr = [];
  arr.push(num);
  let strNum = num.toString();
  let arr2 = [];

  for (let i = 0; i < strNum.length; i++) {
    let currNum = strNum[i];
    let prevNum = strNum[i - 1];

    if (currNum !== prevNum) {
      arr.push(currNum);
    } else if (currNum === prevNum) {
      arr2.push(currNum);
    }
    console.log(`arr: ${arr}`);
    console.log(`arr2: ${arr2}`);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) {
      return num;
    } else {
      return num * 2;
    }
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
console.log(twice(103103)); // 103103
twice(3333); // 3333
twice(7676); // 7676

// LS recall attempt

// function twice(num) {
//   if (isDoubleNumber(num)) {
//     return num;
//   } else {
//     return num * 2;
//   }
// }

// function isDoubleNumber(num) {
//   let strNum = num.toString();
//   let middle = Math.floor(Number(strNum.length / 2));
//   let leftStr = strNum.substring(0, middle);
//   let rightStr = strNum.substring(middle);

//   return leftStr === rightStr;
// }

// console.log(twice(37)); // 74
// console.log(twice(44)); // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// console.log(twice(103103)); // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676
