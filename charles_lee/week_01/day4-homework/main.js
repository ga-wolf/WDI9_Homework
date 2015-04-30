//GEOMETRY FUNCTION LAB
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
	width: 4
};
var isSq = false;
function isSquare(rectangle){

	if(rectangle.length == rectangle.width){
		isSq = true;
		return isSq; 
	}else{
		return isSq;
	}
}
function rectArea(rectangle){
	var area = rectangle.length * rectangle.width;
	var areaLog =  "The area is " + area; 
	return areaLog;
}

function rectPeri(rectangle){
	var perimeter = (2*rectangle.length) + (2*rectangle.width);
	var perimeterLog = "The perimeter is: " + perimeter;
	return perimeterLog;
}

console.log(isSquare(rectangle));
console.log(rectArea(rectangle));
console.log(rectPeri(rectangle));

var triangle = {
	sideA : 3,
	sideB: 4,
	sideC: 4,
}

function isEquilateral(triangle){
		if(triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC){
			return true;
		}
		else{
			return false;
		}
	}
console.log(isEquilateral(triangle));

function isIsoscles(triangle){
	if(!(isEqulateral(triangle))){
		if(triangle.sideA === triangle.sideB || triangle.sideB == triangle.sideC || triangle.sideA == triangle.sideC){
			return true;
		}
	}
	else{
		return false; 
	}
}

function areaTri(triangle){
	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;
	var s = (a+b+c)/2; //semiperimeter 
	var total = s*(s-a)*(s-b)*(s-c);
	var area = Math.sqrt(total);
	areaLog = "The area of this triangle is: " + area;
	return area;
}

function isObtuse(triangle){
	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;

	var aSq =Math.pow(a,2);
	var bSq= Math.pow(b,2);
	var cSq = Math.pow(c,2);

	if((aSq + bSq ) < cSq ){
		return true;
	}
	else if((bSq+cSq) < aSq){
		return true;
	}
	else if((aSq+cSq) < bSq){
		return true;
	}
	else{
		return false;
	}
}

console.log(isObtuse(triangle));
console.log(areaTri(triangle));

var obj = {
	owner: "Charles",
	balance: 20000,
	deposit: function(depositAmount){
		this.balance = this.balance+depositAmount;
		var newBalance = "Your new balance is: " + this.balance;
		return newBalance;
	},
	withdraw: function(withdrawAmount){
		this.balance = this.balance-withdrawAmount;
		var newBalance = "Your new balance is: " + this.balance;
		return newBalance;

	}
};
// console.log(obj.balance);
// console.log(obj.deposit(200));
// console.log(obj.withdraw(100));

var accList = [];
var bank = {
	accountList: accList,
	shittyATM: function(){
		//Take prompt results and store as variable. search term for account owner name;
		var accOwnerName = prompt("What is your name?");

		//Take prompt result and store as variable
		var typeOftransaction = prompt("what would you like to do today? Withdraw or Deposit?").toLowerCase();
		var counter = 0;

		for(i=0; i<accList.length; i++){
			console.log(accList[i]);
			if(accList[i].owner === accOwnerName){
				counter++;

				if(typeOftransaction === "withdraw"){
					var withdrawAmount = parseInt(prompt("How much would you like to withdraw?"));
					console.log(withdrawAmount);
					accList[i].withdraw(withdrawAmount);
					console.log("Your account has been updated");
				}

				else if(typeOftransaction ==="deposit"){
					var depositAmount = parseInt(prompt("How much would you like to deposit?"));
					accList[i].deposit(depositAmount);
					console.log("Your account has been updated");
				}
			} 
		}

		if(counter === 0){
			console.log("I'm sorry this account does not exist");
		}		
	},
	transfer: function (){
		var p1Name= prompt("What is your name?").toLowerCase();
		var p2Name= prompt("Who do you want to transfer to?").toLowerCase();
		var transferAmount= parseInt(prompt("How much do you want to transfer?"));
		var acc1Index = getAccount(p1Name);
		var acc2Index = getAccount(p2Name);
		accList[acc1Index].balance = accList[acc1Index].balance - transferAmount;
		accList[acc2Index].balance = accList[acc2Index].balance + transferAmount;
		var transferstatement = "Transfer was successful! " + accList[acc1Index].owner + " now has " 
		+ accList[acc1Index].balance + ". " + accList[acc2Index].owner + " now has " + accList[acc2Index].balance;
		console.log(transferstatement);
	},

	addAccount: function(ownerName, accBalance){
		accList.push(
			{
			owner: ownerName.toLowerCase(),
			balance: accBalance,
			deposit: function(depositAmount){
				this.balance = this.balance+depositAmount;
				var newBalance = "Your new balance is: " + this.balance;
				console.log(newBalance);
				return this.Balance;
			},
			withdraw: function(withdrawAmount){
			var balance = this.balance-withdrawAmount;
			var newBalance = "Your new balance is: " + this.balance;
			console.log(newBalance);
				if(balance < 0){
					var accWarning = "You do not have sufficient funds to make this transaction";
					console.log(accWarning);
					var newBalance = "Your current balance is: " + this.balance;
					return this.Balance;
				} else {
					this.balance = balance;
					console.log(newBalance);
					return this.balance;
				}
			return newBalance;

			}
		})
	}
};

bank.addAccount("Charles", 300);
console.log(bank.acclist);
bank.addAccount("Betsy", 4000);
bank.addAccount("Jenny", 3000);
bank.addAccount("James", 10);
console.log(bank.acclist);
function getAccount(ownerName){
	console.log(ownerName);
	for(i=0; i<accList.length; i++){
		if(accList[i].owner === ownerName){
			console.log("Found a match");
			console.log(i)
			return i; 
		}
	}
}
//function that prompts the user for account information and executes commands based on prompts.


// bank.ATM();
bank.transfer(300);


