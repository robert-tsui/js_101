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

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
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
calculator();

function calculator() {
  prompt(firstNum);
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(incorrect);
    number1 = readline.question();
  }
  prompt(secondNum);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(incorrect);
    number2 = readline.question();
  }
  prompt(operationAsk);
  let operation = readline.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(mustChoose1);
    operation = readline.question();
  }
  let output;
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
  prompt(askToPlay);
  prompt(result + output);
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
  calculator();
}
