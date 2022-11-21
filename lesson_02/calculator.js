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

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function checkLanguage(lang1) {
  if (lang1 === "1") {
    selectedLanguage = "en";
  } else if (lang1 === "2") {
    selectedLanguage = "fr";
  } else {
    prompt(MESSAGES.validLang);
    lang1 = readline.question();
    checkLanguage(lang1);
  }
}

function getFirstNumber() {
  prompt(firstNum);
  number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(incorrect);
    number1 = readline.question();
  }
  return number1;
}

function getSecondNumber() {
  prompt(secondNum);
  number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(incorrect);
    number2 = readline.question();
  }
  return number2;
}

function getOperation() {
  prompt(operationAsk);
  operation = readline.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(mustChoose1);
    operation = readline.question();
  }
  return operation;
}

function calculate(number1, number2, operation) {
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
      if (number2 === 0) {
        output = "false";
      } else {
        output = +number1 / +number2;
        break;
      }
  }
  return output;
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
let output;
let number1;
let number2;
let operation;

prompt(welcome);
while (true) {
  getFirstNumber();
  getSecondNumber();
  getOperation();
  calculate(number1, number2, operation);
  prompt(result + output);
  prompt(askToPlay);
  let playAgain = readline.question();
  while (!["1", "2"].includes(playAgain)) {
    prompt(mustChoose2);
    playAgain = readline.question();
  }
  if (playAgain !== "1") {
    prompt(thankYou);
    break;
  }
<<<<<<< HEAD

  if (playAgain === "1") {
    prompt(again);
=======
  if (playAgain === "1") {
    prompt(again);
    console.clear();
>>>>>>> development
  }
}
