// VARIABLES
let readline = require('readline-sync');
const MESSAGES = require('./tictactoe_msg.json');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_SCORE = 5;
const SQUARE_5 = 5;
const INPUT_Y = 'y';
const INPUT_N = 'n';
const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// CALLS
welcomeUser();
startGame();

// FUNCTIONS
function prompt(msg) {
  console.log(`=> ${msg}`);
}

function welcomeUser() {
  console.clear();
  prompt(MESSAGES.welcome);
  prompt(MESSAGES.instructions);
  prompt(`Be the first to score ${MATCH_SCORE} rounds and win the game!`);
}

function startGame() {
  let roundScore = { Player: 0, Computer: 0 };
  while (true) {
    let currentPlayer = getFirstPlayer();
    let board = initializeBoard();
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardIsFull(board)) break;
    }
    displayBoard(board);

    if (someoneWon(board)) {
      displayScores(updateScores(roundScore, isWinner(board)), isWinner(board));
      if (roundScore[isWinner(board)] === MATCH_SCORE) break;
    } else {
      prompt(MESSAGES.tie);
    }
  }
  playAgain();
}

function getFirstPlayer() {
  let answer;
  while (!['1', '2'].includes(answer)) {
    prompt(MESSAGES.getFirstMove);
    answer = readline.question().toLowerCase();
    prompt(MESSAGES.invalidChoice);
  }
  if (answer === '1') return 'Player';
  return 'Computer';
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+------');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+------');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Player') playerChoosesSquare(board);
  if (currentPlayer === 'Computer') computerChoosesSquare(board);
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'Player') {
    return 'Computer';
  }
  return 'Player';
}

function someoneWon(board) {
  return !!isWinner(board);
}

function boardIsFull(board) {
  return emptySquares(board).length === 0;
}

function displayScores(roundScore, winner) {
  prompt(`${winner} wins the round.`);
  if (
    roundScore['Player'] < MATCH_SCORE &&
    roundScore['Computer'] < MATCH_SCORE
  ) {
    prompt(
      `Player's score: ${roundScore['Player']} and Computer's score: ${roundScore['Computer']}.`
    );
  }

  if (roundScore[winner] === MATCH_SCORE) {
    prompt(
      `${winner} also wins the match! \n=> Player's score: ${roundScore['Player']} and Computer's score: ${roundScore['Computer']}`
    );
  }
}

function playAgain() {
  prompt(MESSAGES.getPlayAgain);
  let answer = readline.question().toLowerCase();
  while (!['y', 'n'].includes(answer)) {
    prompt(MESSAGES.invalidChoice);
    answer = readline.question().toLowerCase();
  }
  if (answer === INPUT_N) {
    prompt(MESSAGES.thankYou);
  } else if (answer === INPUT_Y) {
    prompt(MESSAGES.playAgain);
    startGame();
  }
}

// HELPER FUNCTIONS

function emptySquares(board) {
  return Object.keys(board).filter(
    (square) => board[square] === INITIAL_MARKER
  );
}

function playerChoosesSquare(board) {
  let square;
  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt(MESSAGES.invalidChoice);
  }
  board[square] = HUMAN_MARKER;
  console.log(`board: `, board);
}
function computerChoosesSquare(board) {
  let square;

  // offense first
  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  // defense second
  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  // pick square #5
  if (board[SQUARE_5] === INITIAL_MARKER) {
    square = SQUARE_5;
  }

  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  let str = '';
  switch (arr.length) {
    case 0:
      return str;
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return (
        arr.slice(0, arr.length - 1).join(delimiter) +
        `${delimiter}${word} ${arr[arr.length - 1]}`
      );
  }
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function isWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function updateScores(roundScore, winner) {
  if (winner === 'Player') roundScore['Player'] += 1;
  if (winner === 'Computer') roundScore['Computer'] += 1;
  return roundScore;
}
