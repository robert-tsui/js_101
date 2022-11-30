/* 

INPUTS AND OUTPUTS

i: String (2)
o: String (short, long, short in that order)

EXPLICIT REQUIREMENTS  

strings are of different lengths
determine length of two input strings
return the result of concatenating the shorter string, the longer string, and the shorter string once again

IMPLICIT REQUIREMENTS

string can be empty

MENTAL MODEL

determine length of both input strings. return the result of concatenating the shorter string, the longer string, and the shorter string once again


EXAMPLES/TEST CASES

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

DATA STRUCTURE/ALGORITHM

Solution #1

1. declare counter variables for each string input
2. use a for loop to count the number of characters in each string
3. write an if statement to determine which string is longer
4. return string concatenation

Solution #2

1. use the length method on the input string objects to compare the number of characters in each string
2. write an if statement to determine which string is longer
3. return string concatenation 

*/

/* Solution #1

function shortLongShort(str1, str2) {
  let counterForStr1 = 0;
  let counterForStr2 = 0;
  let result = '';
  for (let i = 1; i <= str1.length; i++) {
    counterForStr1 += 1;
    console.log(`counterForStr1: ${counterForStr1}`);
  }
  for (let i = 1; i <= str2.length; i++) {
    counterForStr2 += 1;
    console.log(`counterForStr2: ${counterForStr2}`);
  }
  if (counterForStr1 > counterForStr2) {
    result = str2 + str1 + str2;
  } else if (counterForStr1 < counterForStr2) {
    result = str1 + str2 + str1;
  }

  return result;
}

*/

// Solution #2

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

// console.log(shortLongShort('abc', 'defgh'));
// console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
