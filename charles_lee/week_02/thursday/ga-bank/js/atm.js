$(document).ready(function(){
	//ATM OBJECT 
	var ATM = {
		CheckingsTotal: parseInt($('#checking-balance').text().slice(1)),
		SavingsTotal: parseInt($('#savings-balance').text().slice(1)),
		accTotal: this.CheckingsTotal + this.SavingsTotal,
		checkBal: function(acc){
			if(acc > 0){
				return true;
			} else {
				return false;
			}
		},
		OverDraft: function(amount){
			var accTot = ATM.CheckingsTotal + ATM.SavingsTotal;
			if(amount <= accTot ){
				console.log("OverDraft true");
				return true;
			} else {
				console.log("OverDraft false");
				return false;
			}
		},
		Deposit: function(buttonRef,amount){
			var $newtotal = 0;
			if(amount > 0){
				if(buttonRef==="#checking-deposit"){
					ATM.CheckingsTotal+=amount;	
					$(buttonRef).siblings('.balance').text("$" + ATM.CheckingsTotal);					
				}
				else if(buttonRef ==="#savings-deposit"){
					ATM.SavingsTotal+=amount;
					$(buttonRef).siblings('.balance').text("$" + ATM.SavingsTotal);						
				}
				$(buttonRef).parent('.account').removeClass('empty')
				$(buttonRef).parent('.account').addClass('hasmoney');
			} else {
				alert("You haven't deposited anything, probably because you're poor as fuck");
			}
		//FIGURE OUT A WAY TO REFERENCE CLOSEST BALANCE
			return $newtotal;
		},
		Withdraw: function(buttonRef,amount){
			var subOther = 0; 
			if(amount >= 0 && ATM.OverDraft(amount)){
				console.log(true);
				if(buttonRef === "#checking-withdraw"){
					if(amount <= ATM.CheckingsTotal){
						ATM.CheckingsTotal-=amount;
					} else {
						subOther = amount - ATM.CheckingsTotal;
						ATM.CheckingsTotal = 0; 
						ATM.SavingsTotal -= subOther;
					}
				}else if(buttonRef === "#savings-withdraw"){
					if(amount <= ATM.SavingsTotal){
						ATM.SavingsTotal-=amount; 
					} else {
						subOther = amount - ATM.SavingsTotal;
						ATM.SavingsTotal = 0; 
						ATM.CheckingsTotal -= subOther;
					}
				}
				$('#checking .balance').text("$" + ATM.CheckingsTotal);
				$('#savings .balance').text("$" + ATM.SavingsTotal);
				$('.balance').each(function(){
					if($(this).text() === "$0"){
						$(this).parent('.account').removeClass('hasmoney');
						$(this).parent('.account').addClass('empty');
					}
				});
			} else {
				alert("You haven't withdraw anything, probably because you're poor as fuck");
			}
		}
	}

	//BUTTONCHECK FUNCTION
	var buttonCheck = function(){
		$('.button').on('click',function(){
			var $buttID = $(this).attr('id');	
			var $buttVal = $(this).attr('value');	
			var $cashMonID = $(this).siblings('.amount').attr('id');
			var $cashMoney = parseInt($(this).siblings('.amount').val());
		
			if($buttVal === "Withdraw"){
				console.log("withdraw");
				ATM.Withdraw("#"+ $buttID, $cashMoney);
			}else if($buttVal === "Deposit"){
				console.log("deposit");
				ATM.Deposit("#"+ $buttID, $cashMoney);
			}
		});
	}
	console.log(ATM.CheckingsTotal);
	console.log($('.button').attr('id'));
	buttonCheck();
});






