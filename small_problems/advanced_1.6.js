// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

function merge(arr1, arr2) {
  console.log(`arr1 (merge Fn): `, arr1);
  console.log(`arr2 (merge Fn): `, arr2);
  // make copies of the input arrays
  let result = [];
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();

  // iterate over the copied arrays and compare the first element of the first array with the first element of the second array
  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }
  console.log(`result (merge Fn): `, result);
  // concatenate the remaining elements to the result array and return it
  return result.concat(copy1.length === 0 ? copy2 : copy1);
}
console.log(merge([9], [5]));

// // unfinished solution
// function mergeSorted(arr) {
//   // console.log(`arr: `, arr);
//   let newArr;
//   for (let index = 0; index < arr.length; index += 1) {
//     if (arr.length % 2 === 0) {
//       newArr = [arr.slice(0, arr.length / 2)];
//       newArr.push(arr.slice(arr.length / 2));
//     } else if (arr.length % 2 === 1) {
//       newArr = [arr.slice(0, Math.ceil(arr.length / 2))];
//       newArr.push(arr.slice(Math.ceil(arr.length / 2)));
//     }
//   }
//   return newArr;
// }

// function mergeSort(arr) {
//   let sortedArr = [];
//   // iterate over array and split the elements into two array halves
//   let mergeSortedResult = mergeSorted(arr);
//   // console.log(`mergeSortedResult: `, mergeSortedResult);

//   // split the array elements into atomic arrays
//   let atomicArr = mergeSortedResult.map((subArr) => {
//     let innerArr = subArr.map((ele) => {
//       return [ele];
//     });
//     // console.log(`innerArr: `, innerArr[0]);
//     return innerArr;
//   });
//   console.log(`atomicArr: `, atomicArr);
//   // transform and sort the 3 layer array into a 2 layer array
//   // [[[9], [5]], [[7], [1]]] --> [[5, 9], [1, 7]]
//   // access numbers --> sort numbers --> split into two array halves
//   let finalResult = atomicArr.map((subArr1) => {
//     // console.log(subArr1);
//     return subArr1.map((subArr2) => {
//       // console.log(subArr2);
//       return subArr2.map((el) => {
//         // console.log(el);
//         sortedArr.push(el);
//         sortedArr.sort();
//         console.log(`sortedArr: `, sortedArr);
//         // return sortedArr;
//       });
//     });
//   });
//   console.log(`finalResult: `, finalResult);
//   // return mergeSorted(finalResult);
// }

function mergeSort(arr) {
  console.log(`---arr1.1: `, arr);
  if (arr.length === 1) return arr;
  console.log(`---arr1.2: `, arr);

  let subArr1 = arr.slice(0, arr.length / 2);
  console.log(`subArr1.1 (sliced): `, subArr1);
  let subArr2 = arr.slice(arr.length / 2);
  console.log(`subArr2.1 (sliced): `, subArr2);

  console.log(`---arr1.3: `, arr);

  console.log(`pass subArr1: `, subArr1);
  subArr1 = mergeSort(subArr1);
  console.log(`subArr1.2 (reassigned): `, subArr1);
  console.log(`pass subArr2: `, subArr2);
  subArr2 = mergeSort(subArr2);
  console.log(`subArr2.2 (reassigned): `, subArr2);

  return merge(subArr1, subArr2);
}

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]
// mergeSort([5, 3]); // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
