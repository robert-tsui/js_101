// Write a function that counts the number of occurrences of each element in a given array.
// Once counted, log each element alongside the number of occurrences.
// Consider the words case insensitive e.g. ("suv" === "SUV").

function countOccurrences(arr) {
  let occurrences = {};
  let newArr = arr.map((el) => {
    return el.toLowerCase();
  });
  console.log(newArr);
  for (let idx = 0; idx < newArr.length; idx++) {
    occurrences[newArr[idx]] = occurrences[newArr[idx]] || 0;
    occurrences[newArr[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let property in occurrences) {
    console.log(`${property} => ${occurrences[property]}`);
  }
}

function caseInsensitive(arr) {}

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'suv',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
(car) => 4;
(truck) => 3;
(SUV) => 1;
(suv) => 1;
(motorcycle) => 2;
