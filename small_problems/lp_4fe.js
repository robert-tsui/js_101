// Rewrite leadingSubstrings using list processing functions.
// That is, convert the string into an array of some sort and use functions like map, filter, or reduce to get the desired substrings.
// (You will also need to use join.) Try not to use forEach as that is too similar to the for loop approach.

function leadingSubstrings(str) {
  let strArr = str.split('');
  return strArr.map((_, i, arr) => {
    return arr.slice(0, i + 1).join('');
  });
}

// student solution

// function leadingSubstrings(string) {
//   let characters = string.split('');
//   console.log(characters);
//   let stringSubstring = '';
//   let substrings = characters.map((char) => (stringSubstring += char));
//   return substrings;
// }

console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a')); // ["a"]
// console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
