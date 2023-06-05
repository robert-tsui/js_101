// using map

const WORD_LENGTH_MINIMUM = 5;

function reverseWords(str) {
  let resultArr = [];
  let strArr = str.split(' ');

  strArr.map((word) => {
    if (word.length >= WORD_LENGTH_MINIMUM) {
      resultArr.push(reverseWord(word));
    } else {
      resultArr.push(word);
    }
  });

  return resultArr.join(' ');
}

function reverseWord(str) {
  return str.split('').reverse().join('');
}

console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"
