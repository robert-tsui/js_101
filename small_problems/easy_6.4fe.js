// using a `while` loop

// function sequence(num) {
//   let numArr = [];
//   let incrementer = 1;

//   while (true) {
//     numArr.push(incrementer);
//     incrementer++;
//     if (incrementer > num) break;
//   }

//   return numArr;
// }

// using forEach and map

// You cannot use .forEach() or .map() because you are not iterating over any data.
// the starting value of the loop cannot be changed to 1
// the stopping condition cannot be changed where the index is less than or equal to the input number
// You can create a range array using [...new Array(num).keys()] which will start at 0 and end at the num - 1. Then you can just transform each element to themselves + 1.

function sequence(num) {
  return [...new Array(num).keys()].map((num) => num + 1);
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
