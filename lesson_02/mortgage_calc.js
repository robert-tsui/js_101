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

// clarify whether the program expects a percent format or a decimal format
// disallow negative values for the loan amount, the APR and the loan duration
// disallow 0 for the loan amount and the loan duration
// allow decimal values for APR
// accept loan durations in months instead of years - some loans are specified in terms of 30 month durations
// change the descriptive name `messages` for the `messages` function to something like `getMessage`
// change the descriptive name `userLanguage` to something like `chooseLanguage`
// extract the action of reporting the final calculation to its own function
// extract to their own functions
// choosing a user's language
// getting / validating a user's loan amount
// getting / validating an interest rate
// getting / validating a loan duration
// asking the user if they want to run another calculation

// const variables
const READLINE = require(`readline-sync`);
const MESSAGES = require('./calculator_messages.json');

// select user language (french and english)
prompt(messages('preferredLang', 'en'));
prompt(messages('preferredLang', 'fr'));

// prompt user input for desired language
// and returns a valid input ('en' or 'fr')
let userLang = READLINE.question();
userLang = userLanguage(userLang, requestInput);

// welcomes user
prompt(messages('welcome', userLang));
while (true) {
  // prompts user for loan amount and retrieves valid number
  prompt(messages('loanAmount', userLang));
  let userLoanAmt = READLINE.question();
  while (invalidNumber(userLoanAmt)) {
    prompt(messages('incorrect', userLang));
    userLoanAmt = READLINE.question();
  }

  // prompts user for APR and retrieves valid percentage as a whole number
  prompt(messages('APR', userLang));
  let userAPR = READLINE.question();
  while (invalidPercentage(userAPR)) {
    prompt(messages('incorrect2', userLang));
    userAPR = READLINE.question();
  }

  // prompts user for loan duration in years and retrieves valid input
  prompt(messages('loanDuration', userLang));
  let userLoanDurationInYears = READLINE.question();
  while (invalidNumber(userLoanDurationInYears)) {
    prompt(messages('incorrect', userLang));
    userLoanDurationInYears = READLINE.question();
  }

  // calculator function invocation
  calculateMortgageLoan(userLoanAmt, userAPR, userLoanDurationInYears);

  // prompts user to perform additional calculations and retrieves valid input
  prompt(messages('calculateAgain', userLang));
  let calculateMortgageLoanAgain = READLINE.question();
  while (!['1', '2'].includes(calculateMortgageLoanAgain)) {
    prompt(messages('mustChoose2', userLang));
    calculateMortgageLoanAgain = READLINE.question();
  }
  if (calculateMortgageLoanAgain !== '1') {
    prompt(messages('thankYou2', userLang));
    break;
  }
  if (calculateMortgageLoanAgain === '1') {
    prompt(messages('again2', userLang));
    console.clear();
  }
}

// function to log marker
function prompt(message) {
  console.log(`=> ${message}`);
}

// function to retrieve messages from json file
function messages(message, userLang = 'en') {
  return MESSAGES[userLang][message];
}

// function to retrieve valid language input
function userLanguage(userLang, cb) {
  while (userLang !== 'en' && userLang !== 'fr') {
    userLang = cb(
      messages('validLang', 'en') + '\n' + messages('validLang', 'fr')
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

// function to check for invalid percentage as a whole number
function invalidPercentage(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || num % 1 !== 0;
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
  prompt(messages(`monthlyPayment`, userLang)) +
    console.log(`$${monthlyPayment.toFixed(2)}`);
}
