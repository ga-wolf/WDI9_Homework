// JavaScript Bank


// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips

// Don't overthink this. Shorter code is probably the answer.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


var bank = {
	accounts: [],

	// Sum the balances for all the account
	sumAccounts: function() {
		var total = 0;
		for(var i = 0; i < bank.accounts.length; i++) {
			total += bank.accounts[i].balance;
		}
		console.log("Sum of account balances: $" + total + "\n\n");
	},

	// Request user input and then pass to the account method to deposit
	deposit: function() {
		acctNum = parseInt(prompt("Into which account do you want to deposit?"));
		amount = parseInt(prompt("How much would you like to deposit?"));
		bank.accounts[acctNum].deposit(amount);
	},

	// Request user input and then pass to the account method to witdraw
	withdraw: function() {
		acctNum = parseInt(prompt("From which account do you want to withdraw?"));
		amount = parseInt(prompt("How much would you like to withdraw?"));
		bank.accounts[acctNum].withdraw(amount);
	},

	// Request user input for transfer details
	transfer: function() {
		fromAcc = parseInt(prompt("Account number to transfer FROM?"));
		toAcc = parseInt(prompt("Account number to transfer TO?"));
		amount = parseInt(prompt("How much would you like to transfer?"));

		// Confirm that the FROM account can afford to do the transfer
		if(bank.accounts[fromAcc].withdraw(amount)) {
			bank.accounts[toAcc].deposit(amount);
		}
	},

	// Create a new account with the passed name and starting balance
	addAccount: function(name, balance){
		var newAcc = {
			name: name,
			balance: balance,

			// Add to the account balance
			deposit: function(amount) {
				return this.balance += amount;
			},

			// Subract from the account balance
			withdraw: function(amount) {
				var newBal = this.balance - amount;
				
				//	check if account is overdrawn
				if(newBal < 0) {
					alert("Transaction Cancelled: You will be overdrawn!!");
					return false;														// Don't complete transaction
				} else {
					return this.balance = newBal;						// Make the transaction
				}
			}
		}
		bank.accounts.push(newAcc);
	}
};


// Display the list of accounts and their details
var displayLedger = function() {
	console.log("\n\n  LEDGER:\n**********");
	for(var i = 0; i < bank.accounts.length; i++) {
		var account = bank.accounts[i];
		console.log("[" + i + "]\t\t" + account.name + "\t\t$" + account.balance);
	}
	console.log("\n\n");
}



console.log("      ______           __     __ __                  ");
console.log("     / ____/___  _____/ /_   / //_/____  ____  _  __ ");
console.log("    / /_  / __ \\/ ___/ __/  / ,<  / __ \\/ __ \\| |/_/ ");
console.log("   / __/ / /_/ / /  / /_   / /| |/ / / / /_/ />  <   ");
console.log("  /_/    \\____/_/   \\__/  /_/ |_/_/ /_/\\____/_/|_|   ");
console.log("                                                     ");
console.log("                 FEDERAL RESERVE ");
console.log("\n\n");


// Show the user the a list of commands
console.log("Commands:");
console.log("Create an account = bank.addAccount(name, balance)");
console.log("Sum the value of account balances = bank.sumAccounts()");
console.log("Withdraw from account = bank.withdraw()");
console.log("Deposit into an account = bank.deposit()");
console.log("Transfer between accounts = bank.transfer()");
console.log("Show a list of account information = displayLedger()");


// Initialise some bank accounts
bank.addAccount("Mark", 350);
bank.addAccount("Rich", 100);
displayLedger();




