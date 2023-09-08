// function binarySearch(arr, searchItem) {
//   console.log(`arr / upperHalf: `, arr);
//   let lowerHalf = arr.slice(0, Math.ceil(arr.length / 2));
//   console.log(`lowerHalf: `, lowerHalf);
//   let middleItem = arr[Math.ceil(arr.length / 2 - 1)];
//   console.log(`middleItem: `, middleItem);
//   let upperHalf = arr.slice(Math.ceil(arr.length / 2));
//   console.log(`upperHalf: `, upperHalf);

//   if (middleItem < searchItem) {
//     return binarySearch(upperHalf, searchItem);
//   } else if (middleItem > searchItem) {
//     return binarySearch(lowerHalf, searchItem);
//   } else if (middleItem === searchItem) {
//     console.log(`middleItem is equal to searchItem`);
//     return arr.length / 2 - 1;
//   } else {
//     return -1;
//   }
// }

// LS solution

function binarySearch(array, searchItem) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor(high - low / 2);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let yellowPages = [
  'Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Tiki Lounge',
  'Zooper',
];
console.log(binarySearch(yellowPages, 'Pizzeria')); // 7
// binarySearch(yellowPages, 'Apple Store'); // 0

// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77); // -1
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89); // 7
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5); // 1

// binarySearch(
//   ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'],
//   'Peter'
// ); // -1
// binarySearch(
//   ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'],
//   'Tyler'
// ); // 6
