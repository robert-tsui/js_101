// Modify this function so the caller can determine whether non-alphabetic characters
// should be counted when determining the upper/lowercase state.
// That is, you want a function that can perform the same actions that this function does,
// or that operates like the previous version.

function staggeredCase(str) {
  return str
    .split('')
    .map((char, i) => {
      if (i % 2 === 0) {
        return char.toUpperCase();
      } else if (i % 2 === 1) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

function staggeredCase(string) {
  let needUpper = true;

  return string
    .split('')
    .map((char) => {
      char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join('');
}

function furtherExploredCase(str, useIndex = true) {
  let needUpper = true;

  return str
    .split('')
    .map((char, index) => {
      if (useIndex) {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else if (index % 2 === 1) {
          return char.toLowerCase();
        } else {
          return char;
        }
      } else {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
          if (needUpper) {
            needUpper = false;
            return char.toUpperCase();
          } else {
            needUpper = true;
            return char.toLowerCase();
          }
        } else {
          return char;
        }
      }
    })
    .join('');
}

console.log(furtherExploredCase('I Love Launch School!', true));
console.log(furtherExploredCase('I Love Launch School!', false));
