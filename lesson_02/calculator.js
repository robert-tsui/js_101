// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
prompt(MESSAGES.preferredLang);
let selectedLanguage;
let lang1 = readline.question();

function checkLanguage(lang1) {
  if (lang1 === "1") {
    selectedLanguage = "en";
  } else if (lang1 === "2") {
    selectedLanguage = "fr";
  }
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

checkLanguage(lang1);
let welcome = MESSAGES[selectedLanguage].welcome;
let again = MESSAGES[selectedLanguage].again;
let firstNum = MESSAGES[selectedLanguage].firstNum;
let incorrect = MESSAGES[selectedLanguage].incorrect;
let secondNum = MESSAGES[selectedLanguage].secondNum;
let operationAsk = MESSAGES[selectedLanguage].operationAsk;
let mustChoose1 = MESSAGES[selectedLanguage].mustChoose1;
let mustChoose2 = MESSAGES[selectedLanguage].mustChoose2;
let askToPlay = MESSAGES[selectedLanguage].askToPlay;
let thankYou = MESSAGES[selectedLanguage].thankYou;
let result = MESSAGES[selectedLanguage].result;

prompt(welcome);
numOne();
function numOne() {
  prompt(firstNum);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(incorrect);
    number1 = readline.question();
  }
  console.log("number1: ", number1);
  return number1;
}
numTwo();
function numTwo() {
  prompt(secondNum);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(incorrect);
    number2 = readline.question();
  }
  console.log("number2: ", number2);
  return number2;
}
getOperation();
function getOperation() {
  prompt(operationAsk);
  let operation = readline.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(mustChoose1);
    operation = readline.question();
  }
  console.log("operation: ", operation);
  return operation;
}
let output;
calculate();
function calculate(number1, number2, operation) {
  console.log("number1: ", number1);
  console.log("number2: ", number2);
  console.log("operation: ", operation);
  switch (operation) {
    case "1":
      output = +number1 + +number2;
      break;
    case "2":
      output = +number1 - +number2;
      break;
    case "3":
      output = +number1 * +number2;
      break;
    case "4":
      output = +number1 / +number2;
      break;
  }
  console.log("output: ", output);
  return output;
}
prompt(result + output);
playAgain();
function playAgain() {
  prompt(askToPlay);
  let playAgain = readline.question();
  while (!["1", "2"].includes(playAgain)) {
    prompt(mustChoose2);
    playAgain = readline.question();
  }
  if (playAgain === "1") {
    onceAgain();
  } else {
    prompt(thankYou);
  }
}

function onceAgain() {
  prompt(again);
  numOne();
}
