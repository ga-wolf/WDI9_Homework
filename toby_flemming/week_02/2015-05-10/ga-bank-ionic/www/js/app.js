var atmModule = angular.module('atm', ['ionic']);

atmModule.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});





// My angular stuff
atmModule.controller('MainController', function($scope) {
  $scope.checking = 0;
  $scope.savings = 0;

  $scope.changeColors = function() {
    var checkingEl = $('#checking');
    var savingsEl = $('#savings');

    checkingEl.removeClass('positive');
    savingsEl.removeClass('positive');

    if ($scope.checking)
      checkingEl.addClass('positive');
    if ($scope.savings)
      savingsEl.addClass('positive');
  };

  $scope.deposit = function(type, amount) {
    amount = parseInt(amount) || 0;
    if (!amount)return;

    $scope[type] += amount;

    $scope.changeColors();
  };

  $scope.withdraw = function(type, amount) {
    var otherType = (type === 'checking') ? 'savings' : 'checking';
    amount = parseInt(amount) || 0;
    if (!amount)return;

    if (amount <= $scope[type]) {
      $scope[type] -= amount;
    } else {
      // Requires overdraft
      var overdraft = amount - $scope[type];

      if (overdraft <= $scope[otherType]) {
        $scope[otherType] -= overdraft;
        $scope[type] = 0;
      }
    }

    $scope.changeColors();    
  };
});


// Want each account to have their own scope, otherwise their
// amount variables might clash.
atmModule.controller('CheckingController', function() {});
atmModule.controller('SavingsController', function() {});


