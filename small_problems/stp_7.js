// Modify the function from the previous exercise
// so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter.
// The non-alphabetic characters should still be included in the return value;
// they just don't count when toggling the desired case.

/*
Understanding the [P]roblem
===========================
Input: str

Output: str

Rules:
- non-alphabetic characters don't count when determining case but should be returned 

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

'I Love Launch School!' => ['I', 'L', 'o', 'v', 'e', ' ', ...]

for alphabetic chars, start with lowercase => check case state => toggle case state => convert to opposite case

["I lOvE lAuNcH sChOoL!"] => "I lOvE lAuNcH sChOoL!"


[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// mental model: convert current character to lowercase, check if character is alphabetic character, check case state, toggle case state and convert to opposite case, otherwise return non-alphabetic character
// convert first character to lowercase
// is it lowercase character?
// check case state: does it need upper or lowercase?
// toggle case state
// convert to opposite case
// else, return non-alphabetic character
*/

function staggeredCase(str) {
  let needUpper = true;
  return str
    .split('')
    .map((char) => {
      char = char.toLowerCase(); // 0: I, 1: " ", 2: L, 3: o, 4: v, 5: e, 6: " ", 7: L, 8: a
      if (char >= 'a' && char <= 'z') {
        // 0: i, 2: L, 3: o, 4: v, 5: e, 7: L, 8: a
        if (needUpper) {
          needUpper = false; // 0: false, 3: false, 5: false, 8: false
          return char.toUpperCase(); // 0: i => I, 3: o => O, 5: e => E, 8: a => A
        } else {
          needUpper = true; // 2: true, 4: true, 7: true
          return char.toLowerCase(); // 2: L => l, 4: v => v, 7: L => l
        }
      } else {
        return char; // 1: " ", 6: " "
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!')); // === 'I lOvE lAuNcH sChOoL!');
// console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
// console.log(
//   staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
// );
