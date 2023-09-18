// line 5 comes after line 4, which assigns end to the value 0 assigned to start on line 4

// if no 2nd argument is passed, end is undefined and using the not operator on undefined returns a falsy value to be true

// function range(start, end) {
//   console.log(`end: `, end);
//   if (!end) {
//     start = 0;
//     end = start;
//     console.log(start);
//     console.log(end);
//   }
//   console.log(start);
//   console.log(end);

//   // ...
// }

// console.log(range(5));

// Think about why you can't write two different functions named range1 and range2 as a solution to the problem.

// you won't know when to use either function
// a third function can be written to determine which function would be invoked

function range1(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range2(end) {
  return range1(0, end);
}

function determineRange(...args) {
  return args.length === 2 ? range1(...args) : range2(...args);
}

// Examples

console.log(range1(10, 20));
console.log(range2(5));
