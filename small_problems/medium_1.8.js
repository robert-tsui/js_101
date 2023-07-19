// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

function fibonacci(termNumber) {
  let termOne = 1;
  let termTwo = 1;
  let fibonacci;

  for (let counter = 3; counter <= termNumber; counter += 1) {
    fibonacci = termOne + termTwo;
    termOne = termTwo;
    termTwo = fibonacci;
  }

  return fibonacci;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
console.log(fibonacci(100)); // 354,224,848,179,261,915,075
