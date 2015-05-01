// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

var rectangle = {
	length: null,
	width: null
};

isSquare = function(num1, num2){
	rectangle.length = num1;
	rectangle.width = num2;
	if(rectangle.length === rectangle.width){
		return ('This is a square');
	}
	else{
		return ('This is not a square')
	}
	return
	
}

area = function (num1, num2){
	rectangle.length = num1;
	rectangle.width = num2;

	return Math.PI * rectangle.length * rectangle.width
}

perimeter = function (num1, num2){
	rectangle.length = num1;
	rectangle.width = num2;

	return rectangle.length * rectangle.width
}

//console.log(perimeter(46, 4))

/////////////////////////

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
	sideA: null,
	sideB: null,
	sideC: null
}

isEquilateral = function(num1, num2, num3){
	var sideA = num1;
	var sideB = num2;
	var sideC = num3;
	if(sideA !== sideB && sideA !== sideC){
		return 'The triangle is not equilateral'
	}
	else{
		return 'The triangle is equilateral'
	}
}

isIsosceles = function(num1, num2, num3){
	var sideA = triangle.sideA = num1;
	var sideB = triangle.sideB = num2;
	var sideC = triangle.sideC = num3;
	if(sideA === sideB && sideA !== sideC){
		return 'The triangle is isosceles';
	}
	else if(sideB === sideC && sideB !== sideA){
		return 'The trianle is isosceles';
	}
	else if(sideC === sideA && sideC !== sideB){
		return 'The triangle is isosceles';
	}
	else{
		return 'The triangle is not isosceles';
	}
};


triangleArea = function(num1, num2, num3){
	triangle.sideA = num1;
	triangle.sideB = num2;
	triangle.sideC = num3;

	return num1 * num2 * num3
}

//console.log(triangleArea(46,4,2))


// // triangleObtuse = function(){
// 	triangle.sideA = num1;
// 	triangle.sideB = num2;
// 	triangle.sideC = num3;

// // }

//////////////////////////

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

var bank = {
	accounts: [{
		name: 'test',
		balance: 200
	}],

	addAccount: function (accName, balance){
		if( balance < 0){
			return console.log('Not enough money');
		}
		var newAccount = { name: accName, balance: balance };
		bank.accounts.push( newAccount );

		// bank.accounts = accName;
	},
	addFunds: function(acc, fundsToAdd){
			bank.accounts[acc].balance += fundsToAdd;
	},
	rmFunds:function(acc, fundsToRemove){
		if(fundsToRemove > bank.accounts[acc].balance){
			return console.log("Sorry but you don't have enough money");
		}
		bank.accounts[acc].balance -= fundsToRemove;
	},
	sumOfMoney:function(){
		var result = 0;
		for(var i = 0; i < bank.accounts.length; i++ ){
			result += bank.accounts[i].balance;
		}
		return result;
	},
	transFunds: function(acc1, acc2, num1){
		if(num1 > bank.accounts[acc1].balance){
			return console.log("Sorry but you don't have enough money");
		}
		bank.rmFunds(acc1, num1);
		bank.addFunds(acc2, num1);
	}
}
bank.addAccount('super', 300);
bank.addFunds(1, 500);
bank.rmFunds(1, 999999);
bank.sumOfMoney()


