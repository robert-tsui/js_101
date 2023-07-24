/*

Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.

*/

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/*
Understanding the [P]roblem
===========================
Input: string

Output: object

Rules:
- 3 key value pairs in object
- characters include non-alphanumeric characters

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements


-- Intermission --
'abCdef 123' => ['a', 'b', 'C', 'd', 'e', 'f', '1', '2', '3']

total char count => array length
other char counts => update key value pair

[D]ata Structure
================
- Do I need an array or an object for my solution? object

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare a variable `counterObject` and initialize to an empty object
// declare a variable `stringArray` and initialize to the input string split into an array of characters
// iterate over `stringArray`
  // if current char is a lowercase letter 
    // update `counterObject` as a percentage
  // if current char is an uppercase letter
    // update `counterObject` as a percentage
  // if current char is neither uppercase or lowercase letter
    // update `counterObject` as a percentage
// return `counterObject`

*/

function letterPercentages(string) {
  let percentages = { lowercase: 0, uppercase: 0, neither: 0 };
  let stringArray = string.split('');
  for (let index = 0; index < stringArray.length; index += 1) {
    let currentChar = stringArray[index];
    if (isLetter(currentChar) && currentChar === currentChar.toLowerCase()) {
      percentages.lowercase += 1;
    } else if (
      isLetter(currentChar) &&
      currentChar === currentChar.toUpperCase()
    ) {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  }

  for (let key in percentages) {
    percentages[key] = ((percentages[key] / stringArray.length) * 100).toFixed(
      2
    );
  }

  return percentages;
}

function isLetter(character) {
  return (
    (character >= 'a' && character <= 'z') ||
    (character >= 'A' && character <= 'Z')
  );
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
