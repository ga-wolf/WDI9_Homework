//Part One rectangle

var rectangle = {    //rectangle is an object that can be called
  length: 4,         // .length can be called
  width: 7           // .width can also be called
};

var isSquare = function (rectangle) {             //defined function isSquare
  if (rectangle.length === rectangle.width ) {    //check if both sides are 
    return true;                                  // equal then return T/F
  } else {
    return false;
  }
} 

var area = function (rectangle) {                // function area defined
  return rectangle.length * rectangle.width      // times the sides to
}                                                //get area by * objects 

var perimeter = function (rectangle) {
  return (rectangle.length * 2) + (rectangle.width * 2)  //this function just returns the perimeter 
}                                                        // by .length * 2 and .width * 2

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 28,                   //
  sideB: 28,
  sideC: 28
};

var isEquilateral = function (triangle) {
  if(triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return 'Is an equilateral triangle.'
  } else {
    return 'Pysch!';
  }
}
console.log(isEquilateral(triangle));

var isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA !==triangle.sideC) {
    return 'Is an isosceles t1';
  } else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA){
    return 'Is an isosceles t2';
  } else if (triangle.sideA === triangle.sideC && triangle.sideC !== triangle.sideB){
    return 'Is an isosceles t3';
  } else {
    return 'Pysch 2';
  }
}
console.log(isIsosceles(triangle));

var areaTri = function (triangle) {
  var s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2
  var a = Math.pow((s * (s - triangle.sideA)*(s - triangle.sideB)*(s - triangle.sideC)),.5)
  return a;
}
console.log(areaTri(triangle));

var isObtuse = function (triangle) {
  var side2c = Math.pow((triangle.sideC),2)
  var side2a = Math.pow((triangle.sideA),2)
  var side2b = Math.pow((triangle.sideB),2)
  if (side2c > (side2a + side2b)) {
    return 'Is an obtuse triangle.'
  } else {
    return 'Pysch 3.'
  }

}
console.log(isObtuse(triangle));

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

var finn = {name: 'Finn the human', balance: 5000000}
var jake = {name: 'Jake the dog', balance: 99999}
var bmo = {name: 'B.M.O', balance: 50}             

var bankAccounts = [finn, jake, bmo];
var createAccount = function(newName,newBalance){
  bankAccounts.push({name: newName, balance: newBalance})
} 

var totalMoney = function (bankAccounts){
  var total = 0;
  for (var i = 0; i < bankAccounts.length; i++) {
    total += bankAccounts[i].balance;

  } 
  console.log(total);
  return total;
}



var findIndex = function (nameFind) {
  for (var i = 0; i < bankAccounts.length; i++) {
    if(bankAccounts[i].name === nameFind){
      return i;
    }
  }
}
var deposit = function (name, amountDepos){
  var i = findIndex(name);
  bankAccounts[i].balance += amountDepos;
  console.log(name + ' has deposited $' + amountDepos);
}

var withdraw = function (name, amountWith){
  var i = findIndex(name);
  if(bankAccounts[i].balance < amountWith){
    return "Not enough funds."
  }else {
    bankAccounts[i].balance -= amountWiths;
    console.log(name + ' has withdrawn $' + amountDWith);
  }
}

var xsfer = function (nameTo, nameFrom, amountX){
  var accTo = findIndex(nameTo);
  var accFrom = findIndex(nameFrom);
  if(bankAccounts[accFrom].balance - amountX < 0) {
    return 'Not Enough money.'
  } else {
    bankAccounts[accFrom].balance -= amountX;
    bankAccounts[accTo].balance += amountX;
  }
}


