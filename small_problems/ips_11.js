// if you call splice on the words array while it's been iterated on during the forEach call, the indeces of the negative words will shift by 1 increment which causes the splice method to splice the wrong word

function neutralize(sentence) {
  let words = sentence.split(' ');
  let filteredWords = words.filter((word) => {
    return !isNegative(word);
  });
  return filteredWords.join(' ');
}

function isNegative(word) {
  return ['dull', 'boring', 'annoying', 'chaotic'].includes(word);
}

console.log(
  neutralize('These dull boring cards are part of a chaotic board game.')
);
