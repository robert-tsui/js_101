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
New Rules:
- If player a choose scissors and player b chooses paper, player a wins
- If player a choose paper and player b chooses rock, player a wins
- If player a choose rock and player b chooses lizard, player a wins
- If player a choose lizard and player b chooses spock, player a wins
- If player a choose spock and player b chooses scissors, player a wins
- If player a choose scissors and player b chooses lizard, player a wins
- If player a choose lizard and player b chooses paper, player a wins
- If player a choose paper and player b chooses spock, player a wins
- If player a choose spock and player b chooses rock, player a wins
- If player a choose rock and player b chooses scissors, player a wins
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
const VALID_MOVES = ['r', 'p', 'sc', `sp`, `l`];
const DISPLAY_VALID_MOVES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  sp: 'spock',
  l: 'lizard',
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function computeGrandWinner() {
  // declare a variable to hold the count for the number of times user won
  // declare a variable to hold the count for the number of times computer won
  // write an if statement to check if user wins or computer wins are equal to 3
  // if yes, return `grandWinner`
}

function howToWin(userMove, computerMove) {
  console.log(typeof userMove);
  // declare a variable `displayUserMove`
  // declare a variable `displayComputerMove`
  let displayUserMove;
  let displayComputerMove;
  // iterate over `displayvalidmoves`
  for (const key in DISPLAY_VALID_MOVES) {
    // if `userMove` is equal to the key of `displayvalidmoves`
    if (userMove === key) {
      // reassign `displayUserMove` to the key's corresponding value of `displayvalidmoves`
      displayUserMove = DISPLAY_VALID_MOVES[key];
    }
    if (computerMove === key) {
      // reassign `displayComputerMove` to the key's corresponding value of `displayvalidmoves`
      displayComputerMove = DISPLAY_VALID_MOVES[key];
    }
  }
  prompt(
    `Your move is ${displayUserMove}. Computer's move is ${displayComputerMove}.`
  );
  if (
    (userMove === `sc` && computerMove === `p`) ||
    (userMove === `p` && computerMove === `r`) ||
    (userMove === `r` && computerMove === `l`) ||
    (userMove === `l` && computerMove === `sp`) ||
    (userMove === `sp` && computerMove === `sc`) ||
    (userMove === `sc` && computerMove === `l`) ||
    (userMove === `l` && computerMove === `p`) ||
    (userMove === `p` && computerMove === `sp`) ||
    (userMove === `sp` && computerMove === `r`) ||
    (userMove === `r` && computerMove === `sc`)
  ) {
    prompt(`You won!`);
  } else if (
    (userMove === `p` && computerMove === `sc`) ||
    (userMove === `r` && computerMove === `p`) ||
    (userMove === `l` && computerMove === `r`) ||
    (userMove === `sp` && computerMove === `l`) ||
    (userMove === `sc` && computerMove === `sp`) ||
    (userMove === `l` && computerMove === `sc`) ||
    (userMove === `p` && computerMove === `l`) ||
    (userMove === `sp` && computerMove === `p`) ||
    (userMove === `r` && computerMove === `sp`) ||
    (userMove === `sc` && computerMove === `r`)
  ) {
    prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
}
let playAgain;
do {
  prompt(
    `Type the first letter of your chosen move ("sp" for spock, "sc" for scissors): ${Object.values(
      DISPLAY_VALID_MOVES
    ).join(' ')}`
  );
  let userMove = RL.question().toLowerCase();

  while (!VALID_MOVES.includes(userMove)) {
    console.log(
      `That's not a valid choice.\nEnter the first letter of your move between ${Object.values(
        DISPLAY_VALID_MOVES
      ).join(', ')}. ("sp" for spock, "sc" for scissors)`
    );
    userMove = RL.question();
  }

  // let randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
  // let randomIndex = Math.ceil(Math.random() * VALID_MOVES.length - 1);
  let randomIndex = Math.round(Math.random() * VALID_MOVES.length - 1);
  let computerMove = VALID_MOVES[randomIndex];
  howToWin(userMove, computerMove);
  prompt(`Want to play again? (y/n)`);
  playAgain = RL.question().toLowerCase();

  while (playAgain[0] !== `y` && playAgain[0] !== `n`) {
    prompt(`Please enter "y" or "n"`);
    playAgain = RL.question().toLowerCase();
  }
} while (playAgain !== `n`);
