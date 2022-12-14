/* 
Understanding the problem
===========================
I: String
O: String
Rules:
- If player a chooses rock and player b chooses scissors, player a wins.
- If player a chooses paper and player b chooses rock, player a wins.
- If player a chooses scissors and player b chooses paper, player a wins.
- If both players choose the same item, neither player wins. It's a tie.

Examples and Test Cases
=========================

1) Use the test cases to confirm your understanding of the problem thus far
2) Taking a look at the test cases to see if there are implied (implicit) requirements, that weren't explicitly stated in the problem statement

// validation example 1
user: rock
computer: scissors
winner: user

// validation example 2
user: paper
computer: rock
winner: user

// validation example 3
user: scissors
computer: paper
winner: user

// validation example 4
user: paper
computer: paper
winner: tie

// edge cases
- user provides invalid inputs
- user wants to play again
- user wants to select a different language

-- Intermission --

Do I have a mental model?

Mental model: WHAT you have to do in order to get from input to output

- get user inputs and match against conditional statements to determine a winner 

Data Structure
================

- Asking yourself: Do I need an array or object in order to hold the values that I'm working with?

create an object lookup table with RPS as keys and what they beat as values

Algorithm
===========

The HOW you're going to get to input from output

- A series of steps written in plain english
- Has to be specific enough to know how you're going to get from A to B
- But general enough, where you're not naming specific methods
- Indicator that you're doing it right, is that your algorithm is language agnostic

- require the readlinesync module
- declare a variable and assign to an object lookup table
- prompt user to make move
- generate a random index for computer
- generate a random move for computer
- computer logs move
- match moves with values in lookup table
- compare moves and determine winner
- winner is displayed 

*/

const RL = require(`readline-sync`);
const VALID_MOVES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function howToWin(userMove, computerMove) {
  prompt(`Your move is ${userMove}. Computer's move is ${computerMove}.`);

  if (
    (userMove === `scissors` && computerMove === `paper`) ||
    (userMove === `paper` && computerMove === `rock`) ||
    (userMove === `rock` && computerMove === `scissors`)
  ) {
    prompt(`You won!`);
  } else if (
    (computerMove === `scissors` && userMove === `paper`) ||
    (computerMove === `paper` && userMove === `rock`) ||
    (computerMove === `rock` && userMove === `scissors`)
  ) {
    prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
}

while (true) {
  prompt(`Make your move: ${VALID_MOVES.join(' ')}`);
  let userMove = RL.question().toLowerCase();

  while (!VALID_MOVES.includes(userMove)) {
    console.log(`That's not a valid choice.\nChoose between ${VALID_MOVES}.`);
    userMove = RL.question();
  }

  // let randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
  // let randomIndex = Math.ceil(Math.random() * VALID_MOVES.length - 1);
  let randomIndex = Math.round(Math.random() * VALID_MOVES.length - 1);
  console.log(`randomIndex: ${randomIndex}`);
  let computerMove = VALID_MOVES[randomIndex];

  howToWin(userMove, computerMove);
  let playAgain;
  prompt(`Want to play again? (y/n)`);
  playAgain = RL.question().toLowerCase();

  while (playAgain[0] !== `y` && playAgain[0] !== `n`) {
    prompt(`Please enter "y" or "n"`);
    playAgain = RL.question().toLowerCase();
  }

  if (playAgain !== `y`) {
    break;
  }
}
