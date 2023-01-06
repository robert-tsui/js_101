// function selectFruit(obj) {
//   let newObj = {};
//   for (const prop in obj) {
//     if (obj[prop] === 'Fruit') {
//       newObj[prop] = obj[prop];
//     }
//   }

//   return newObj;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable',
// };

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     numbers[counter] = numbers[counter] * 2;
//     counter += 1;
//   }

//   return numbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// myNumbers; // => [1, 4, 3, 7, 2, 6]

// function doubleOddIndices(numbers) {
//   for (let counter = 0; counter < numbers.length; counter++) {
//     if (counter % 2 === 1) {
//       numbers[counter] = numbers[counter] * 2;
//     }
//   }

//   return numbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddIndices(myNumbers)); // => [2, 8, 6, 14, 4, 12]

function multiply(numbers, factor) {
  let newArr = [];

  for (let counter = 0; counter < numbers.length; counter++) {
    newArr.push(numbers[counter] * factor);
  }

  return newArr;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
