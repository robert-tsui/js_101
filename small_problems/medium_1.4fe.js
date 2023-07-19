/*
rules
- report empty stack conditions (trying to use a value from the stack when there are no values)
- report invalid tokens in the program
- return an error message if an error occurs
- return undefined if the program runs successfully.
*/

const VALID_TOKENS = [
  'PUSH',
  'POP',
  'PRINT',
  'ADD',
  'SUB',
  'MULT',
  'DIV',
  'REMAINDER',
];

function minilang(string) {
  let stack = [];
  let register = 0;
  let inputArray = string.split(' ');
  for (let index = 0; index < inputArray.length; index += 1) {
    let token = inputArray[index];
    switch (token) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        if (arrayLengthIsZero(stack)) {
          console.log("There's no value to pop off the stack!");
        }
        register += stack.pop();
        break;
      case 'SUB':
        if (arrayLengthIsZero(stack)) {
          console.log("There's no value to pop off the stack!");
        }
        register -= stack.pop();
        break;
      case 'MULT':
        if (arrayLengthIsZero(stack)) {
          console.log("There's no value to pop off the stack!");
        }
        register *= stack.pop();
        break;
      case 'DIV':
        if (arrayLengthIsZero(stack)) {
          console.log("There's no value to pop off the stack!");
        }
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        if (arrayLengthIsZero(stack)) {
          console.log("There's no value to pop off the stack!");
        }
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        if (arrayLengthIsZero(stack)) {
          console.log("There's no value to pop off the stack!");
        }
        register = stack.pop();
        break;
      default:
        if (Number(token) !== 'number' && !VALID_TOKENS.includes(token)) {
          console.log(`You have an invalid token!`);
        }
        register = Number(token);
    }
  }

  return register;
}

function arrayLengthIsZero(arr) {
  return arr.length === 0;
}

console.log(minilang(`Hello PUSH`));
