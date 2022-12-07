/* 

INPUTS AND OUTPUTS

i: Array
o: Array (contains every other element of input Array)

EXPLICIT REQUIREMENTS  
-output values are in the 1st, 3rd, 5th, and so on elements of input array

IMPLICIT REQUIREMENTS
- elements of input array can be any data type even empty

MENTAL MODEL
return an array of elements that are of every other element from the input array

EXAMPLES/TEST CASES

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

DATA STRUCTURE/ALGORITHM

// declare a variable result assigned to an empty array
// initialize a for loop to iterate through input array while incrementing i by 2
  // push the elements into the new array
// log the result

*/

// function oddities(arr) {
//   let oddArr = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     oddArr.push(arr[i]);
//   }

//   return oddArr;
// }

function evens(arr) {
  let evensArr = [];
  arr.forEach(function (el, idx, arr) {
    if (idx % 2 === 1) evensArr.push(el);
  });

  return evensArr;
}

function evens(arr) {
  let newArr = [];
  newArr = arr.filter(function (el, idx) {
    if (idx % 2 === 1) return true;
  });

  return newArr;
}

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(['abc', 'def'])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(['abc', 'def'])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
