function isBalanced(str) {
  let parens = 0;
  let brackets = 0;
  let quotes = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === '(' ||
      str[i] === '[' ||
      str[i] === '{' ||
      str[i] === '"' ||
      str[i] === "'"
    ) {
      parens += 1;
      brackets += 1;
      if (quotes === 0) {
        quotes += 1;
      } else if (quotes >= 1) {
        quotes -= 1;
      }
    } else if (str[i] === ')' || str[i] === ']' || str[i] === '}') {
      parens -= 1;
      brackets -= 1;
    }
    if (parens < 0 || brackets < 0) {
      return false;
    }
  }

  return parens === 0 || brackets === 0 || quotes === 0;
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);
console.log(isBalanced('What [is] this?') === true);
console.log(isBalanced('What {is} this?') === true);
console.log(isBalanced('What "is" this?') === true);
console.log(isBalanced('What `is` this?') === true);
