// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
questions:
- what is a palindrome?
- what should I return if I have an empty string?
- what should I return if I find no palindromes?
- what is a substring?*
- what if the input is not a string?*
- what does it mean to treat palindrome words case-sensitively?*

i: string
o: array of substrings
implicit rules: 
- if input has no palindromes found, return an empty array
- if input is an empty string, return an empty array
- output should be an array of palindromes

explicit rules: 
- palindrome words are case sensitive, meaning "abBA" is not a palindrome.*
- return all substrings that are palindrome
*/
