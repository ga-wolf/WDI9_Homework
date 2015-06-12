$(document).ready(function(){});

var redCheck = function() {
  if (parseInt($('#checking-balance').html().slice(1)) === 0) {
    $('#checking').css('background-color', '#db1b1b');
  } else {
    $('#checking').css('background-color', '#6C9A74');
  }

  if (parseInt($('#savings-balance').html().slice(1)) === 0) {
    $('#savings').css('background-color', '#db1b1b');
  } else {
    $('#savings').css('background-color', '#6C9A74');
  }
};

var checkDeposit = function() {
  var total = parseInt($('#checking-amount').val()) + parseInt($('#checking-balance').html().slice(1));
  var result = '$' + total;
  $('#checking-balance').html(result);
  redCheck();
};

var checkWithdraw = function() {
  var chkAmt = parseInt($('#checking-amount').val());
  var chkBal = parseInt($('#checking-balance').html().slice(1));

  if (chkAmt > chkBal) {
    var svBal = parseInt($('#savings-balance').html().slice(1));

    if (chkAmt <= (svBal + chkBal)) {
      var total = chkAmt - chkBal;
      $('#checking-balance').text('$0');
      total = svBal - total;
      var result = '$' + total;
      $('#savings-balance').html(result);
      $('#message').html('To prevent overdraw, successfully withdrew $' + parseInt($('#checking-amount').val()) + ' from both accounts.');
      redCheck();
      return;
    }
    $('#message').html('NOT ENOUGH FUNDS TO COMPLETE TRANSACTION.');
    return;
  }
  var total = chkBal - chkAmt;
  var result = '$' + total;
  $('#checking-balance').html(result);
  $('#message').html('Successfully withdrew $' + parseInt($('#checking-amount').val()) + ' from checking account.');
  redCheck();
};


var savingsDeposit = function() {
  var total = parseInt($('#savings-amount').val()) + parseInt($('#savings-balance').html().slice(1));
  var result = '$' + total;
  $('#savings-balance').html(result);
  redCheck();
};

var savingsWithdraw = function() {
  var svAmt = parseInt($('#savings-amount').val());
  var svBal = parseInt($('#savings-balance').html().slice(1));

  if (svAmt > svBal) {
    var chkBal = parseInt($('#checking-balance').html().slice(1));

    if (svAmt <= (chkBal + svBal)) {
      var total = svAmt - svBal;
      $('#savings-balance').text('$0');
      total = chkBal - total;
      var result = '$' + total;
      $('#checking-balance').html(result);
      $('#message').html('To prevent overdraw, successfully withdrew $' + parseInt($('#savings-amount').val()) + ' from both accounts.');
      redCheck();
      return;
    } else {
      $('#message').html('NOT ENOUGH FUNDS TO COMPLETE TRANSACTION.');
      return;
    }
  }
  var total = parseInt($('#savings-balance').html().slice(1)) - parseInt($('#savings-amount').val());
  var result = '$' + total;
  $('#savings-balance').html(result);
  $('#message').html('Successfully withdrew $' + parseInt($('#savings-amount').val()) + ' from savings account.');
  redCheck();
};

$('#checking-deposit').on('click', checkDeposit);
$('#checking-withdraw').on('click', checkWithdraw);
$('#savings-deposit').on('click', savingsDeposit);
$('#savings-withdraw').on('click', savingsWithdraw);
redCheck();
