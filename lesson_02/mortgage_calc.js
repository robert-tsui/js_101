// ask the user for the loan amount
// ask the user for the annual percentage rate
// ask the user for the loan duration
// convert APR to monthly interest rate
// convert loan duration to months
// perform monthly payment calculation
// display result of calculation

/*
formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months
*/

const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
let userLoanAmt;
let userAPR;
let userLoanDurationInYears;

function prompt(msg) {
	console.log(`=> ${msg}`);
}

function calculateMortgageLoan(
	userLoanAmt,
	monthlyInterestRate,
	userLoanDurationInMonths
) {
	console.log("monthlyInterestRateX: ", monthlyInterestRate);
	console.log("userLoanDurationInMonthsX: ", userLoanDurationInMonths);
	console.log("userLoanAmtX: ", userLoanAmt);
	let monthlyPayment =
		userLoanAmt *
		(monthlyInterestRate /
			(1 - Math.pow(1 + monthlyInterestRate), -userLoanDurationInMonths));
	console.log("monthly payment: ", monthlyPayment);
	prompt(MESSAGES["en"]["monthlyPayment"] + `$${monthlyPayment}`);
	return monthlyPayment;
}

prompt(MESSAGES["en"]["welcome"]);
while (true) {
	prompt(MESSAGES["en"]["loanAmount"]);
	userLoanAmt = readline.question();
	console.log("userLoanAmt: ", userLoanAmt);

	prompt(MESSAGES["en"]["APR"]);
	userAPR = readline.question();
	console.log("userAPR: ", userAPR);

	prompt(MESSAGES["en"]["loanDuration"]);
	userLoanDurationInYears = readline.question();
	console.log("userLoanDurationInYears: ", userLoanDurationInYears);

	let monthlyInterestRate = userAPR / 12;
	let userLoanDurationInMonths = userLoanDurationInYears * 12;

	calculateMortgageLoan(
		userLoanAmt,
		monthlyInterestRate,
		userLoanDurationInMonths
	);

	prompt(MESSAGES["en"]["calculateAgain"]);
	let calculateMortgageLoanAgain = readline.question();
	while (!["1", "2"].includes(calculateMortgageLoanAgain)) {
		prompt(MESSAGES["en"]["mustChoose2"]);
		calculateMortgageLoanAgain = readline.question();
	}
	if (calculateMortgageLoanAgain !== "1") {
		prompt(MESSAGES["en"]["thankYou2"]);
		break;
	}
	if (calculateMortgageLoanAgain === "1") {
		prompt(MESSAGES["en"]["again2"]);
		console.clear();
	}
}
