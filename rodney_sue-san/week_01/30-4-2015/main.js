// Extend the default Number object with a formatMoney() method:
// usage: someVar.formatMoney(decimalPlaces, symbol, thousandsSeparator, decimalSeparator)
// defaults: (2, "$", ",", ".")


Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
	places = !isNaN(places = Math.abs(places)) ? places : 2;
	symbol = symbol !== undefined ? symbol : "$";
	thousand = thousand || ",";
	decimal = decimal || ".";
	var number = this, 
	    negative = number < 0 ? "-" : "",
	    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	    j = (j = i.length) > 3 ? j % 3 : 0;
	return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};






// -----------------------------------Geometry Function Lab-----------------------------------
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

// -----------------------------------Geometry Function Lab-----------------------------------

var rectangle = {
  length: 8,
  width: 4
};


var isSquare = function(rec){
	if(rec.length === rec.width){
		console.log("Is a square");
		return true;
	}else{
		console.log("Is not a square");
		return false;
	}
}

var areaRec = function(rec){
	var recArea = rec.length * rec.width;
	console.log("Area of rectangle is " + recArea.toPrecision(3) )
	return recArea.toPrecision(3);
}

var perimeterRec = function(rec){
	var recPerim = (rec.length *2) + (rec.width *2);
	console.log("perimeter of rectangle is " + recPerim);
	return recPerim;
}

isSquare(rectangle);
areaRec(rectangle);
perimeterRec(rectangle);


// -----------------------------------Part 2, Triangle-----------------------------------

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

// -----------------------------------Part 2, Triangle-----------------------------------


var triangle = {
  sideA: 8,
  sideB: 8,
  sideC: 10
};


var isEquilateral = function(tri){
	if(tri.sideA === tri.sideB && tri.sideA ===tri.sideC){
		console.log("This triangle is equilateral!!!!!");
		return true;
	}else{
		console.log("FAIL!!! This triangle is not equilateral");
		return false;
	}

}


var isIsosceles = function(tri){
	if( tri.sideA === tri.sideB || tri.sideA ===tri.sideC || tri.sideB === tri.sideC ){
		console.log("This triangle is an isosceles!!!!!");
		return true;
	}else{
		console.log("FAIL!!!! This triangle is not an isosceles");
		return false;
	}

}

// Classic Heron's Formula: 
// s = (a+b+c)/2 
// Area = √( s(s-a)(s-b)(s-c) ) 

var areaTri = function(tri){
	var s = ( (tri.sideA + tri.sideB + tri.sideC)/2  );

	var area = Math.sqrt(s *(s-tri.sideA)*(s-tri.sideB)*(s-tri.sideC));

	console.log("Area of triangle is " + area.toPrecision(3));
	return area.toPrecision(3);
}




var isObtuse = function(tri){

	var sides = [tri.sideA, tri.sideB, tri.sideC];									//place the 3 sides into an array
	sides.sort(function(a, b){return b-a});													//largest > smallest. largest is index 0

	var obtuseNum = Math.pow(sides[0], 2) -  (Math.pow(sides[1], 2) + Math.pow(sides[2], 2));
	
																																	
	if(obtuseNum > 0){																						//obtuseNumber c^2 - (a^2 + b^2) if greater than
		console.log("Triangle is obtuse");													//0 its obtuse!
		return true;
	}else{
		console.log("Triangle is not obtuse");
		return false;
	}
}



isEquilateral(triangle);
isIsosceles(triangle);
areaTri(triangle);
isObtuse(triangle);




// ----------------------------------------------JavaScript Bank----------------------------------------------

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// ----------------------------------------------JavaScript Bank----------------------------------------------






var trustBank = {

	customer:[],
	addAccount : function(nameIn, moneyIn){
			var user =	{
					name: nameIn,
					amount: moneyIn,
					balance: function() {
	    			console.log(user.name+ " you have: "  + user.amount.formatMoney() + " in your account");
					},
					deposit: function(i, show) {
						user.amount = user.amount + i;
						var showM = show																			
																																	
							if(show != false){																//showM used to supress message when transfering
								showM = true;																		//between accounts
							}
							if(showM){
								console.log("You deposited $" + i + " you now have " + user.amount.formatMoney() + " in your account");
							}
					},
					withdraw: function(i, show) {
						var showM = show;

							if(show != false){
								showM = true;
							}

							if(i <= user.amount){																//will not allow account to be negative
									user.amount = user.amount - i;
									if(showM){
											console.log("You withdrew $" + i + " you now have " + user.amount.formatMoney() + " in your account");
									}
									return true;

							}else{
									console.log("Can not withdraw $" + i);
									return false;
							}

					}
			};
		trustBank.customer.push(user);
	},	//add account function end																												
	transfer : function(amount, acc1, acc2){

		

		var nameOut = trustBank.customer[acc1].name;
		var nameIn = trustBank.customer[acc2].name;


		if(trustBank.customer[acc1].withdraw(amount, false)){

			trustBank.customer[acc2].deposit(amount, false);

			console.log("successfully transfered " + amount.formatMoney() + " from "+ nameOut + " account to " + nameIn+" account");
		}else{
			console.log("unable to transfer money due to insufficent funds");
		}

	}

};	//trustBank object end

trustBank.addAccount("Ben", 1000);
trustBank.addAccount("Jamie Smith", 100);
trustBank.addAccount("Mak Malloney", 50000);
trustBank.addAccount("Jamie Smith", 900000);

trustBank.customer[2].balance();
trustBank.customer[2].withdraw(200);
trustBank.customer[3].deposit(99);

trustBank.transfer(20, 0, 1);










