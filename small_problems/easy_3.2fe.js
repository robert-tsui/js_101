// Modify this function so that it truncates the message
// if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself).
// You may assume no maximum if the second argument is omitted.

function logInBox(str, max) {
  let numOfSpaces;
  let numOfDashes;
  let truncatedStr = '';

  if (max) {
    numOfSpaces = `|${' '.repeat(max)}|`;
    numOfDashes = `+${'-'.repeat(max)}+`;
  } else {
    numOfSpaces = `|${' '.repeat(str.length + 2)}|`;
    numOfDashes = `+${'-'.repeat(str.length + 2)}+`;
  }

  for (let i = 0; i < str.length; i++) {
    truncatedStr += str[i];
    if (i === max - 3) {
      break;
    }
  }

  console.log(numOfDashes);
  console.log(numOfSpaces);
  if (str === '') {
    console.log(`| ${' '.repeat(max - 2)} |`);
  } else if (max > str.length) {
    let longStr = `${' '.repeat(max - str.length - 2)}`;
    console.log(`| ${truncatedStr}${longStr} |`);
  } else {
    console.log(`| ${truncatedStr} |`);
  }
  console.log(numOfSpaces);
  console.log(numOfDashes);
}

logInBox('', 100);
logInBox('');
logInBox('Hello world.', 5);
logInBox('To boldly go where no one has gone before.', 5);
logInBox('Nice to meet you.', 100);

// Student submitted

// function logInBoxWrap (str, max) {
//   let topAndBottom = [`+${"-".repeat(max - 2)}+`,`|${" ".repeat(max - 2)}|`];
//   let strArray = str.split('');
//   let txtLines = [];

//   while (strArray.length) {
//     let line = `| ${strArray.splice(0, max - 4).join('')}`;
//     if (line.length < max - 2) {
//       txtLines.push(`${line.concat(' '.repeat(max - line.length - 2))} |`);
//     } else {
//       txtLines.push(line + " |");
//     }
//   }

//   topAndBottom.forEach(line => console.log(line));
//   txtLines.forEach(line => console.log(line));
//   topAndBottom.reverse().forEach(line => console.log(line));
// }
// logInBoxWrap('To boldly go where no one has gone before.', 25);
/*logs:
+-----------------------+
|                       |
| To boldly go where no |
|  one has gone before. |
|                       |
+-----------------------+
*/
