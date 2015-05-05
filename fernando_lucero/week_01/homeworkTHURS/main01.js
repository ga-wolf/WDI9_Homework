console.log ("Homework Thursday 30/4/15");

// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
	length: 4,
	width: 4,
};

var isSquare = function(rect) {
	if (rectangle.length === rectangle.width) { //if rectangle length X width = square
		console.log("Rectangle is square!");
	}
	else {
		console.log("Rectangle is NOT square!");
	}
}


var getArea = function(rect) {
	var area = rectangle.length * rectangle.width;
	console.log("Area for this rectangle is " + area);
}


var getPerimeter = function(rect) {
	var perimeter = (rectangle.width * 2) + (rectangle.length * 2);
	console.log("Perimeter of this rectangle is " + perimeter);
}


// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

var triangle = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

var isEquilateral = function(tri) {
	if ( triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC ) {
		console.log("This triangle is equilateral!");
	}
	else {
		console.log("This triangle is NOT equilateral");
	}
}

var isIsosceles = function(tri) {
	if (( triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB ) || 
	    ( triangle.sideB === triangle.sideA && triangle.sideB !== triangle.sideC ) ||
	     ( triangle.sideC === triangle.sideB && triangle.sideC !== triangle.sideA )) {
		console.log("This triangle is isosceles");
	}
	else {
		console.log("This triangle is NOT isosceles");
	}	
}




var getTriArea = function(triangle) {
	var S = ((triangle.sideA + triangle.sideB + triangle.sideC) / 2 ); //calcualtes S (ie.half perimeter) needed for following area Heron formula
	var area = Math.sqrt(S * (S - triangle.sideA) * (S - triangle.sideB) * (S - triangle.sideC)) // inputs S into Heron formula
	console.log("The area of this triangle is " + area.toFixed(2)); // .toFixed() lets me round off to my desired decimal place.
}



var isObtuse = function(triangle) {
	if ((triangle.sideC * triangle.sideC) > ((triangle.sideA * triangle.sideA) + (triangle.sideB * triangle.sideB))) {
		console.log("This triangle is obtuse!");
	}
	else {
		console.log("This triangle is NOT obtuse!");
	}
}

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


// MY BANK

var bank = [ // created an array to store accounts.
	{name: "Fernando Lucero" , balance: 500},
	{name: "Peter Jacobs" , balance: 650},
	{name: "John Do" , balance: 175}
];

var addNewAccount = function(name,balance) { // function to add an account to bank array.
	var newAcc = {name: name, balance: balance}; //create an object to store parameters to go into newAcc.
	bank.push(newAcc); //Once stored, gets pushed onto the bank array.
	console.log("New account created for " + name +". Balance is " + balance);
};

var totalBankSum = function() {
	var totalSum = 0;
	for ( var i = 0 ; i < bank.length; i ++ ) { //iterates through the account balances.
		totalSum += bank[i].balance; //adds them together.
	}
	console.log("Total bank balance is " + totalSum);
	return totalSum;
};

var transactions = function(name,funds,transType) { //ask for a name, amount to transfer, type of transaction ie. deposit "d" or withdrawl "w".
	var newBalance = 0;

	for ( var i = 0 ; i < bank.length ; i ++ ) {
		if (bank[i].name === name) { // searching for a name match.
			console.log("Account " + name + " has been found");
			console.log("Current account balance was " + bank[i].balance);
			var currentBalance = bank[i].balance;

			if ( transType === "d" ) { // if found and transType is "d" for deposit, execute this code.
				bank[i].balance = currentBalance + funds;
				console.log("Amount " + funds + " has been deposited into your account");
				console.log("New current balance is " + bank[i].balance);
				return bank[i].balance;//	break;
			} else if ( transType === "w" ) { // if found and transType is "w" for withdrawl, execute this code.
				bank[i].balance = currentBalance - funds;
				console.log("Amount " + funds + " has been withdrawn from your account");
				console.log("New current balance is " + bank[i].balance);
				return bank[i].balance;	// break;
			}
		}
	}
	// debugger;
	console.log( "No account was found with that name, " + name);
};

