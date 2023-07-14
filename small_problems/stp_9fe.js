/*
The current solution matches the word even when it is just a part of a bigger word, 
instead of a whole word by itself. For example, when searching for 'qui' in the text, 
this solution would also return 'quia' as a match:
*/

// searchWord('qui', text); // should return 4, NOT 13

/*
Can you refactor the current solution so that it only matches whole words? 
In addition to this, can you also include input validation to handle cases 
in which one or both arguments are missing?

Hint: If you cannot figure out how to match whole words only, 
check out this section of our Introduction to Regular Expressions book.
*/

const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
  let regex = new RegExp('\\b' + word + '\\b', 'gi');
  let matches = text.match(regex);
  return matches ? matches.length : 0;
}
// console.log(searchWord('sed', text)); // 3
console.log(searchWord('qui', text)); // should return 4, NOT 13
