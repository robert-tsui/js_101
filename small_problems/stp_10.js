/*
The function from the previous exercise returns the number of occurrences of a word in some text. 
Although this is useful, there are also situations in which 
we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, 
and returns the text with every instance of the word highlighted. 
To highlight a word, enclose the word with two asterisks ('**') on each side 
and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').
*/

const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// solution with regex

// function searchWord(word, sourceText) {
//   let regex = new RegExp(`\\b${word}\\b`, 'gi');
//   let highlightedText = sourceText.replace(regex, `**${word.toUpperCase()}**`);
//   return highlightedText;
// }

// solution without regex

function searchWord(word, text) {
  let ucWord = word.toUpperCase();
  let highlightedText = [];
  let wordsInText = text.split(' ');

  for (let index = 0; index < wordsInText.length; index += 1) {
    let currentWord = wordsInText[index];
    if (currentWord.toUpperCase() === ucWord) {
      currentWord = `**${word.toUpperCase()}**`;
    }

    highlightedText.push(currentWord);
  }

  return highlightedText.join(' ');
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"
