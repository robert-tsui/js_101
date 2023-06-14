// refactored using list processing functions

function substrings(str) {
  let newArr = [];
  let strArr = str.split('');

  strArr.map((_, idx, array) => {
    newArr.push(leadingSubstrings(array.slice(idx)));
  });

  return newArr.flat();
}

function leadingSubstrings(arr2) {
  return arr2.map((_, i, arr) => {
    return arr.slice(0, i + 1).join('');
  });
}

console.log(substrings('abcde'));

// returns
// [
//   'a',
//   'ab',
//   'abc',
//   'abcd',
//   'abcde',
//   'b',
//   'bc',
//   'bcd',
//   'bcde',
//   'c',
//   'cd',
//   'cde',
//   'd',
//   'de',
//   'e',
// ];
