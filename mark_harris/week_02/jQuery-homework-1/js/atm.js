

var account = {
  
  checking: 100,
  
  savings: 200,

  updateBalances: function() {
    $("#checking-balance").text("$" + account.checking);
    $("#savings-balance").text("$" + account.savings);
    account.checkZeroBalance();
  },

  depositChecking: function() {
    var amount = $("#checking-amount").val();
    account.checking += (amount) ? parseInt(amount) : 0;
    account.updateBalances();
  },

  withdrawChecking: function() {
    var amount = $("#checking-amount").val();
    if (account.testOverdrawn("c", amount)) {
      account.checking -= (amount) ? parseInt(amount) : 0;
      account.updateBalances();
    }
  },

  depositSavings: function() {
    var amount = $("#savings-amount").val();
    account.savings += (amount) ? parseInt(amount) : 0;
    account.updateBalances();
  },

   withdrawSavings: function() {
    var amount = $("#savings-amount").val();
    if (account.testOverdrawn("s", amount)) {
      account.savings -= (amount) ? parseInt(amount) : 0;
      account.updateBalances();
    }
  },

  testOverdrawn: function(acc, amount) {
    if(acc === "c") {
      return (account.checking - amount < 0) ? false : true;
    } else if (acc === "s") {
      return (account.savings - amount < 0) ? false : true;
    }
  },

  checkZeroBalance : function() {
    if(account.checking === 0) {
      $("#checking-balance").addClass("zero");
    } else {
      $("#checking-balance").removeClass("zero");
    }

    if(account.savings === 0) {
      $("#savings-balance").addClass("zero");
    } else {
      $("#savings-balance").removeClass("zero");
    }

  }


};


$( document ).ready(function() {

  account.updateBalances();


  $("#checking-deposit").on("click", account.depositChecking);
  $("#checking-withdraw").on("click", account.withdrawChecking);
  $("#savings-deposit").on("click", account.depositSavings);
  $("#savings-withdraw").on("click", account.withdrawSavings);


});











