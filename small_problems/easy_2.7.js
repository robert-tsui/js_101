/* 

INPUTS AND OUTPUTS

i: 2 arguments
o: Boolean (true or false)

EXPLICIT REQUIREMENTS  
- output returns true only if exactly one of its arguments is truthy or falsy

IMPLICIT REQUIREMENTS
- inputs can be any value

CLARIFYING QUESTIONS  
- what kind of data types can be passed in as arguments? any type

MENTAL MODEL
return true or false by checking if only one argument is truthy

EXAMPLES/TEST CASES

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

DATA STRUCTURE/ALGORITHM
// check if the first argument is truthy and if the second argument is not truthy
  // return true
*/

// function xor(arg1, arg2) {
//   if (!arg2 && !arg1) {
//     return false;
//   } else if (arg1 && !arg2) {
//     return true;
//   } else if (arg2 && !arg1) {
//     return true;
//   }
// }

// function xor(arg1, arg2) {
//   if ((arg1 && !arg2) || (arg2 && !arg1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function xor(arg1, arg2) {
  if ((!arg1 && arg2) || (!arg2 && arg1)) {
    return true;
  } else return false;
}

console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(false, false) === false);
