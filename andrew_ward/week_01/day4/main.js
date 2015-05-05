// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function (obj) {
	if (obj.length === obj.width) { // if sides are same this is a square
		console.log(true);
	} else {
		console.log(false);
	}
};

isSquare(rectangle);

var area = function (obj) {
	var total = obj.length * obj.width // area is width times width
	console.log(total);
};

area(rectangle);

var perimeter = function (obj) {
	var total = (obj.length * 2) + (obj.width*2); // perimeter is 2 x length and 2 x width
	console.log(total);
};
perimeter(rectangle);

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function (obj) {
	if (obj.sideA === obj.sideB /*&& obj.sideC*/ === obj.sideB) { // if all sides are equal it is equilateral
		console.log('This is equilateral.')
	} else {
		console.log('This is not equilateral.')
	}
};

isEquilateral(triangle);

var isIsosceles = function (obj) {
	if (obj.sideA === obj.sideB && obj.sideA !== obj.sideC) { // checks if 2 sides are equal
		console.log('This is isosceles');
	} else if (obj.sideA === obj.sideC && obj.sideA !== obj.sideB) {
		console.log('this is isosceles');
	} else if (obj.sideB === obj.sideC && obj.sideB !== obj.sideA) {
		console.log('this is isosceles');
	} else {
		console.log('this ain\'t isosceles!')
	}
};

isIsosceles(triangle);

var area = function (obj) {
	var s = (obj.sideA + obj.sideB + obj.sideC) / 2; // heron's formula's first step
	var a = s * (s - obj.sideA) * (s - obj.sideB) * (s - obj.sideC);
	var aRooted = Math.sqrt(a);
	console.log(aRooted);
};

area(triangle);

var isObtuse = function (obj) {
	// a2 + b2 are lower than c2 it is obtuse
	var hypotenuse = 0;
	if (obj.sideA > obj.sideB && obj.sideA > obj.sideC) {
		hypotenuse = obj.sideA;
		if (hypotenuse * hypotenuse > ((obj.sideB * obj.sideB) + (obj.sideC * obj.sideC))) {
			console.log('this is obtuse');
		}
	} else if (obj.sideB > obj.sideA && obj.sideB > obj.sideC) {
		hypotenuse = obj.sideB;
		if (hypotenuse * hypotenuse > ((obj.sideA * obj.sideA) + (obj.sideC * obj.sideC))) {
			console.log('this is obtuse');
		}
	} else if (obj.sideC > obj.sideA && obj.sideC > obj.sideB) {
		hypotenuse = obj.sideC;
		if (hypotenuse * hypotenuse > ((obj.sideB * obj.sideB) + (obj.sideA * obj.sideA))) {
			console.log('this is obtuse');
		}
	} else {
		console.log('this is not an obtuse-angled triangle')
	}

};

isObtuse(triangle);

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

// TO DO:
// Bank items to do:

// In bank array I need:
// ARRAY of accounts X
// FUNCTION to check money sum of all accounts X
// OBJECT CONSTRUCTOR which creates account and adds to ARRAY of accounts X

// accounts characters need:
// KEY/VALUES of current balance & owner X
// BALANCE which changes X
// FUNCTION for deposit X
// FUNCTION for withdraw X

var NewAccount = function (balance,owner) { // creates new accounts
	this.balance = balance;
	this.owner = owner;
	this.deposit = function (amount) { 				// deposit function
		this.balance = this.balance + amount;
		console.log('Depositing $' + amount + '. New balance is $' + this.balance);
	};
	this.withdraw = function (amount) {  			// withdraw function
		if (amount < this.balance) {
		this.balance = this.balance - amount
	} else {
		console.log('Tried to withdraw $' + amount + '. You do not have enough funds. Get an income');
	};
		console.log('Current balance is $' + this.balance);
	}
	};

var bank = {
	createAcc: function (accountName,bal,owner) { 
		var accountName = new NewAccount(bal,owner);
		bank.accounts.push(accountName); // uses newAccount to create account and push to account array
	}, 
	accounts: [], // array of all accounts created;
	balOfAcc: function () { // total balance of all accounts with bank
		var sum = 0
		for(var i = 0; i < bank.accounts.length; i += 1) {
			sum = sum + bank.accounts[i].balance;
		}
		console.log('There is $' + sum + ' in the bank\'s accounts');
	},
	transfer: function (payerInd,payeeInd,amount) {
		if (amount > bank.accounts[payerInd].balance) { // cannot transfer if insufficient funds
			console.log('Insufficient funds to complete transaction.')
			return 'owned'
		} else { // adds or removes money from account as required
			bank.accounts[payerInd].balance = bank.accounts[payerInd].balance - amount;
			bank.accounts[payeeInd].balance = bank.accounts[payeeInd].balance + amount;
		}

		console.log(bank.accounts[payerInd].owner +
			' transferred $' + amount + ' to ' +
			bank.accounts[payeeInd].owner);

		console.log(bank.accounts[payerInd].owner +
		'\'s new balance is $' +
		bank.accounts[payerInd].balance);

		console.log(bank.accounts[payeeInd].owner +
			'\'s new balance is $' +
			bank.accounts[payeeInd].balance);
	}
};

// fuck yeah code feels short but the transfer function is not pretty.

// narrative time
bank.balOfAcc();
console.log('creating an account for me with $500');
bank.createAcc('rand',500,'rand ward');
console.log('account name is ' + bank.accounts[0].owner + ' and balance is $' + bank.accounts[0].balance);
console.log('creating an account for the big bad wolf with $501');
bank.createAcc('biggy',501,'Big Bad Wolf');
console.log('account name is ' + bank.accounts[1].owner + ' and balance is $' + bank.accounts[1].balance);
console.log('I will try to withdraw $600');
bank.accounts[0].withdraw(600);
console.log('I will now deposit my pocket change');
bank.accounts[0].deposit(1000000);
console.log('Big Bad Wolf has decided to send me his money for an emergency taco fund');
bank.transfer(1,0,500);
console.log('Big Bad Wolf decides he has not transferred enough to me and decides to try and transfer $2');
bank.transfer(1,0,2);
console.log('lastly we can view the total amount of money deposited within the bank');
bank.balOfAcc();










