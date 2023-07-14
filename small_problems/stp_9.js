// Write a function that takes two arguments, a word and a string of text,
// and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided,
// and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.
// Also assume that the search is case-insensitive.

/*
Understanding the [P]roblem
===========================
Input: string, string

Output: number

Rules:
- arguments always provided
- all word breaks are spaces
  - some words includes periods and commas
- search is case-insensitive 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

// given a string of text and a word, return the number of times that word appears in that string of text

'sed', text => 3

'sed ut perspiciatis' => ['sed', 'ut', 'perspiciatis'] => 3

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `counter` and initialize to 0
// split input string into an array of words
// filter the array of words
  // if word is equal to the input word
      // increment counter by 1
*/

// case sensitive solution

// function searchWord(searchWord, text) {
//   let counter = 0;
//   text.split(' ').forEach((word) => {
//     if (word.toLowerCase() === searchWord) {
//       counter += 1;
//     }
//   });

//   return counter;
// }

const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// LS solution

function searchWord(word, text) {
  let regex = new RegExp(word, 'gi');
  let matches = text.match(regex);
  return matches ? matches.length : 0;
}
console.log(searchWord('sed', text)); // 3
