// Write a function that combines two arrays passed as arguments,
// and returns a new array that contains all elements from both array arguments,
// with each element taken in alternation.
// You may assume that both input arrays are non-empty,
// and that they have the same number of elements.

// solve using forEach, map, and reduce

// forEach
// function interleave(arr1, arr2) {
//   let newArr = [];

//   arr1.forEach((el, i) => {
//     let oppositeEl = arr2[i];
//     newArr.push(el, oppositeEl);
//   });

//   return newArr;
// }

// map
// function interleave(arr1, arr2) {
//   let newArr = arr1
//     .map((el, i) => {
//       let oppositeEl = arr2[i];
//       return [el, oppositeEl];
//     })
//     .flat();

//   return newArr;
// }

// reduce
function interleave(arr1, arr2) {
  let newArr = arr1.reduce((accumulator, currentValue, i) => {
    accumulator.push(currentValue);
    accumulator.push(arr2[i]);
    return accumulator;
  }, []);

  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
