// #Title: ATM App

// ###Type:
// - Lab

// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.

// ###Objectives:
// - DOM selection, appending, removal, updating

// ###Specification:

// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
console.log('Link is working')

//This changes the strings into numbers so they can have math stuff done to them...
var $checkingBalance = parseInt($('#checking-balance.balance').text())
var $savingsBalance = parseInt($('#savings-balance.balance').text())
var $withdraw


//click events for depositing and withdrawing

$('#savings-deposit').on('click', function(){
  //debugger; 
  console.log('click is working');
  var $deposit = $('#savings-amount').val(); //Saves the value entered into the input area
  var $currentAmount = $savingsBalance += +$deposit; //Adds the deposit amount to the saved amount already in the account
  $('#savings-balance.balance').text('$' + $currentAmount);//reproduces the current amount for the user.
});

$('#savings-withdraw').on('click', function(){
  // debugger; 
  console.log('click is working');
  $withdraw = +$('#savings-amount').val(); //Saves the value entered into the input area
  console.log( $withdraw )
  isSavingsOverdrawing($withdraw);
  debugger;
  var currentAmount = $savingsBalance -= +$withdraw; //Adds the deposit amount to the saved amount already in the account
  $('#savings-balance.balance').text('$' + currentAmount);//reproduces the current amount for the user.
  isAccountEmpty();
  // isSavingsOverdrawing()
});


$('#checking-deposit').on('click', function(){
  //debugger; 
  console.log('click is working');
  var $deposit = $('#checking-amount').val(); //Saves the value entered into the input area
  var $currentAmount = $checkingBalance += +$deposit; //Adds the deposit amount to the saved amount already in the account
  $('#checking-balance.balance').text('$' + $currentAmount);//reproduces the current amount for the user.
});

$('#checking-withdraw').on('click', function(){
  //debugger; 
  console.log('click is working');
  var $deposit = $('#checking-amount').val(); //Saves the value entered into the input area
  var $currentAmount = $checkingBalance -= +$deposit; //Adds the deposit amount to the saved amount already in the account
  $('#checking-balance.balance').text('$' + $currentAmount);//reproduces the current amount for the user.
});


isAccountEmpty = function(){
  if($savingsBalance <= 0){
    $('#savings.account').addClass('accountEmpty');
  }else{
    removeClass('accountEmpty');
  };
};

isSavingsOverdrawing = function(){
  if($withdraw > $savingsBalance){
    $withdraw = 0;
    alert('You have insuffcient funds');
  };
  // return $withdraw;
};





















