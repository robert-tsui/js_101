// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

// {1:1, 2:1, 3:2, etc}
// key => nth
// value => fibonacci

function memoization(nth) {
  let lookUpTable = {};
  if (nth === 1 || nth === 2) {
    return 1;
  } else {
    return (lookUpTable[nth] = memoization(nth - 1) + memoization(nth - 2));
  }
}

console.log(memoization(20));
