// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};

var inSquare = function(input) {
	console.log(input.length === input.width);
}

inSquare(rectangle);

var area = function(input) {
	console.log(input.length * input.width);
}

area(rectangle);

var perimeter = function(input) {
	console.log(input.length * 2 + input.length * 2);
}

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
//  js-homework-5.md Raw
var isEquilateral = function(input) {
	console.log(input.sideA == input.sideB && input.sideB == input.sideC);
}

isEquilateral(triangle)

var isIsosceles = function(input) {
	console.log(input.sideA == input.sideB || input.sideB == input.sideC || input.sideC == input.sideA);
}

isIsosceles(triangle)

var area = function(input) {
	var S = (input.sideA + input.sideB + input.sideC)/2;
	var area = Math.pow(S*(S-input.sideA)*(S-input.sideB)*(S-input.sideC) ,0.5);
	console.log(area);
}

area(triangle);

var isObtuse = function(input) {
	console.log((Math.pow(input.sideA, 2) + Math.pow(input.sideB, 2) < Math.pow(input.sideC, 2)) || (Math.pow(input.sideB, 2) + Math.pow(input.sideC, 2) < Math.pow(input.sideA, 2)) || (Math.pow(input.sideC, 2) + Math.pow(input.sideA, 2) < Math.pow(input.sideb, 2)))
}

isObtuse(triangle);


var Wolf = {name:"Wolf", id:0, balance:600};
var Bob = {name:"Bob", id:1, balance:6820};
var Alfie = {name:"Alfie", id:2, balance:5};

var accountArray = [Wolf, Bob, Alfie];
var createAccount = function(inputname, initialDeposit) {
	accountArray.push( {name:inputname, id: accountArray.length, balance: initialDeposit} );
	// accountArray[inputname] = {name:inputname, id: accountArray.length, balance: initialDeposit}
}

var findID = function(nameinput) {
	var num;
	for (var i = 0 ; i < accountArray.length; i++) {
		(accountArray[i].name === nameinput ? num = i : false)
	}
	return num;
	console.log(num);
}

var grabTotal = function() {
	total = 0;
	for (var i = 0 ; i < accountArray.length; i++) {
		ac = accountArray[i]
		total += ac.balance
	}

	console.log(total)
}

var deposit = function(name, amount) {
	num = findID(name);
	console.log(accountArray[num].balance);
	accountArray[num].balance += amount;
	console.log(name + " currently has a balance of " + accountArray[num].balance)
}

var withdraw = function(name, amount) {
	num =findID(name);
	if (accountArray[num].balance - amount > 0) {
		console.log(accountArray[num].balance);
		accountArray[num].balance -= amount;	
		console.log(name + " currently has a balance of " + accountArray[num].balance)
	}
	else {
		console.log("You do not have enough money")
	}
	
}

var transferAmount = function(from, to, amount) {
	accountFrom = findID(from)
	accountTo = findID(to)
	if (accountArray[accountFrom].balance - amount > 0) {
		console.log(accountArray[accountFrom].balance);
		accountArray[accountFrom].balance -= amount;	
		console.log(from + " currently has a balance of " + accountArray[accountFrom].balance)
		accountArray[accountTo].balance += amount;
		console.log(to + "currently has a balance of " + accountArray[accountTo].balance)
	}
	else {
		console.log("You do not have enough money")
	}
	
}

var checkBalance = function(name) {
	num = findID(name)
	console.log(accountArray[num].balance)
}

setInterval(function(){ 
	for (var i = 0 ; i < accountArray.length; i++) {
		accountArray[i].balance = accountArray[i].balance * 1.009
	}
	console.log("0.9% interest added")
	 }, 3000);

// }
console.log(accountArray);
console.log("FUNCTIONS \n createAccount(inputname, initialDeposit) \n grabTotal() \n deposit(name, amount) \n withdraw(name, amount) \n transferAmount(accountFrom, accountTo, amount)");


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
// Additional

// Begin exploring the JavaScript Koans. Fork, clone and start trying them.