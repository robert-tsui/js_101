// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation 

const LANGUAGE = 'en';
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}
prompt(messages('welcome','fr'));
calculator();

function onceAgain() {
  prompt(messages('again','fr'));
  calculator();
}

function calculator() {
  prompt(messages('firstNum','fr'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('incorrect','fr'));
    number1 = readline.question();
  }

  prompt(messages('secondNum','fr'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('incorrect','fr'));
    number2 = readline.question();
  }

  prompt(messages('operationAsk','fr'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('mustChoose1','fr'));
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = +number1 + +number2;
      break;
    case '2':
      output = +number1 - +number2;
      break;
    case '3':
      output = +number1 * +number2;
      break;
    case '4':
      output = +number1 / +number2;
      break;
  }
  prompt(`The result is ${output}.`);

  prompt(messages('askToPlay','fr'));
  let playAgain = readline.question();

  while (!['1', '2'].includes(playAgain)) {
    prompt(messages('mustChoose2','fr'));
    playAgain = readline.question()
  }

  if (playAgain === '1') {
    onceAgain(); 
  } else {
    prompt(messages('thankYou','fr'));
  }
}
