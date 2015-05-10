var Wolf = {
  name: "Wolf",
  id: 0,
  checkBalance: 6020,
  savingsBalance: 200
};
var Bob = {
  name: "Bob",
  id: 1,
  checkBalance: 6820,
  savingsBalance: 300
};
var Alfie = {
  name: "Alfie",
  id: 2,
  checkBalance: 5000,
  savingsBalance: 5
};

var accountArray = [Wolf, Bob, Alfie];
var createAccount = function() {
  if ($('#checkAm').val().length > 0) {
    var checkDeposit = parseInt($('#checkAm').val())
  }
  else {checkDeposit = 0}
  if ($('#savingsAm').val().length > 0) {
    var savingsDeposit = parseInt($('#savingsAm').val())
  }
  else {savingsDeposit = 0}  
  newName = $('#accName').val().slice(0,1).toUpperCase() + $('#accName').val().slice(1).toLowerCase()
  accountArray.push({
    name: newName,
    id: accountArray.length,
    checkBalance: checkDeposit,
    savingsBalance: savingsDeposit
  });
  $('#accountSelector').append("<option value='" + newName + "'>" + newName + "</option>")
}

var findID = function(nameinput) {
  var num;
  for (var i = 0; i < accountArray.length; i++) {
    (accountArray[i].name === nameinput ? num = i : false)
  }
  return num;
}


var grabTotal = function() {
  total = 0;
  for (var i = 0; i < accountArray.length; i++) {
    ac = accountArray[i]
    total += ac.balance
  }
  return total
}

var depositCheck = function() {
  num = findID(name);
  if ($('#checking-amount').val().length > 0) {
    accountArray[num].checkBalance += parseInt($('#checking-amount').val());
    updatepage();
  }
}

var withdrawCheck = function() {
  num = findID(name);
  if (accountArray[num].checkBalance - parseInt($('#checking-amount').val()) >= 0) {
    console.log(accountArray[num].checkBalance);
    accountArray[num].checkBalance -= parseInt($('#checking-amount').val());
    updatepage();
  } else if (balance.total - parseInt($('#checking-amount').val()) > 0) {
    accountArray[num].savingsBalance -= (parseInt($('#checking-amount').val()) -accountArray[num].checkBalance)
    accountArray[num].checkBalance = 0
    updatepage();
  }
  else {
    alert("You do not have enough money")
  }
}

var depositSavings = function() {
  num = findID(name);
  if ($('#savings-amount').val().length > 0) {
    accountArray[num].savingsBalance += parseInt($('#savings-amount').val());
    updatepage();
  }
}

var withdrawSavings = function() {
  num = findID(name);
  if (accountArray[num].savingsBalance - parseInt($('#savings-amount').val()) >= 0) {
    console.log(accountArray[num].savingsBalance);
    accountArray[num].savingsBalance -= parseInt($('#savings-amount').val());
    updatepage();
  } else if (balance.total - parseInt($('#savings-amount').val()) > 0) {
    accountArray[num].checkBalance -= (parseInt($('#savings-amount').val()) -accountArray[num].savingsBalance)
    accountArray[num].savingsBalance = 0
    updatepage();
  }
  else {
    alert("You do not have enough money")
  }
}

var toTransfer;
var transferAmount = function() {
  toTransfer = $('#toAccount').val().slice(0,1).toUpperCase() + $('#toAccount').val().slice(1).toLowerCase()
  var amount = parseInt($('#transferAmount').val())
  accountFrom = findID(name);
  accountTo = findID(toTransfer);
  console.log(accountFrom)
  console.log(accountTo)
  if (accountTo>=0) {
    if (accountArray[accountFrom].checkBalance - amount > 0) {
      
      accountArray[accountFrom].checkBalance -= amount;
      
      accountArray[accountTo].checkBalance += amount;
      alert(name + " has just transfered "+ amount + " to " + toTransfer + "'s' account")
      updatepage();
    } else {
      alert("You do not have enough money")
  }
  }
  else {
    alert("Account does not exist!")
  }
}


var checkAccountBalance = function(name) {
  num = findID(name)
  return balance = {
    checkAccount: accountArray[num].checkBalance,
    savingsAccount: accountArray[num].savingsBalance,
    total: accountArray[num].savingsBalance + accountArray[num].checkBalance
  }
}

var c2s = function() {
  num = findID(name)
  amount = parseInt($('#iTransfer').val())
  if (accountArray[num].checkBalance - amount >= 0) {
      accountArray[num].checkBalance -= amount;
      accountArray[num].savingsBalance += amount;
      updatepage();
    } else {
      alert("You do not have enough money")
}
}

var s2c = function() {
  num = findID(name)
  amount = parseInt($('#iTransfer').val())
  if (accountArray[num].savingsBalance - amount >= 0) {
      accountArray[num].savingsBalance -= amount;
      accountArray[num].checkBalance += amount;
      updatepage();
    } else {
      alert("You do not have enough money")
}
}

var interest;

var startInterest = function () {
  interest = setInterval(function(){ 
 for (var i = 0 ; i < accountArray.length; i++) {
   accountArray[i].savingsBalance = accountArray[i].savingsBalance * 1.0009;
   accountArray[i].savingsBalance = accountArray[i].savingsBalance.toFixed(2)
 } 
 console.log("Interest Added");
 updatepage();
  }, 5000);
}

var offInterest = function() {
  clearInterval(interest)
}

var uploadaccount = function() {
  accountArray.forEach(function(element) {
    $('#accountSelector').append("<option value='" + element.name + "'>" + element.name + "</option>")
  })
}
uploadaccount()

var checkAmount;
var savingsAmount;
var name;

var updatepage = function() {
  name = $('#accountSelector').val();
  checkAccountBalance(name);
  $('#checking-balance').html('$' + balance.checkAccount);
  $('#savings-balance').html('$' + balance.savingsAccount);
  if (parseInt($('#checking-balance').html().slice(1)) == 0) {
    $('#checking').css("background-color","red")
  }
  else {$('#checking').css("background-color","green")  }
  if (parseInt($('#savings-balance').html().slice(1)) == 0) {
    $('#savings').css("background-color","red")  
  }
  else {$('#savings').css("background-color","green")  }
}
updatepage()

// var doubleEstimate = function () {
//   72/Math.pow(1.0009,6307200)*365*24*60
// }

$('#accountSelector').on('change', updatepage)
$('#checking-deposit').on('click', depositCheck)
$('#checking-withdraw').on('click', withdrawCheck)
$('#savings-deposit').on('click', depositSavings)
$('#savings-withdraw').on('click', withdrawSavings)
$('#transfer').on('click', transferAmount)
$('#accountSubmit').on('click', createAccount)
$('#interest').on('click', startInterest)
$('#interestOff').on('click', offInterest)
$('#c2s').on('click', c2s)
$('#s2c').on('click', s2c)

