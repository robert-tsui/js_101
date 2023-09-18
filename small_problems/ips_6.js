// the function call to range invokes the second function recursively until the maximum call stack size is exceeded. This is called funciton overloading when more than one function has the same name but different signatures.

function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
    console.log(`start: `, start);
    console.log(`end: `, end);
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// Examples
