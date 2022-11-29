/* 

INPUTS AND OUTPUTS

i: Number
o: Number

EXPLICIT REQUIREMENTS  

2 input numbers (bill amount and tip rate)
output the total amount including tip and tip separately
final bill amount should be expressed as a dollar amount

IMPLICIT REQUIREMENTS

input validation not required (assume number input)
tip rate should be converted into percentage

MENTAL MODEL

given a bill amount and tip rate, compute the tip and total bill and log both the tip and total amount to the user 

EXAMPLES/TEST CASES

Validation Example 1

bill: 20
tip rate: 15

total: 23 
tip: 3

DATA STRUCTURE/ALGORITHM
  
1. require the readlineSync module
2. ask the user for the bill amount and tip rate
3. calculate the tip and total amount of bill
4. log the tip and total amount to the console

*/

const interactive = require(`readline-sync`);

console.log(`What is the bill?\n`);
let bill = interactive.prompt();
bill = parseFloat(bill);

console.log(`What is the tip rate?\n`);
let tipRate = interactive.prompt();
tipRate = parseFloat(tipRate) / 100;

let tip = bill * tipRate;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
