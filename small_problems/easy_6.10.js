// Write a function that takes a string as an argument
// and returns true if all parentheses in the string are properly balanced, false otherwise.
// To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

/*
Understanding the [P]roblem
===========================
Input: string

Output: boolean

Rules:

- output returns true if parentheses are balanced, i.e. matching '(' and ')' pairs; false otherwise


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an input string, return true if parentheses are balanced, false otherwise
"What (is) this?" => true
"What is) this?" => false

iterate string
conditional check if the number of left parentheses is equal to the number of right parentheses
if so, return true; else return false

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize `leftParensCounter` for left parentheses symbol to 0
// declare and initialize `rightParensCounter` for right parentheses symbol to 0
// create a loop to iterate over input string
  // check if current character is equal to `(`
    // if so, increment `leftParensCounter` by 1
  // check if current character is equal to `)`
    // if so, increment `rightParensCounter` by 1
// create a conditional check to see if `leftParensCounter` is equal to `rightParensCounter`
  // if so, return `true`
  // else, return `false`

*/

function isBalanced(str) {
  let leftParensCounter = 0;
  let rightParensCounter = 0;

  let leftParens;
  let rightParens;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === `(`) {
      leftParensCounter += 1;
      leftParens = i;
    }
    if (str[i] === `)`) {
      rightParensCounter += 1;
      rightParens = i;
    }
  }

  return (
    (leftParensCounter === rightParensCounter && leftParens < rightParens) ||
    (leftParensCounter === 0 && rightParensCounter === 0)
  );
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);
