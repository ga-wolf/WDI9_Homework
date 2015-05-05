/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/

// THE BANK. (HogwartsInc).

var bank = {};

bank.accounts = [
  {
    currentBalance: 889234,
    ownersName: 'Harry Potter'
  },
  {
    currentBalance: 987766,
    ownersName: 'Hermione Granger'
  },
  {
    currentBalance: 163334,
    ownersName: 'Ron Weasley'
  },
  {
    currentBalance: 999865,
    ownersName: 'Draco Malfoy'
   }
];

bank.addAccount = function(account) {
  bank.accounts.push(account);
  console.log('New account added...')
};


// Calculates the total amount in the bank.

bank.sum = function() {
  var sum = 0;
  for(var i = 0; i < bank.accounts.length; i++) {
    sum = sum + bank.accounts[i].currentBalance;
  }
  console.log('The bank total amount is: ' + sum);
  return sum;
};

console.log(bank.accounts);


// Adds a new account to the bank.

bank.addAccount({
    currentBalance: 788906,
    ownersName: 'Severus Snape'
});

console.log(bank.accounts);

console.log(bank.sum());


