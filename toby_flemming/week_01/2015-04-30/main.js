/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

*/
var rectangle = {
  length: 4,
	width: 4
};

var isSquare = function(rec) {
	if (rec.length === rec.width) {
		return true;
	}

	return false;
}

var area = function(rec) {
	return rec.length * rec.width;
}

var perimeter = function(rec) {
	return 2 * rec.length + 2 * rec.width;
}


/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle) {
	if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
		return true;
	}

	return false;
}

var isIsosceles = function(triangle) {
	if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) {
		return true;
	} else if (triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB) {
		return true;
	} else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
		return true;
	}

	return false;
}

var area = function(triangle) {
	var p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;	//Half of perim
	var area = p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC);
	area = Math.sqrt(area);

	return area;
}

var isObtuse = function(triangle) {
	if (Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2) < Math.pow(triangle.sideC, 2)) {
		return true;
	}

	return false;
}


/*
Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.
*/
var bank = {
	accounts: [],

	sumMoney: function() {
		var total = 0;
		bank.accounts.forEach(function(account) {
			total += account.balance;
		});

		console.log('Total sum of all accounts: $' + total);
		return total;
	},

	addAccount: function(name) {
		var newAccount;
		if (name === undefined) {
			console.log('Must provide account name.');
		} else {
			if (bank.accounts.length && bank.accounts.indexOf(name) >= 0) {
				console.log('Account already exists');
				return newAccount;
			}
			newAccount = new account(name);
			bank.accounts.push(newAccount);
			console.log('Account for ' + name + ' has been added.');
		}

		return newAccount;
	},

	findAccount: function(name) {
		var matchedAccount;

		for (var i = 0; i < bank.accounts.length; i++) {
			var account = bank.accounts[i];

			if (account.name === name) {
				matchedAccount = account;
				break;
			}
		}

		return matchedAccount;
	},

	transfer: function(source, dest, amount) {
		var sourceAcc = bank.findAccount(source);
		var destAcc = bank.findAccount(dest);
		var accountFound = true;

		if (sourceAcc === undefined) {
			console.log('No account exists for ' + source);
			accountFound = false;
		}
		if (destAcc === undefined) {
			console.log('No account exists for ' + dest);
			accountFound = false;
		}

		if (!accountFound) {
			return false;
		}
		if (!sourceAcc.withdraw(amount)) {
			return false;
		} else {
			destAcc.deposit(amount);
		}

		console.log('$' + amount + ' has been transfered from ' + source + ' to ' + dest);
	}
};


/*
Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/
function account(name) {
	this.balance = 0;
	this.name = name;

	this.deposit = function(amount) {
		this.balance += amount;

		console.log('$' + amount + ' deposited successfully.  Balance is $' + this.balance);
		return this.balance;
	},

	this.withdraw = function(amount) {
		if (amount > this.balance) {
			console.log('Insufficient funds.')
			return false;
		}

		this.balance -= amount;
		console.log('$' + amount + ' withdrawn successfully.  Balance is $' + this.balance);
		return this.balance;
	}
};
















