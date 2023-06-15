// Write a function that takes two arguments,
// an inventory item ID and a list of transactions,
// and returns an array containing only the transactions for the specified inventory item.

/*
Understanding the [P]roblem
===========================
Input: number, array

Output: array

Rules:

- array of objects
- each object has 3 key value pairs
- only return objects with the same ID provided in the argument

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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- given an ID number and the transaction list, return an ordered list of all transactions for that ID number

- {id: 101} => 101 represents value of key value pair


[D]ata Structure
================
- Do I need an array or an object for my solution?

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output
*/

// function transactionsFor(id, arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     for (let key in obj) {
//       if (obj[key] === id) {
//         newArr.push(obj);
//       }
//     }
//   }

//   return newArr;
// }

// using filter

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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
