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

function prompt(msg) {
	console.log(`=> ${msg}`);
}

prompt(MESSAGES["en"]["welcome"]);
while (true) {
	prompt(MESSAGES["en"]["loanAmount"]);
	userLoanAmt = readline.question();

	prompt(MESSAGES["en"]["APR"]);
	userAPR = readline.question();

	prompt(MESSAGES["en"]["loanDuration"]);
	userLoanDurationInYears = readline.question();

	let monthlyInterestRate = userAPR / 12;
	let userLoanDurationInMonths = userLoanDurationInYears * 12;

	console.log("monthlyInterestRate: ", monthlyInterestRate);
	console.log("userLoanDurationInMonths: ", userLoanDurationInMonths);
	console.log("userLoanAmt: ", userLoanAmt);

	calculateMortgageLoan();

	function calculateMortgageLoan(
		userLoanAmt,
		monthlyInterestRate,
		userLoanDurationInMonths
	) {
		console.log("monthlyInterestRate: ", monthlyInterestRate);
		console.log("userLoanDurationInMonths: ", userLoanDurationInMonths);
		console.log("userLoanAmt: ", userLoanAmt);
		let monthlyPayment =
			userLoanAmt *
			(monthlyInterestRate /
				(1 - Math.pow(1 + monthlyInterestRate), -userLoanDurationInMonths));
		console.log("monthly payment: ", monthlyPayment);
		return monthlyPayment;
	}
	prompt(MESSAGES["en"]["monthlyPayment"]);
}
