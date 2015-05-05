// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};


var cat = {
  length: 6,
  width: 4
};


var isSquare = function(object){
  if (object.length === object.width) {
    return true;
  }
  else{return false;}
}





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

var triangle2 = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

var triangle3 = {
  sideA: 3,
  sideB: 4,
  sideC: 5
}; 


var isEquilateral = function(object){
  if (object.sideA === object.sideB && object.sideB === object.sideC) { //are all sides are equal
    return true;
  }
  else {
    return false;
  }
}

var isIsosceles = function(object) {
  if (object.sideA === object.sideB && (!(object.sideA === object.sideC)) || //if side A matches side B, but not side C
      object.sideA === object.sideC && (!(object.sideA === object.sideB)) || //if side A matches side C, but not side B
      object.sideB === object.sideC && (!(object.sideB === object.sideA)) ){ //If side B matches side C, but not side A
    return true;
  }
  else {
    return false;
  }
}


var isObtuse = function(object) {
  if  (Math.pow(object.sideC, 2) > Math.pow(object.sideA, 2) + Math.pow(object.sideB, 2) || //c^2 > a^2 + b^2
      Math.pow(object.sideB, 2) > (Math.pow(object.sideA, 2) + Math.pow(object.sideC, 2))||//b^2 > a^2 + c^2
      Math.pow(object.sideA, 2) > (Math.pow(object.sideC, 2) + Math.pow(object.sideB, 2))) {//a^2 > c^2 + b^2
    return true;
  }
  else {
    return false;
  }
}




var area = function(object){
  var p = (object.sideA + object.sideB + object.sideC) / 2; //finds the perimeter of the triagle
  var a = Math.sqrt(p * (p - object.sideA)*(p - object.sideB)*(p - object.sideC)); //uses the perimeter to find the area
  return a
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


var bank = [
  {owner: "Mr Wiskers",
  balance: 120},

  {owner: "Meow Mix Pty Ltd",
  balance: 1000000},

  {owner: "Ms Fluffy-Paws",
  balance: 4500},
]

  bank.newAccount = function(name, openingBalance) {
    bank.push({owner: name, balance: openingBalance}); //Puts the new account details into the bank
  };


  bank.totalBalance = function(){
  for (i = 0; i < bank.length; i++){ 
    var monies = bank[i].balance; //Almost works out the total of what's in the bank
    }
  };


//function that loops through all the objects and returns the total of the balance
//function that pushes a new account into the bank...




























































