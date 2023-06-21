// Write a function that takes a string as an argument
// and returns that string with the first character of every word capitalized
// and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- first char of every word capitalized
- every word contains non-whitespace characters
- only alphabetic characters can be capitalized
- non-alphabetic characters are ignored

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'


-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

'four score and seven' => "Four Score And Seven"
['four`] => ['f', 'o', 'u', 'r'] => ['F', 'o', 'u', 'r'] => ['Four'] => 'Four' => 'Four' + ' ' + 'Score'...

given a string, return the string with the first character of each word capitalized

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// function `wordCap`
  // declare a variable `words` and initialize to the input string split into an array of words
  // declare a variable `capitalizedSentence` and initialize to an empty string
  // transform the `words` array and assign to a variable `capitalizedWords`
    // pass each word to a helper function `capitalize` and assign to a variable `capitalizedWord`
    // return `capitalizedWord`

  // loop over `capitalizedWords` array
    // append each word to the empty string followed by a space
  // return `capitalizedSentence`

// helper function `capitalize`
  // declare a variable `char` and initialize to the input string split into an array of characters
  // declare a variable `resultArr` and initialize to an empty array
  // loop over array of characters
    // if index is strictly equal to 0
      // capitalize the first character and append to `resultArr`
    // otherwise
      // append character to `resultArr`
  // join the characters together as a string and return the array
*/

function wordCap(str) {
  let words = str.split(' ');
  let capitalizedSentence = '';
  let capitalizedWords = words.map((word) => {
    let capitalizedWord = capitalize(word);
    console.log(`capitalizedWord: `, capitalizedWord);
    return capitalizedWord;
  });
  for (let index = 0; index < capitalizedWords.length; index += 1) {
    capitalizedSentence += capitalizedWords[index] + ' ';
  }

  return capitalizedSentence;
}

function capitalize(str) {
  let char = str.split('');
  let resultArr = [];

  for (let index = 0; index < char.length; index += 1) {
    if (index === 0) {
      resultArr.push(char[index].toUpperCase());
    } else {
      resultArr.push(char[index]);
    }
  }
  return resultArr.join('');
}

// LS solution

// function wordCap(words) {
//   return words
//     .split(' ')
//     .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

// 'four score and seven' => ['four', 'score', 'and', 'seven'] => ['Four', 'Score', 'And', 'Seven'] => "Four Score And Seven"

console.log(wordCap('four score and seven')); // "Four Score And Seven"
console.log(wordCap('the javaScript language')); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
