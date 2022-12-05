/* 

INPUTS AND OUTPUTS

i: String
o: String

EXPLICIT REQUIREMENTS  
- return the next to last word in String (passed as arg)
- words are any non-blank characters
- assume input String always contains at least 2 words

IMPLICIT REQUIREMENTS

CLARIFYING QUESTIONS  

MENTAL MODEL
iterate through input String to find next to last word and return that word

EXAMPLES/TEST CASES
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

DATA STRUCTURE/ALGORITHM

// declare a helper function `removeWords` 
// declare a variable `output`
// initialize a for loop to iterate over `wordCount`
  // assign `output` to the value of using the Array.prototype.pop method to pop off the last element of the array twice
// return output

// declare a main function `penultimate` that takes an input string
// declare a new variable `arr` and assign to an empty array
// assign `arr` to using the String.prototype.split method to split each word into the new array
// declare a new variable `nextToLast` and assign to the evaluated result of invoking `removeWords` passing in `arr` and `wordCount` as arguments
// return `nextToLast`

*/

// solution #1

function removeWords(arr, wordCount) {
  let output;
  for (let i = 0; i < wordCount; i++) {
    output = arr.pop();
  }
  return output;
}

function penultimate(str) {
  let arr = [];
  arr = str.split(' ');
  let nextToLast = removeWords(arr, 2);
  return nextToLast;
}

// solution #2

function penultimate(str) {
  let nextToLastArr = str.split(' ');
  return nextToLastArr[nextToLastArr.length - 2];
}

console.log(penultimate('Launch School is great!') === 'is'); // logs true
console.log(penultimate('removes the last element from') === 'element'); // logs true
console.log(penultimate('changes the length of the array') === 'the'); // logs true
