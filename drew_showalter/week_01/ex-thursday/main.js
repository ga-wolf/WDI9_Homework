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

var isSquare = function(array) {
	if (array.length === array.width) {
		return true;
	} else {
		return false;
	}
}
console.log(isSquare(rectangle));


var area = function(array) {
	return (array.length * array.width);
}
console.log(area(rectangle));


var perimeter = function(array) {
	return ((array.length * 2) + (array.width * 2));
}
console.log(perimeter(rectangle));


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
var triangle2 = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle) {
	if (triangle.sideA === (triangle.sideB && triangle.sideC)) {
		return true;
	} else {
		return false;
	}
}
console.log(isEquilateral(triangle2));


var isIsosceles = function(triangle) {
	if ((triangle.sideA === (triangle.sideB || triangle.sideC)) || triangle.sideB === triangle.sideC) {
		return true;
	} else {
		return false;
	}
}
console.log(isIsosceles(triangle2));


var areaT = function(triangle) {
	var semiperim = ((triangle.sideA + triangle.sideB +triangle.sideC) / 2);
	return Math.sqrt((semiperim) * (semiperim - triangle.sideA) *
		(semiperim - triangle.sideB) *
		(semiperim - triangle.sideC));
}
console.log(areaT(triangle2));


var isObtuse = function(triangle) {
	//the standard math for getting an angle from 3 sides
	var num = (Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2) - Math.pow(triangle.sideC, 2));
	var denom = 2 * triangle.sideA * triangle.sideB;
	angleC = Math.acos(num/denom);

	//character swapped A & C to get the angle of side A instead of C this time
	var num2 = (Math.pow(triangle.sideC, 2) + Math.pow(triangle.sideB, 2) - Math.pow(triangle.sideA, 2));
	var denom2 = 2 * triangle.sideC * triangle.sideB;
	angleA = Math.acos(num2/denom2);

	//Math.PI is used because that's what 180degrees is in radians. and 90degrees is pi/2
	if ( (angleC || angleA || (Math.PI - angleA - angleC)) > (Math.PI / 2)) {
		return true;
	} else {
		return false;
	}
}
console.log(isObtuse(triangle2));

var triangle3 = {
  sideA: 28,
  sideB: 18,
  sideC: 39
};
console.log(isObtuse(triangle3));



// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
var bank = [
	{named:'Drew Show',
	balance: 15000},
	{named:'Lord Business',
	balance: 150000000},
	{named:'Darth Vader',
	balance: 140}
];

var newSucker = {
	named:'Timmy the toddler',
	balance: 1400
}

var welcomeHeader = function() {
	console.log("Welcome to the bank! \nPlease enter a command!\nOptions are : \ntotalSum\naddAccountObj(new accountobject)\ndepositMula(your name, amount you're depositing)\nwithdrawMula(your name, amount you're withdrawing)\ntransferMula(your name, their name, amount)");
}

var totalSum = function() {
	var init = 0;
	//initializes the variable acc, that is really something stepping through our input array (in this case bank[i])
	//then encloses a nameless function thats sole purpose is to add each step to an initialized zero variable 'init'
	bank.forEach(function(acc) {
		init += acc.balance;
	});
	console.log("The cumulative sum of money in our bank is:")
	console.log(init);
	welcomeHeader();
	return init;
}
//console.log(totalSum(bank));

var addAccountObj = function(newAccount) {
	console.log("Thank you: " + newAccount.named + " for joining our bank!");
	console.log("Your: " + newAccount.balance + " will be quite safe*" )
	bank.push(newAccount);
	console.log("There are now " + bank.length + " total accounts!\n")
	welcomeHeader();
}
// console.log(addAccountObj(newSucker));
// console.log(totalSum(bank));

var depositMula = function(yourname, money) {
	console.log("Thank you for your deposit!");
	bank.forEach(function(acc) {
		if (acc.named === yourname) {
			acc.balance += money;
			console.log("Your new account balance is equal to: " + acc.balance + ".\n");
		}
	});
	welcomeHeader();
}


var withdrawMula = function(yourname, money) {
	bank.forEach(function(acc) {
		if (acc.named === yourname) {
			if (acc.balance - money < 0) {
				console.log("You can't withdraw that much!\nYour account balance is " + acc.balance)
			} else {
				console.log("You've withdrawn " + money + ", " + yourname);
				acc.balance -= money;
				console.log("Your new account balance is equal to: " + acc.balance + ".\n");
			}
		}
	});
	welcomeHeader();
}


var transferMula = function(yourname, theirname, money) {
	bank.forEach(function(acc) {
		if (acc.named === yourname) {
			if (acc.balance - money < 0) {
				console.log("You can't withdraw that much!\nYour account balance is " + acc.balance)
			} else {
				bank.forEach(function(acc2) {
					if (acc2.named === theirname) {
						acc.balance -= money;
						acc2.balance += money;
						console.log("You've given " + money + ", to " + theirname);
						console.log("Your new account balance is equal to: " + acc.balance + ".\n");
					}
				});
			}
		}
	});
	welcomeHeader();
}


welcomeHeader();
totalSum();
addAccountObj(newSucker);
totalSum();
depositMula('Timmy the toddler', 1500);
withdrawMula('Timmy the toddler', 400);
transferMula('Timmy the toddler', 'Darth Vader', 1500)

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