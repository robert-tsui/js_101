// console.log([1, 2, 3].filter((num) => [1, 2, 3].includes(1))); // [] because it doesn't return truthy

// console.log(
//   [1, 2, 3].map((num) => {
//     num * num;
//   })
// ); // [1,4,9]

// [1, 2, 3].map((num) => num * num); // implicit return statement

// console.log(['ant', 'bear', 'caterpillar', 'pig'].shift().length); // 3 because the return value of shift is 'ant'
// let arr = ['ant', 'bear', 'caterpillar', 'pig'];
// console.log(arr.unshift(1).length); // the return value of unshift is the length property, do I get undefined because I'm calling length on length?
// console.log(arr);

// console.log(
//   [1, 2, 3].every((num) => {
//     return (num = num * 2);
//   })
// ); // [2,4,9] and the return value of every is true because the callback's return value is always truthy

// console.log(
//   ['ant', 'bear'].map((elem) => {
//     if (elem.length > 3) {
//       return elem;
//     }
//   })
// ); // returns false

// function flintObject() {
//   let obj = {};

//   flintstones.forEach(function (el, idx) {
//     obj[el] = idx;
//   });

//   return obj;
// }

// // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
// let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];
// console.log(flintObject(flintstones));

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// console.log(
//   ages.Herman + ages.Lily + ages.Grandpa + ages.Eddie + ages.Marilyn + ages.Spot
// );

// function addUp() {
//   let num = 0;
//   let arr = Object.values(ages);
//   arr.forEach(function (el, idx) {
//     num += el;
//   });

//   return num;
// }

// console.log(addUp(ages));

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// function minAge(input) {
//   let agesArr = Object.values(ages);
//   return Math.min(...agesArr);
// }

// console.log(minAge(ages));

// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = 'The Flintstones Rock'; // { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// convert string to array of characters?
// iterate through array and assign key value pairs to new object
function letterCountObj(str) {
  let arrOfLetters = statement.split(' ').join('').split('');
  let newObj = {};

  for (let i = 0; i < arrOfLetters.length; i++) {
    let currentLetter = arrOfLetters[i];
    if (Object.keys(newObj).includes(currentLetter)) {
      newObj[currentLetter] += 1;
    } else {
      newObj[currentLetter] = 1;
    }
  }

  return newObj;
}

console.log(letterCountObj(statement));
