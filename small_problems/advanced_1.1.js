/*

Build a madlibs program that takes a text "template" as input, plugs in a 
selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. 
You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. 
Your program should read this text and, for each line, 
place random words of the appropriate types into the text and return the result.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- return value must have a randomized selection of provided words from a list


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

Iterate through a collection of words and replace different variables that correspond with different categories of words

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// high level 

Given a string.

Transform input string into an array of words. 

Iterate through the array of words
  - If current word is a variable 
    - reassign the variable to a random word from a corresponding list

After iterating through the array, return the string that includes variables wrapped in template literals

// formal 

START

SET stringArray = string split into an array of words
SET iterator = 0
SET adjectives = []
SET adjective
SET nouns = []
SET noun
SET verbs = []
SET verb
SET adverbs = []
SET adverb

WHILE iterator < stringArray length
  SET currentWord = value in stringArray at space `iterator`
  IF currentWord === adjective
    reassign the variable to a random word from a corresponding list
    adjective = a random indexed word from the adjectives array
  IF currentWord === noun
    reassign the variable to a random word from a corresponding list
    noun = a random indexed word from the nouns array
  IF currentWord === verb
    reassign the variable to a random word from a corresponding list
    verb = a random indexed word from the verbs array
  IF currentWord === adverb
    reassign the variable to a random word from a corresponding list
    adverb = a random indexed word from the adverbs array
  iterator = iterator + 1

Join stringArray back into a string
PRINT string with template literals around variables

END
*/

// ----------------- first attempt

// function madlibs(template) {
//   let stringArray = template.split(' ');
//   let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
//   let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
//   let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
//   let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];

//   for (let index = 0; index < stringArray.length; index += 1) {
//     let currentWord = stringArray[index];

//     if (currentWord === 'adjective') {
//       stringArray[1] =
//         adjectives[Math.floor(Math.random() * adjectives.length)];
//     }
//     if (currentWord === 'noun') {
//       stringArray[3] = nouns[Math.floor(Math.random() * nouns.length)];
//     }
//     if (currentWord === 'adverb') {
//       stringArray[4] = adverbs[Math.floor(Math.random() * adverbs.length)];
//     }
//     if (currentWord === 'verb') {
//       stringArray[5] = verbs[Math.floor(Math.random() * verbs.length)];
//     }
//   }
//   return stringArray.join(' ');
// }

// let myTemplate = 'The adjective brown noun adverb verb the yellow duck.';

// console.log(madlibs(myTemplate));

// --------------- second attempt

/*

// high level 

Given a string.

Transform input string into an array of words. 

Iterate through the array of words
  - If current word is a variable 
    - reassign the variable to a random word from a corresponding list

After iterating through the array, return the string that includes variables wrapped in template literals

// formal 

START

SET madlibParts = list of values corresponding with each part of speech


WHILE iterator < stringArray length
  SET currentWord = value in stringArray at space `iterator`
  IF currentWord === adjective
    reassign the variable to a random word from a corresponding list
    adjective = a random indexed word from the adjectives array
  IF currentWord === noun
    reassign the variable to a random word from a corresponding list
    noun = a random indexed word from the nouns array
  IF currentWord === verb
    reassign the variable to a random word from a corresponding list
    verb = a random indexed word from the verbs array
  IF currentWord === adverb
    reassign the variable to a random word from a corresponding list
    adverb = a random indexed word from the adverbs array
  iterator = iterator + 1

Join stringArray back into a string
PRINT string with template literals around variables

END

*/

/*
Create a string template with unique identifiers for parts of speech so they could be replaced with random speech words
  - add a unique identifier for each parts of speech word

Replace the pattern in the string that corresponds with a part of speech
  - create an object to store the list of values
  - match the unique identifier
  - remove the unique identifier, leaving only the content type that corresponds with the content types and values in the object
  - use the content type as a key to access the object's list of values
  - replace the pattern with the value from the object

Return the string

START

SET `madlibParts` = object with arrays of speech parts 
SET `match` = pattern to match with unique identifier

SET `replacePart` = SUBPROCESS
  SET key = replaced pattern (matched pattern with removed identifier) used as key to access `madlibParts`
  SET index = random index for each object value
  PRINT retrieved madlib part from object using key and index

PRINT return value from calling `replacePart` passing in `match`

END

*/
// function madlibs(template) {
//   const madlibParts = {
//     adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
//     noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
//     verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
//     adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
//   };

//   function replacePart(match) {
//     let key = match.replace(/[^a-z]/g, '');
//     let index = Math.floor(Math.random() * madlibParts[key].length);

//     return madlibParts[key][index];
//   }
//   let match = /%{[a-z]+}/g;
//   return template.replace(match, replacePart);
// }

// let myTemplate1 =
//   'The %{adjective} brown %{noun} %{adverb} %{verb} the %{adjective} yellow %{noun}, who %{adverb} %{verb} his %{noun} and looks around.';
// let myTemplate2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

// console.log(madlibs(myTemplate1));
// console.log(madlibs(myTemplate2));

let match = /%{[a-z]+}/g;
let template = 'The  %{adjective}';
console.log(`stringLength: `, template.length);

let test = template.replace(match, replaceSubstring);

console.log(test);
console.log(`newLength: `, test.length);

function replaceSubstring(match) {
  let substring = /[^a-z]/g;
  return match.replace(substring, /\s/);
}
