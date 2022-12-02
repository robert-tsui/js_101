/* 

INPUTS AND OUTPUTS

i: String
o: Number

EXPLICIT REQUIREMENTS  

- sum of all UTF-16 values of every character
- you may use String.prototype.charCodeAt() to determine the UTF-16 value of a character

IMPLICIT REQUIREMENTS

- input string can be empty
- string must have characters

CLARIFYING QUESTIONS  

MENTAL MODEL

determine UTF-16 values of every character in input string and compute the sum of all values

EXAMPLES/TEST CASES

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

DATA STRUCTURE/ALGORITHM

// declare a counter variable sum and assign value of 0
// initialize a for loop to iterate over string
 // on each round, determine the UTF-16 value of each character
 // add UTF-16 value to sum variable

// return sum

*/

function utf16Value(str) {
  let sum = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    console.log(`i: ${i}`);
    console.log(`utf: ${str.charCodeAt(i)}`);
    sum += str.charCodeAt(i);
  }

  return sum;
}

console.log(utf16Value('Four score')); // 984
console.log(utf16Value('Launch School')); // 1251
console.log(utf16Value('a')); // 97
console.log(utf16Value('')); // 0
