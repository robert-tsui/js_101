// declare a variable newStr and assign to empty string to represent the new string of mutated characters
// use a for loop to iterate over input string
// check if the current character is strictly equal to the last character
// if true, skip to next iteration round
// otherwise, concatenate character to newStr
// return newStr

function crunch(str) {
  let newStr = '';
  let index = 0;
  let regex = /[a-z]{2}/;
  while (index <= str.length - 1) {
    if (str.match(regex)) {
      newStr += str[index];
    }
    index += 1;
  }

  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
// crunch('4444abcabccba'); // "4abcabcba"
// crunch('ggggggggggggggg'); // "g"
// crunch('a'); // "a"
// crunch(''); // ""
