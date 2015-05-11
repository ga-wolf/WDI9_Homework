$(document).ready(function() {

  var checkingBalance = 0;
  
  $("#checking-deposit").on('click', function() {

    checkingBalance = checkingBalance + parseInt($('#checking-amount').val());
    $('#checking-balance').text('$' + checkingBalance);
    if (checkingBalance <= 0) {
      $('#checking').css("background-color", "red");
    } else {
      $('#checking').css("background-color", '#6C9A74');
    }

  });

  $("#checking-withdraw").on('click', function() {

    var amount = +$('#checking-amount').val()
    
    if(checkingBalance + savingsBalance < amount){
      
      alert("Insufficent funds!");
      return;
    } else if (checkingBalance < amount){
      savingsBalance = savingsBalance + checkingBalance;
      checkingBalance = amount;
      savingsBalance = savingsBalance - amount;
      $("#savings-balance").text('$'+ savingsBalance);

      if (savingsBalance <= 0) {
      $('#savings').css("background-color", "red");
    } else {
      $('#savings').css("background-color", '#6C9A74');
    }
  };

    checkingBalance = checkingBalance - amount;
    $('#checking-balance').text('$' + checkingBalance);
    
    if (checkingBalance <= 0) {
      $('#checking').css("background-color", "red");
    } else {
      $('#checking').css("background-color", '#6C9A74');
    }

  });

  var savingsBalance = 0;
  $("#savings-deposit").on('click', function() {

    savingsBalance = savingsBalance + parseInt($('#savings-amount').val());
    $('#savings-balance').text('$' + savingsBalance);
    if (savingsBalance <= 0) {
      $('#savings').css("background-color", "red");
    } else {
      $('#savings').css("background-color", '#6C9A74');
    }

  });

  $("#savings-withdraw").on('click', function() {

    var amount = +$('#savings-amount').val();

    if(checkingBalance + savingsBalance < amount){
      
      alert("Insufficent funds!");
      return;
    } else if (savingsBalance < amount) {
      checkingBalance = checkingBalance + savingsBalance;
      savingsBalance = amount;
      checkingBalance = checkingBalance - amount;
      $("#checking-balance").text('$'+ checkingBalance);

      if (checkingBalance <= 0) {
      $('#checking').css("background-color", "red");
    } else {
      $('#checking').css("background-color", '#6C9A74');
    } 
  }    

    savingsBalance = savingsBalance - amount;
    $('#savings-balance').text('$' + savingsBalance);

    if (savingsBalance <= 0) {
      $('#savings').css("background-color", "red");
    } else {
      $('#savings').css("background-color", '#6C9A74');
    }

  });




});
