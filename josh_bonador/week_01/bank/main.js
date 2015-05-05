// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
    length: 4,
    width: 4
}

var isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
      console.log('Shape is a square')
    } else {
      console.log('Shape is a rectangle')
    }
}

var calculateArea = function(rectangle) {
    var area = rectangle.length * rectangle.width;
    console.log(area);
}

var calculatePerimeter = function(rectangle) {
    var perimeter = (rectangle.length * 2) + (rectangle.length * 2);
    console.log(perimeter);
}

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
    a: 3,
    b: 4,
    c: 4
}

var isEquilateral = function(triangle) {
    if (triangle.a === triangle.b === triangle.c) {
      console.log('Triangle is equilateral')
    } else {
      console.log('Triangle is not equilateral')
    }
}

var isIsosceles = function(triangle) {
    if ((triangle.a === triangle.b) && (triangle.c < triangle.a)) {
      console.log('Triangle is an Isosceles triangle')
    } else if ((triangle.b === triangle.c) && (triangle.a < triangle.b)) {
      console.log('Triangle is an Isosceles triangle')
    } else if ((triangle.c === triangle.a) && (triangle.b < triangle.c)) {
      console.log('Triangle is an Isosceles triangle')
    } else {
      console.log('Triangle is not an Isosceles')
    }

}

var triangleArea = function(triangle) {
    var semip = (triangle.a + triangle.b + triangle.c) / 2 ; 
    var area = (semip * (semip - triangle.a) * (semip - triangle.b) * (semip - triangle.c))
    var calculate = Math.sqrt(area)
    return calculate 
}

var isObtuse = function(triangle) {
     if (triangle.a === triangle.b || triangle.a === triangle.b || triangle.b === triangle.c) {
      console.log('Triangle is not an Obtuse triangle')
     } else {
      console.log('Triangle is an Obtuse triangle')
     }
}


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

console.log('Operating bank functions to use:')
console.log('  bank.addAccount(accountName)')
console.log('  bank.deposit(accountName, depositAmount)')
console.log('  bank.withdraw(accountName, withdrawAmount)')
console.log('  bank.transfer(fromAccount, toAccount, transferAmount)')

var balanceSum = 0
var bank = {
    accounts: [{name: 'josh', amount: 1000}, {name: 'andrew', amount: 500}, {name: 'jack', amount: 200}],
    returnAmount: function() {
      var totalSum = 0;
      for (var b = 0; b < bank.accounts.length; b++) {
          var bankAccounts = bank.accounts[b];          //amount in each account is a variable 
          totalSum = totalSum + bankAccounts.amount;
      }
      console.log('The bank is currently holding:')
      console.log(totalSum);
    },
    addAccount: function(accountName) {
        bank.accounts[bank.accounts.length] = {name: accountName, account: 0}
        console.log('Successfully added ' + accountName + "'s account!")
        return bank.accounts[(bank.accounts.length) - 1]
    },
    deposit: function(accountName, depAmount) {
        for (var b = 0; b < bank.accounts.length; b++) {
          var bankAccounts = bank.accounts[b];            
          if (bank.accounts[b].name === accountName) {
            console.log('Account previous balance:');
            console.log(bank.accounts[b]);
            bank.accounts[b].amount += depAmount
            console.log('Displaying new account balance:')
            console.log(bank.accounts[b])
            break;
                   // for loop iterates through the accounts
                   // line 130: attempts to match inputted name with an account name. deposits money thusly 
          }
        }
    },
    withdraw: function(accountName, witAmount) {
        for (var b = 0; b < bank.accounts.length; b++) {
          var bankAccounts = bank.accounts[b];
          if (bank.accounts[b].name === accountName) {
            console.log('Account previous balance:');
            console.log(bank.accounts[b]);
            bank.accounts[b].amount -= witAmount
            console.log(bank.accounts[b])
            console.log('Displaying new account balance:')
            break;

                  // functions exactly the same as deposit method except subtracts from an account
          }
        }
    },
    transfer: function(account1, account2, transferAmount) {
        for (var b = 0; b < bank.accounts.length; b++) {
          var bankAccounts = bank.accounts[b];
          if (bank.accounts[b].name === account1) {
            bank.accounts[b].amount -= transferAmount
            console.log('Taken ' + transferAmount + ' out of ' + account1 + "'s account")
            console.log(bank.accounts[b])
            break;

                  //essentially combining the deposit and withdraw functions together
          }
        }
        for (var b = 0; b < bank.accounts.length; b++) {
          var bankAccounts = bank.accounts[b];
          if (bank.accounts[b].name === account2) {
            bank.accounts[b].amount += transferAmount
            console.log('Transfered ' + transferAmount + ' into ' + account2 + "'s account")
            console.log(bank.accounts[b])
            break;
          }
        }
    }
} 


