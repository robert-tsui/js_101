// Write a function that counts the number of occurrences of each element in a given array.
// Once counted, log each element alongside the number of occurrences.
// Consider the words case sensitive e.g. ("suv" !== "SUV").

/*
Understanding the [P]roblem
===========================
Input: array

Output: string

Rules:
- words in input array are case-sensitive

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

count how many times each element occurs in a given array and then output the count next to each element

[D]ata Structure
================
- Do I need an array or an object for my solution? object

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// declare and initialize a variable `seen` to an empty object
// loop over the input array for the length of the array
  // if the object at the current value exists
    // increment count by 1
  // if the object at the current value doesn't exist
    // add the element as a key value pair to the object
// loop over the `seen` object
// log the key value pairs in the object to the console
// return undefined
*/

function countOccurrences(arr) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let vehicle = arr[i];
    seen[vehicle] = seen[vehicle] || 0;
    seen[vehicle] += 1;
  }

  for (const property in seen) {
    console.log(`${property} => ${seen[property]}`);
  }

  return undefined;
}

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

console.log(countOccurrences(vehicles));
