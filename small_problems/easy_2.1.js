/* 

INPUTS AND OUTPUTS

i: Array, Object
o: String

EXPLICIT REQUIREMENTS  
- array contains at least 2 elements
- object contains at least 2 keys
  - "title"
  - "occupation"
- greeting should log person's full name and title and combine with adjoining spaces

IMPLICIT REQUIREMENTS
- 3rd array element could contain a middle initial or name

CLARIFYING QUESTIONS  
- what happens if the array contains a number? greeting can contain a number as a value
- do the array elements need to be in order? create edge case 

MENTAL MODEL
- log a personal greeting given an array and object

EXAMPLES/TEST CASES

validation example 1

i: ["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }
o:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

i: ["1", "John", "Doe"], { title: "Master", occupation: "Plumber" }
o:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


DATA STRUCTURE/ALGORITHM

// solution #1

// use bracket notation to log each index of array element and log each item of object
// return greeting

// solution #2

// use Array.prototype.join method to log each index of array element and log each item of object

*/

// solution #1
// function greetings(arr1, obj1) {
//   let greet = `Hello ${arr1[0]} ${arr1[1]} ${arr1[2]}! Nice to have a ${obj1.title} ${obj1.occupation} around.`;
//   return greet;
// }

// console.log(
//   greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
// );

// solution #2

// function greetings(arr1, obj1) {
//   return `Hello ${arr1.join(' ')}! Nice to have a ${obj1.title} ${
//     obj1.occupation
//   }.`;
// }

// console.log(
//   greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
// );
