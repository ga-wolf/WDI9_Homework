var atm = atm || {};







var Account = function(name) {
	this.balance = 0;
};

Account.prototype.deposit = function() {
	var $account = $(this.parentElement);
	var type = $account.attr('id');
	var idPrefix = '#' + type;

	amount = $(idPrefix + '-amount', $account).val();
	amount = parseInt(amount) || 0;

	var $balance = $(idPrefix + '-balance', $account);
	this.balance += amount;
	console.log(this);
	$balance.html('$' + this.balance);
};

Account.prototype.withdraw = function(amount) {
	if (this.amount > amount) {
		this.amount -= amount;
	}
};

atm.checking = new Account();
atm.savings = new Account();

$('#checking-deposit').on('click', atm.checking.deposit.bind(atm.checking));
