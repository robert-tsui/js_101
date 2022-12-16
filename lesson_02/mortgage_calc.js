// prompt the user for the desired language
// prompt the user for the loan amount
// prompt the user for the annual percentage rate
// prompt the user for the loan duration
// calculate monthly payment
// convert APR to monthly interest rate
// convert loan duration to months
// perform monthly payment calculation
// log result of calculation
// prompt the user to calculate again

// notes for improvement:

// clarify whether the program expects a percent format or a decimal format / done
// disallow negative values for the loan amount, the APR and the loan duration / done
// disallow 0 for the loan amount and the loan duration / done
// allow decimal values for APR / done
// change the descriptive name `messages` for the `messages` function to something like `getMessage` / done
// change the descriptive name `userLanguage` to something like `chooseLanguage` / done
// extract the action of reporting the final calculation to its own function / done
// extract to their own functions / done
// choosing a user's language / done
// getting / validating a user's loan amount / done
// getting / validating an interest rate / done
// getting / validating a loan duration / done
// asking the user if they want to run another calculation / done
// accept loan durations in months instead of years - some loans are specified in terms of 30 month durations

// const variables
const READLINE = require(`readline-sync`);
const MESSAGES = require('./calculator_messages.json');

// function invocation to prompt user to select language
getUserLanguage();

// prompt user input for desired language
// and returns a valid input ('en' or 'fr')
let userLang = READLINE.question();
userLang = validateLanguage(userLang, requestInput);
console.clear();

// welcomes user
prompt(getMessages('welcome', userLang));

// start calculator
mortgageCalculator();

// function to log marker
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to select user language (french and english)
function getUserLanguage() {
  prompt(getMessages('preferredLang', 'en'));
  prompt(getMessages('preferredLang', 'fr'));
}

// function to retrieve messages from json file
function getMessages(message, userLang = 'en') {
  return MESSAGES[userLang][message];
}

// function to retrieve valid language input
function validateLanguage(userLang, cb) {
  while (userLang !== 'en' && userLang !== 'fr') {
    userLang = cb(
      getMessages('validLang', 'en') + '\n' + getMessages('validLang', 'fr')
    );
  }

  return userLang;
}

// function to retrieve valid input
function requestInput(message) {
  prompt(message);
  return READLINE.question();
}

// function to check for invalid number
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function zeroNumber(num) {
  return Number(num) === 0;
}

// function to check for negative number
function negNumber(num) {
  return Math.sign(num) === -1;
}

// function to prompt user for desired loan amount
function getLoanAmount(userLang) {
  // prompts user for loan amount and retrieves valid number
  prompt(getMessages('loanAmount', userLang));
  let userLoanAmt = READLINE.question();
  while (
    invalidNumber(userLoanAmt) ||
    negNumber(userLoanAmt) ||
    zeroNumber(userLoanAmt)
  ) {
    prompt(getMessages('incorrect', userLang));
    userLoanAmt = READLINE.question();
  }

  return userLoanAmt;
}

function getApr(userLang) {
  // prompts user for APR and retrieves valid percentage as a whole number
  prompt(getMessages('APR', userLang));
  let userAPR = READLINE.question();
  while (negNumber(userAPR) || invalidNumber(userAPR)) {
    prompt(getMessages('incorrect2', userLang));
    userAPR = READLINE.question();
  }

  return userAPR;
}

function getLoanDuration(userLang) {
  // prompts user for loan duration in years and retrieves valid input
  prompt(getMessages('loanDuration', userLang));
  let userLoanDurationInYears = READLINE.question();
  while (
    invalidNumber(userLoanDurationInYears) ||
    negNumber(userLoanDurationInYears) ||
    zeroNumber(userLoanDurationInYears)
  ) {
    prompt(getMessages('incorrect', userLang));
    userLoanDurationInYears = READLINE.question();
  }

  return userLoanDurationInYears;
}

// function to convert APR to monthly interest and loan duration to months
// finally returns monthly payment
function calculateMortgageLoan(userLoanAmt, userAPR, userLoanDurationInYears) {
  let monthlyPayment;
  let monthlyInterestRate = parseFloat(userAPR) / 12 / 100;
  let userLoanDurationInMonths = userLoanDurationInYears * 12;
  if (monthlyInterestRate === 0) {
    monthlyPayment = userLoanAmt / userLoanDurationInMonths;
  } else {
    monthlyPayment =
      userLoanAmt *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -userLoanDurationInMonths)));
  }

  return monthlyPayment;
}

// function to display monthly payment
function displayMonthlyPayment(getPayment, userLang) {
  prompt(getMessages(`monthlyPayment`, userLang));
  console.log(`$${getPayment.toFixed(2)}`);
}

// function to prompt user to calculate again and retrieve valid input
function getAnotherPayment(userLang) {
  prompt(getMessages('calculateAgain', userLang));
  let calculateMortgageLoanAgain = READLINE.question();
  while (!['1', '2'].includes(calculateMortgageLoanAgain)) {
    prompt(getMessages('mustChoose2', userLang));
    calculateMortgageLoanAgain = READLINE.question();
  }

  if (calculateMortgageLoanAgain !== '1') {
    prompt(getMessages('thankYou2', userLang));
  }
  if (calculateMortgageLoanAgain === '1') {
    prompt(getMessages('again2', userLang));
    console.clear();
    mortgageCalculator();
  }
}

// function to start the calculator function invocations
function mortgageCalculator() {
  // function invocation to prompt user for desired loan amount
  let userLoanAmt = getLoanAmount(userLang);

  // function invocation to prompt user for APR
  let userAPR = getApr();

  // function invocation to prompt user for loan duration
  let userLoanDurationInYears = getLoanDuration();

  // function invocation to calculate monthly payment
  let calculateMonthlyPayment = calculateMortgageLoan(
    userLoanAmt,
    userAPR,
    userLoanDurationInYears
  );

  // function invocation to display monthly payment
  displayMonthlyPayment(calculateMonthlyPayment);

  // function invocation to calculate again and retrieve valid input
  getAnotherPayment();
}
