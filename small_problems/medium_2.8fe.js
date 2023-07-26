// find longest paragraph

function longestParagraph(string) {
  let obj = {};
  let highestCount = 0;
  let longestParagraph;
  let regex = /\/n/g;
  let eachParagraph = string.split(regex);
  for (let index = 0; index < eachParagraph.length; index += 1) {
    let single = eachParagraph[index];
    let wordsCounted = countWords(single);
    obj[single] = wordsCounted;
  }
  function countWords(single) {
    return single.split(' ').length;
  }
  for (let key in obj) {
    let count = obj[key];
    if (count > highestCount) {
      highestCount = count;
      longestParagraph = key;
    }
  }
  return `${longestParagraph}\n\nThe longest paragraph has ${highestCount} words.`;
}

// find longest word
function longestWord(string) {
  let obj = {};
  let highestCount = 0;
  let longestWord;
  let eachWord = string.split(' ');
  for (let index = 0; index < eachWord.length; index += 1) {
    let singleWord = eachWord[index];
    let wordsCounted = countLetters(singleWord);
    obj[singleWord] = wordsCounted;
  }
  function countLetters(singleWord) {
    return singleWord.split('').length;
  }
  for (let key in obj) {
    let count = obj[key];
    if (count > highestCount) {
      highestCount = count;
      longestWord = key;
    }
  }
  return `${longestWord}\n\nThe longest word has ${highestCount} letters.`;
}

console.log(
  longestWord(
    'It is rather for us to be here dedicated to the great task remaining before us.'
  )
);
