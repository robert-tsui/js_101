// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// i: 2 sorted arrays
// o: new array

// [1, 5, 9], [2, 6, 8]

// [1, 5, 9] --> 1
// [2, 6, 8] --> 2
// 1 <= 2 ? --> [1]

// [5, 9] --> 5
// [2, 6, 8] --> 2
// 5 <= 2 ? --> [1, 2]

// [5, 9] --> 5
// [6, 8] --> 6
// 5 <= 6 ? --> [1, 2, 5]

// [9] --> 9
// [6, 8] --> 6
// 9 <= 6 ? --> [1, 2, 5, 6]

// [9] --> 9
// [8] --> 8
// 9 <= 8 ? --> [1, 2, 5, 6, 8]

// [9] --> 9
// [] --> []
// 9 <= [] ? --> [1, 2, 5, 6, 8, 9]

// [1, 5, 9], [2, 6, 8] --> [[1, 5, 9], [2, 6, 8]]
// 1 < 2 --> [1, 2]
// 5 < 6 --> [1, 2, 5, 6]
// 9 < 8 --> [1, 2, 5, 6, 8, 9]

// [1, 1, 3], [2, 2] --> [1, 1, 2, 2, 3]
// 1 < 2 --> [1, 2]
// 1 < 2 --> [1, 2, 1, 2]
// 3 --> [1, 2, 1, 2, 3]
// 1 < 2 --> [1, 2, 1, 2, 3]
// 2 < 1 --> [1, 1, 2, 2, 3]
// 2 < 2 --> [1, 1, 2, 2, 3]
// 2 < 3 --> [1, 1, 2, 2, 3]

// mergedArr-- > [];
// rowIdx-- > 0;
// colIdx-- > 0;
// mergedArr.push(newArr[0][0]);

// mergedArr-- > [1];
// rowIdx-- > 1;
// colIdx-- > 0;
// mergedArr.push(newArr[1][0]);

// mergedArr-- > [1, 2];
// rowIdx-- > 0;
// colIdx-- > 1;
// mergedArr.push(newArr[0][1]);

// mergedArr-- > [1, 2, 5];
// rowIdx-- > 1;
// colIdx-- > 0;
// mergedArr.push(newArr[1][1]);

// mergedArr-- > [1, 2, 5, 6];
// rowIdx-- > 0;
// colIdx-- > 2;
// mergedArr.push(newArr[0][2]);

// mergedArr-- > [1, 2, 5, 6, 9];
// rowIdx-- > 1;
// colIdx-- > 2;
// mergedArr.push(newArr[1][2]);

// mergedArr-- > [1, 2, 5, 6, 9, 10];

// function merge(arr1, arr2) {
//   let mergedArr = [];
//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     if (arr1[idx] < arr2[idx]) {
//       mergedArr.push(arr1[idx]);
//       mergedArr.push(arr2[idx]);
//     } else if (arr1[idx] > arr2[idx]) {
//       mergedArr.push(arr2[idx]);
//       mergedArr.push(arr1[idx]);
//     }
//   }
//   console.log(arr1, arr2);

//   return mergedArr;
// }

// function merge(array1, array2) {
//   let copy1 = array1.slice();
//   let copy2 = array2.slice();
//   let result = [];

//   while (copy1.length > 0 && copy2.length > 0) {
//     console.log(`------------ iteration`);
//     console.log(`result: `, result);
//     console.log(`copy1 first el: `, copy1[0]);
//     console.log(`copy2 first el: `, copy2[0]);
//     result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
//     console.log(`------------ remove item`);
//     console.log(`copy1: `, copy1);
//     console.log(`copy2: `, copy2);
//     console.log(`result: `, result);
//   }
//   console.log(`result after loop: `, result);
//   let finalArray = result.concat(copy1.length === 0 ? copy2 : copy1);
//   console.log(`finalArray: `, finalArray);
// }

function merge(arr1, arr2) {
  let result = [];
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}
console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]); // [1, 4, 5]
// merge([1, 4, 5], []); // [1, 4, 5]
