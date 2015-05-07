var Account = function(type) {
	this.balance = 0;
	this.type = type;
	this.prefix = '#' + type;	// So i don't have to string concat (much)
};

Account.prototype.deposit = function(that) {
	var $account = $(this.parentElement);

	var amount = $(that.prefix + '-amount', $account).val();
	amount = parseInt(amount) || 0;

	var $balance = $(that.prefix + '-balance', $account);
	that.balance += amount;
	$balance.html('$' + that.balance);
};

Account.prototype.withdraw = function(that) {
	var $account = $(this.parentElement);
	var idPrefix = '#' + that.type;

	var amount = $(that.prefix + '-amount', $account).val();
	amount = parseInt(amount) || 0;

	var $balance = $(that.prefix + '-balance', $account);

	if (that.balance >= amount) {
		that.balance -= amount;
		$balance.html('$' + that.balance);
	}
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

atm.main();
