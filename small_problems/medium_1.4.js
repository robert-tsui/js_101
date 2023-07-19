/*

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

*/

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

/*
Understanding the [P]roblem
===========================
Input: string

Output: number

Rules:
- value is followed by operation
- keep a record of the stack and register
[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

[3, 4, 5] // PUSH, PUSH, PUSH
REGISTER: 5 // STACK [3, 4, 5]
REGISTER: 5 + 5 // STACK [3, 4]
REGISTER: 10 // STACK [3,4]
REGISTER: 4 // STACK [3]
REGISTER: 4 // STACK []
REGISTER: 7 // STACK []

'3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'
- intialize the stack and register to the values [] and 0, respectively.
- split string into array of operations and values
- loop over array
- create a conditional statement to verify operations
- print and return values

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
// declare a variable `stack` and initialize to an empty array
// declare a variable `register` and initialize to 0;
// declare a variable `inputArr` and initialize to the return value of splitting the input string into separate operations and values
// loop over `stackArr` for as long as the length of `stackArr`
  // create a control flow statement for all the operations
    // `n`
      // reassign and add the value of `n` to the `register`
    // PUSH
      // append the value to the `stack`
    // ADD
      // pop the topmost value from the `stack` then reassign and add the value to the `register`
    // SUB
      // pop the topmost value from the `stack` then reassign and subtract the value from the `register`
    // MULT
      // pop the topmost value from the `stack` then reassign and multiply the value by the `register`
    // DIV
      // pop the topmost value from the `stack` then reassign and divide the `register` value by the stack value
    // REMAINDER
      // pop the topmost value from the `stack` then reassign and divide the `register` value by the stack value, storing the integer remainder of the division
    // POP
      // pop the topmost value from the `stack` then reassign the value to the `register`
    // PRINT
      // print the `register` value
*/

function minilang(string) {
  let stack = [];
  let register = 0;
  let inputArray = string.split(' ');
  for (let index = 0; index < inputArray.length; index += 1) {
    let token = inputArray[index];
    switch (token) {
      case 'PRINT':
        console.log(register);
        console.log('PRINT');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'PUSH':
        stack.push(register);
        console.log('PUSH');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'ADD':
        register += stack.pop();
        console.log('ADD');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'SUB':
        register -= stack.pop();
        console.log('SUB');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'MULT':
        register *= stack.pop();
        console.log('MULT');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        console.log('DIV');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        console.log('REMAINDER');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      case 'POP':
        register = stack.pop();
        console.log('POP');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
        break;
      default:
        register = Number(token);
        console.log('DEFAULT');
        console.log(`stack: `, stack);
        console.log(`register: `, register);
    }
  }

  return register;
}

// console.log(minilang('PRINT'));
// 0

// console.log(minilang('5 PUSH 3 MULT PRINT'));
// // 15

// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// // 5
// // 3
// // 8

// console.log(minilang('5 PUSH POP PRINT'));
// // 5

// console.log(
//   minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
// );
// // 5
// // 10
// // 4
// // 7

// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

// console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// // 12

// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// // 8

// console.log(minilang('6 PUSH'));
// // (nothing is printed because the `program` argument has no `PRINT` commands)
