 // Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not

var isSquare = function(rect) {
  if (rect.length === rect.width) {
    return true;
  } else {
    return false;
  }
};

// area - Returns the area of the rectangle

var areaSq = function(rect) {
  return rect.length * rect.width;
}

// perimeter - Returns the perimeter of the rectangle

var perimeter = function(rect) {
  return 2 * (rect.length + rect.width);
}

var rectangle = {
  length: 4,
  width: 4
};

// Part 2, Triangle

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var triangle2 = {
  sideA: 28,
  sideB: 18,
  sideC: 39
};

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

var isEquilateral = function(tri) {
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return true;
  } else {
    return false;
  }
};

// isIsosceles - Returns whether the triangle is isosceles or not

var isEquilateral = function(tri) {
  if (tri.sideA === tri.sideB || 
    tri.sideB === tri.sideC || 
    tri.sideC === tri.sideA) {
    return true;
  } else {
    return false;
  }
};

// area - Returns the area of the Triangle

var areaTri = function(tri) {
  var halfPer = (tri.sideA + tri.sideB + tri.sideC) / 2;
  var area1 = Math.sqrt(halfPer * 
    (halfPer - tri.sideA) *
    (halfPer - tri.sideB) *
    (halfPer - tri.sideC)
    );
  return area1;
};

// isObtuse - Returns whether the triangle is obtuse or not

var isObtuse = function(tri) {
  var a = tri.sideA;
  var b = tri.sideB;
  var c = tri.sideC;

  if (a >= b & a >= c) {
    var largest = a;
    var small1 = b;
    var small2 = c;
  } else if (b >= a & b >= c) {
    var largest = b;
    var small1 = a;
    var small2 = c;
  } else {
    var largest = c;
    var small1 = a;
    var small2 = b;
  }

  if ((small1 * small1 + small2 * small2) < (largest * largest)) {
    return true;
  } else {
    return false;
  }

};


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

var Accounts = [];
// Account object defined as:
// accname: "Account holders name" (string);
// balance: Amount (number);

console.log('To set up a new account use the newAccount(name, balance) function. List of account commands are withdraw(amount), deposit(amount), checkBalance, transfer(payee, amount). To check the banks total holdings use the bankHoldings() command.')

var Account = function(name, cash) {
  this.name = name;
  this.balance = cash;
   
  this.withdraw = function(amount) {
    if (amount > this.balance) {
      return "Not enough to make a withdrawal";
    } else {
      this.balance = this.balance - amount;
      return "Successfully Withdrew $" + amount + ", current balance is $" + this.balance;
    }
  }
  
  var bank = 10
  bank = bank + 10
  bank += 10



  this.deposit = function(amount) {
    this.balance = this.balance + amount;
    return "Successfully Deposited $" + amount + ", current balance is $" + this.balance;
  }

  this.checkBalance = function() {
    return "Current balance is $" + this.balance;
  }

  this.transfer = function(payee, amount) {
    if (amount > this.balance) {
      return "Not enough to make a withdrawal";
    }
    
    var index;
    for (var i = 0; i < Accounts.length; i++) {
      if (payee === Accounts[i].name) {
        index = i;
      }
    }

    if (!index) {
      return 'Payee not found, transaction cancelled.';
    }

    this.balance -= amount;
    Accounts[index].balance += amount;
    return 'Payment of $' + amount + ' successfully made to ' + payee;
    
  }
};

var newAccount = function(name, cash) {
  if (cash < 0) {
    return 'invalid amount entered, please try again.';
  }
  var newAccount = new Account(name, cash);

  Accounts.push(newAccount);
  newAccount.interest();

};

var bankHoldings = function() {
  var total = 0;
  Accounts.forEach(function(acc) {
    total = total + acc.balance;
  });
  return total;
};

var updateBalance = function () {
  for (var i = 0; i < Accounts.length; i++) {
    Accounts[i].balance += (Accounts[i].balance * 0.002);
  };
  // Iterate through all accounts
  // Change their balance
};

setInterval(updateBalance, 3000);
