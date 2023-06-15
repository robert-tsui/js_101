// Building on the previous exercise, write a function that returns true or false
// based on whether or not an inventory item is available.
// As before, the function takes two arguments: an inventory item and a list of transactions.
// The function should return true only if the sum of the quantity values of the item's transactions is greater than zero.
// Notice that there is a movement property in each transaction object.
// A movement value of 'out' will decrease the item's quantity.
// You may (and should) use the transactionsFor function from the previous exercise.

/*
Understanding the [P]roblem
===========================
Input: number and array

Output: boolean

Rules:
- function returns true only if quantity value > 5
- movement value of `out` decreases quantity value

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output
- given a list of transactions and the item ID, return true or false if the item has a quantity over 5 and movement is not out
{ id: 101, movement: 'in',  quantity:  5 } => filter quantity value > 5 with movement value of `in` => return boolean check

[D]ata Structure
================
- Do I need an array or an object for my solution? array

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// isItemAvailable function`
// filter the transactions list (call `transactionsFor` function) for transactions that meet requirements (match ID, movement `in`, quantity > 5)
// return true if requirements are met
*/

function isItemAvailable(inventoryItem, transactions) {
  let matchingTransactions = transactionsFor(inventoryItem, transactions);
  let sum = 0;
  for (let i = 0; i < matchingTransactions.length; i++) {
    sum = matchingTransactions.reduce((acc, cv) => {
      if (matchingTransactions[i].movement === 'in') {
        return acc + cv.quantity;
      } else {
        return acc - cv.quantity;
      }
    }, 0);
  }

  return sum > 5;
}

// LS solution

// function isItemAvailable(inventoryItem, transactions) {
//   let quantity = transactionsFor(inventoryItem, transactions).reduce(
//     (sum, transaction) => {
//       if (transaction.movement === 'in') {
//         return sum + transaction.quantity;
//       } else {
//         return sum - transaction.quantity;
//       }
//     },
//     0
//   );

//   return quantity > 5;
// }

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter((transaction) => transaction.id === inventoryItem);
}

let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
