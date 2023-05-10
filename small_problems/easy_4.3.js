// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise.
// This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters.
// If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

/*
Understanding the [P]roblem
===========================
Input: string

Output: string

Rules:
- function should be case-insensitive
- function should ignore all non-alphanumeric characters, including spaces


[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

// `M` !== `m`

[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

*/
// function to convert string to lowercase
function toLowerCase(str) {
  return str.toLowerCase();
}
// function to remove non-alphanumeric characters
function removeAlphanumericChars(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}

function isRealPalindrome(str) {
  // change the input string to lowercase
  let lowerCasedStr = toLowerCase(str);
  // remove all non-alphanumeric characters
  lowerCasedStr = removeAlphanumericChars(lowerCasedStr);
  // split the string and assign to a variable `arr`
  let arr = lowerCasedStr.split('');
  // make a copy of `arr` and assign to a variable `arrCopy`
  let arrCopy = arr.slice();
  // declare and initialize a variable `newArr` to an empty array
  let newArr = [];
  // use a `for` loop to iterate over `arrCopy`
  for (let i = 0; i < arr.length; i++) {
    // remove last element of `arrCopy`and append to `newArr`
    newArr.push(arrCopy.pop());
    // use a conditional statement to check if current element of `newArr` matches current element of `arrCopy`
    if (newArr[i] === arr[i]) {
      // if so, continue
      continue;
    } else {
      // otherwise, return false
      return false;
    }
  }

  // return true
  return true;
}

console.log(isRealPalindrome('madam')); // true
console.log(isRealPalindrome('Madam')); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome('356653')); // true
console.log(isRealPalindrome('356a653')); // true
console.log(isRealPalindrome('123ab321')); // false
console.log(isRealPalindrome('123421')); // false
