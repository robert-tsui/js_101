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

validation example 2

i: ["1", "John", "Doe"], { title: "Master", occupation: "Plumber" }
o:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

validation example 3

i: ["John", "Q", "Doe"], { title: "Internationally Renowned", occupation: "Plumber" }
o:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have an Internationally Renowned Plumber around.


DATA STRUCTURE/ALGORITHM

// solution #1

// use bracket notation to log each index of array element and log each item of object
// return greeting

// solution #2

// use Array.prototype.join method to log each index of array element and log each item of object

*/

// solution #3

// declare a new variable name assigned to a value of an empty string
// use a for loop to iterate through array
// if i is not equal to the 0th index
// concat an adjoining space to each subsequent index in the empty string
// concat each array element at index i to the empty string
// declare a variable title assigned to accessing the object's key
// declare variable occupation assigned to accessing the object's key
// return the string using string interpolation

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

// solution #3

function greetings(arr1, obj1) {
  let name = '';
  for (let i = 0; i < arr1.length; i++) {
    if (i !== 0) {
      name += ' ';
    }
    name += arr1[i];
  }
  let title = obj1['title'];
  let occupation = obj1['occupation'];
  let article = 'a';
  if ([`a`, `e`, `i`, `o`, `u`].includes(title[0].toLowerCase())) {
    article = 'an';
  }

  return `Hello ${name}! Nice to have ${article} ${title} ${occupation} around.`;
}

console.log(
  greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
);
console.log(
  greetings(['John', 'Q', 'Doe'], {
    title: 'Internationally Renowned',
    occupation: 'Plumber',
  })
);
