  // Homework - Day 4 - Part 2

// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

  // There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

  // The bank has many accounts. Accounts should be objects that all share a set of common functionality.

var bank = [

  {accountName:"Person 1", 
  accountBalance:700},
  {accountName:"Person 2",
  accountBalance:800},
  {accountName:"Person 3", 
  accountBalance:900},
  {accountName:"Person 4",
  accountBalance:1000},

];

var totalBalance = 0;

var addAccount = function(newName,newBalance) {                                                     
    bank.push({accountName: newName, accountBalance: newBalance})
    console.log("New account added for " + newName + ". " + "Current balance: $" + newBalance)
}

//Hey Jack - would be good to get some feedback on this (and why I can't seem to get it working).

var transaction = function(transactionAmount, transferor, transferee) {
  for (txor = 0; txor < bank.length; txor ++) {
    if ((txor = bank.length -1) && (transferor !== bank[txor].accountName)) {
      console.log("Transferor is not a customer of this institution. WHY YOU DO THIS?!")
    }
    if (transferor === bank[txor].accountName) {
      console.log("Transfer from " + transferor + " to " + transferee);
      if (transactionAmount > bank[txor.accountBalance]) {
        console.log("Insufficient funds in transferring account for transaction.") 
      } else {
        for (txee = 0; txee < bank.length; txee ++) {
          if (transferee === bank[txee].accountName) {
            console.log("Internal transfer.");
            console.log("$" + transactionAmount + "transferred from " + transferor + " to " + transferee + " successfully.")
            return bank[txor].accountBalance = (bank[txor].accountBalance - transactionAmount);
            return bank[txee].accountBalance = (bank[txee].accountBalance + transactionAmount);
          } else {
            console.log("External transfer.");
            console.log("$" + transactionAmount + "transferred from " + transferor + " to external account " + transferee + " successfully.")
            return bank[txor].accountBalance = (bank[txor].accountBalance - transactionAmount);
          } 
        }
      }
    } 
  }  
}

var bankBalance = function() {
  for (total = 0; total < bank.length; total ++) {
    totalBalance = totalBalance + bank[total].accountBalance ;
  }
}

var checkBalance = function(checkAccount) {                                     
      for (i = 0; i < bank.length; i++) {
        if (checkAccount === bank[i].accountName) {
         console.log("Balance for " + bank[i].accountName + " is " + bank[i].accountBalance);
         console.log("Total balance of all accounts in bank is " + totalBalance)
      }
    }  
}

addAccount("Person 5", 4000);
bankBalance()
checkBalance("Person 1"); 
transaction("200", "Person 4", "Person 1")


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