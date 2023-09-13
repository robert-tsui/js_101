/*

Input: string

Output: boolean

Rules:
- spell the string using letters from the collection of blocks
  - you can't use both letters from one block
  - you can only use each block once
  - letters are case insensitive
  - return true if the string can be spelled using the rules; false otherwise

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

- Check if the word string can be matched to any of the letters from an array of key value pairs
- that contain letters while ensuring that only one letter from any key value pair is used 
- and key value pairs aren't used more than once

Use an array with an object of key value pairs

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

e.g. [{B: '0'}, {X: 'K'}]

START
SET `blockCollection` = array with objects of key value letter pairs
SET `strArr` = string split into an array of uppercased strings
SET `spelledArr` = []
SET `indexArr` = []
FOR loop `strArr` until the length of `strArr` is reached
  FOR loop `blockCollection` until the length of `blockCollection` is reached
    FOR IN loop `blockCollection` to access key value pairs
      - IF current letter matches any letter from the key or value in `blockCollection` AND current index doesn't match numbered index in `indexArr`
        - append letter to `spelledArr`
        - append index to `indexArr`
    - INCREMENT idx += 1
IF length of `spelledArr` equals the length of `strArr`
  - RETURN true
  - otherwise, RETURN false
END

*/

// using FOR loops

// function isBlockWord(word) {
//   let blockCollection = [
//     { B: 'O' },
//     { X: 'K' },
//     { D: 'Q' },
//     { C: 'P' },
//     { N: 'A' },
//     { G: 'T' },
//     { R: 'E' },
//     { F: 'S' },
//     { J: 'W' },
//     { H: 'U' },
//     { V: 'I' },
//     { L: 'Y' },
//     { Z: 'M' },
//   ];
//   let strArr = word.toUpperCase().split('');
//   console.log(`strArr: `, strArr);
//   let spelledArr = [];
//   let indexArr = [];

//   for (let idx = 0; idx < strArr.length; idx += 1) {
//     let currLetter = strArr[idx];
//     // console.log(`currLetter: `, currLetter);
//     for (let idx = 0; idx < blockCollection.length; idx += 1) {
//       let obj = blockCollection[idx];
//       for (let key in obj) {
//         let val = obj[key];
//         // console.log(`obj: `, obj);
//         // console.log(`key: `, key);
//         // console.log(`val: `, obj[key]);
//         if (
//           (key === currLetter || val === currLetter) &&
//           !indexArr.includes(idx)
//         ) {
//           spelledArr.push(currLetter);
//           // console.log(`spelledArr: `, spelledArr);
//           indexArr.push(idx);
//           // console.log(`indexArr: `, indexArr);
//         }
//       }
//     }
//   }
//   // console.log(`spelledArr: `, spelledArr);
//   // console.log(`indexArr: `, indexArr);

//   if (spelledArr.length === strArr.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// using methods and helper functions
// const BLOCK_COLLECTION = [
//   { B: 'O' },
//   { X: 'K' },
//   { D: 'Q' },
//   { C: 'P' },
//   { N: 'A' },
//   { G: 'T' },
//   { R: 'E' },
//   { F: 'S' },
//   { J: 'W' },
//   { H: 'U' },
//   { V: 'I' },
//   { L: 'Y' },
//   { Z: 'M' },
// ];

// function isBlockWord(word) {
//   let strArr = word.toUpperCase().split('');
//   if (whatItSpells(strArr).length === strArr.length) {
//     return true;
//   } else if (whatItSpells(strArr).length !== strArr.length) {
//     return false;
//   }
// }

// function whatItSpells(arr) {
//   let spelledArr = [];
//   let indexArr = [];
//   arr.forEach((letter) => {
//     BLOCK_COLLECTION.forEach((block, blockIdx) => {
//       for (let key in block) {
//         let val = block[key];
//         if (
//           (key === letter || val === letter) &&
//           !indexArr.includes(blockIdx)
//         ) {
//           spelledArr.push(letter);
//           indexArr.push(blockIdx);
//         }
//       }
//     });
//   });

//   return spelledArr;
// }

const isBlockWord = (string) => {
  string = string.toLowerCase();
  let storingArray = [];
  const LETTERS = {
    b: 'a',
    o: 'a',
    x: 'b',
    k: 'b',
    d: 'c',
    q: 'c',
    c: 'd',
    p: 'd',
    n: 'e',
    a: 'e',
    g: 'f',
    t: 'f',
    r: 'g',
    e: 'g',
    f: 'h',
    s: 'h',
    j: 'i',
    w: 'i',
    h: 'j',
    u: 'j',
    v: 'k',
    i: 'k',
    l: 'l',
    y: 'l',
    z: 'm',
    m: 'm',
  };

  for (let index = 0; index < string.length; index += 1) {
    for (let key in LETTERS) {
      if (string[index] === key) {
        storingArray.push(LETTERS[key]);
      }
    }
  }
  // console.log(`storingArray: `, storingArray);
  // let result = storingArray.filter((element) => {
  //   console.log(`element: `, element);
  //   let firstIndexedEl = storingArray.indexOf(element);
  //   console.log(`firstIndexedEl: `, firstIndexedEl);
  //   let lastIndexedEl = storingArray.lastIndexOf(element);
  //   console.log(`lastIndexedEl: `, lastIndexedEl);
  //   return firstIndexedEl !== lastIndexedEl.length < 1;
  // });
  // return result;
  // true if no repeats, false if repeats
  return (
    storingArray.filter(
      (element) =>
        storingArray.indexOf(element) !== storingArray.lastIndexOf(element)
    ).length < 1
  );
};
// console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
// console.log(isBlockWord('jest')); // true
