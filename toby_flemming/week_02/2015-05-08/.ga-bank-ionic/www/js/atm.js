var Account = function(type) {
	this.balance = 0;
	this.type = type;
	this.prefix = '#' + type;	// So i don't have to string concat (much)
};

Account.prototype.deposit = function(that) {
	var amount = $(that.prefix + '-amount').val();
	amount = parseInt(amount) || 0;

	if (amount <= 0)return;

	var $balance = $(that.prefix + '-balance');
	that.balance += amount;
	$balance.html('$' + that.balance);

	if (that.balance) {
		// $accountEl.removeClass('negative');
		// $accountEl.addClass('positive');
	}
};

Account.prototype.withdraw = function(that) {
	var idPrefix = '#' + that.type;

	var amount = $(that.prefix + '-amount').val();
	amount = parseInt(amount) || 0;

	if (amount <= 0)return;

	var otherAccountType = (that.type === 'checking') ? 'savings' : 'checking';
	var otherAccount = atm[otherAccountType];

	var $balance = $(that.prefix + '-balance');
	var $otherBalance = $('#' + otherAccountType + '-balance');

	if (that.balance >= amount) {
		that.balance -= amount;
	} else if (that.balance + otherAccount.balance >= amount) {
		var overdraft = amount - that.balance;
		that.balance = 0;
		otherAccount.balance -= overdraft;
	}

	if (!that.balance) {
		// $accountEl.removeClass('positive');
		// $accountEl.addClass('negative');
	}
	if (!otherAccount.balance) {
		var $otherAccountEl = $('#' + otherAccountType + '.account');
		$otherAccountEl.removeClass('positive');
		$otherAccountEl.addClass('negative');
	}

	$balance.html('$' + that.balance);
	$otherBalance.html('$' + otherAccount.balance);
};




var atm = atm || {};

atm.createAccounts = function() {
	atm.checking = new Account('checking');
	atm.savings = new Account('savings');
};

// Setting up event listeners
// Bind was used to ensure the function called had reference to this and that after event has been
// fired.  Need to find out how much of a hack this is...
atm.setupEvents = function() {
	$('#checking-deposit').on('click', function() { atm.checking.deposit.bind(this, atm.checking)(); });
	$('#checking-withdraw').on('click', function() { atm.checking.withdraw.bind(this, atm.checking)(); });

	$('#savings-deposit').on('click', function() { atm.savings.deposit.bind(this, atm.savings)(); });
	$('#savings-withdraw').on('click', function() { atm.savings.withdraw.bind(this, atm.savings)(); });
};

atm.main = function() {
	this.createAccounts();
	this.setupEvents();
};
