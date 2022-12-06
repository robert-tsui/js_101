/* 

INPUTS AND OUTPUTS

i: String
o: String

EXPLICIT REQUIREMENTS  
- return the middle word of a sentence (passed as arg)
- strings can contain no words or just one word
- assume input String always contains at least 2 words

IMPLICIT REQUIREMENTS

CLARIFYING QUESTIONS  
what happens if the string contains no words?
what happens if the string contains one word?

MENTAL MODEL
iterate through input String to find next to last word and return that word

EXAMPLES/TEST CASES

validation example 1
i: String (empty)
o: String (empty)

console.log(penultimate("") === "Oops. Can't find the middle word with no words."); // logs true

validation example 2
i: String (blank characters)
o: String (empty)

console.log(penultimate(" ") === "Oops. Can't find the middle word with no words."); // logs true

validation example 3
i: String (one word)
o: String (empty)

console.log(penultimate("word") === "Oops. Can't find the middle word with one word."); // logs true

validation example 4
i: String (two words)
o: String (empty)

console.log(penultimate("two words") === ""); // logs true

validation example 5
i: String (three words)
o: String (middle word)

console.log(penultimate("three word sentence") === "word"); // logs true

DATA STRUCTURE/ALGORITHM

// declare a variable wordArray and assign it the value of using the split method on the input string
// grab the middle word by using `wordsArray.length / 2`
// return wordsArray

*/

function findMiddleWord(wordsArray, counter) {
  let output;

  for (let i = 0; i < counter; i++) {
    output = wordsArray.shift();
    output = wordsArray.pop();
    output = wordsArray[0];
  }

  return output;
}

function penultimate(str) {
  if (str === '' || str === ' ') {
    return "Oops. Can't find the middle word with no words.";
  }
  let wordsArray = str.split(' ');

  if (wordsArray.length <= 2) {
    return "Oops. Can't find the middle word with one or two words.";
  }

  if (wordsArray.length % 2 === 0) {
    return "Oops. Can't find the middle word in your sentence.";
  }
  let counter = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    counter++;
  }

  if (counter % 2 !== 0) {
    counter = (counter - 1) / 2;
  }

  let middleWord = findMiddleWord(wordsArray, counter);

  return middleWord;
}

console.log(
  penultimate('nine word sentence one two three four five six') === 'two'
); // logs true
console.log(penultimate('seven word sentence one two three four') === 'one'); // logs true
console.log(penultimate('three word sentence') === 'word'); // logs true
console.log(penultimate('five word sentence one two') === 'sentence'); // logs true
console.log(
  penultimate('') === "Oops. Can't find the middle word with no words."
); // logs true
console.log(
  penultimate(' ') === "Oops. Can't find the middle word with no words."
); // logs true
console.log(
  penultimate('word') ===
    "Oops. Can't find the middle word with one or two words."
); // logs true

console.log(
  penultimate('word word word word') ===
    "Oops. Can't find the middle word in your sentence."
); // logs true
