function hollowDiamond(number) {
  let asterisks = '*';
  let countOfAsterisks = 0;
  let spaces = ' ';
  let numOfspaces;
  if (number === 1) {
    return console.log(asterisks);
  }
  for (let row = 1; row <= number; row += 1) {
    // console.log(`row: `, row);
    if (row === 1) {
      countOfAsterisks += 1;
      // console.log(`countOfAsterisks: `, countOfAsterisks);
      // console.log(`number: `, number);
      numOfspaces = (number - countOfAsterisks) / 2;
      // console.log(`numOfspaces: `, numOfspaces);
      console.log(spaces.repeat(numOfspaces) + asterisks);
    } else if (row > 1) {
      countOfAsterisks += 2;
      // console.log(`countOfAsterisks: `, countOfAsterisks);
      // console.log(`numOfspaces: `, numOfspaces);
      numOfspaces = (number - countOfAsterisks) / 2;
      console.log(
        spaces.repeat(numOfspaces) +
          asterisks +
          spaces.repeat(countOfAsterisks - 2) +
          asterisks
      );
    }
    if (countOfAsterisks === number) break;
  }
  for (let row = 1; row <= number; row += 1) {
    console.log(`row: `, row);
    countOfAsterisks -= 2;
    if (countOfAsterisks === 1) {
      console.log(`countOfAsterisks: `, countOfAsterisks);
      console.log(`numOfspaces: `, numOfspaces);
      numOfspaces = (number - countOfAsterisks) / 2;
      console.log(spaces.repeat(numOfspaces) + asterisks);
      break;
    }
    console.log(`countOfAsterisks: `, countOfAsterisks);
    console.log(`numOfspaces: `, numOfspaces);
    numOfspaces = (number - countOfAsterisks) / 2;
    console.log(
      spaces.repeat(numOfspaces) +
        asterisks +
        spaces.repeat(countOfAsterisks - 2) +
        asterisks
    );
  }
}

console.log(hollowDiamond(9));
// console.log(hollowDiamond(1));
// console.log(hollowDiamond(3));
