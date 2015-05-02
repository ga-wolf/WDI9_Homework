// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips

// Don't overthink this. Shorter code is probably the answer.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


// create an array of objects with account details 
var bank = [
   {name: "Lizzie", 
   balance: 18},
  
  {name: "Daemon",
   balance: 1},
  
   {name: "Jackie", 
   balance: 60},
  
  {name: "Richie",
   balance: 200},
  
   {name: "Pinochio", 
   balance: 2000},
  
  {name: "Patty",
   balance: 566}
]


var i;
var executeFlag = false; // checks for execution  and avoids multiple else looping logs
var isAccountFlag = false; // checks if account is present


// function to add an account based on the account name, takes input as name and balance amount
var addAccount = function(name, balance){
  var newBank = {};  // creates an empty object for adding in the array
  if(isNegative(balance) === -1){ 

    console.log(' Transaction unsuccessful, Invalid Balance Amount, No Negative funds please' );

  }else {

    newBank.name = name;
    newBank.balance = balance;
    bank.push( newBank ); // fill the details and add it to the array of objects
    console.log(' New Account Added with details -->  Name :' + newBank.name + ' Balance : ' + newBank.balance);
 
  }
  
}


// displays the total balance of all the Bank accounts

var totalBalance = function(){
   
   var balance = 0;
   for(i = 0; i < bank.length ; i++){

    balance += bank[i].balance;

   }
   console.log(' The total balance the Bank holds is : $' + balance);
  
}



// performs  withdrawal and deposit transactions  using flags
// d- deposit &  w - withdrawal  
//checks for negative balance , if the account exists 

var transaction = function(name, amount , flag){
 
  if(isNegative(parseInt(amount))===-1){

  console.log(' Transaction unsuccessful, Invalid amount  , Amount cannot be negative' );

  } else {
    
    for(i=0; i<bank.length; i++){

        var myAcc = bank[i];

        if(myAcc.name === name){

              console.log( 'Account Exists' );
             
              if(flag.toLowerCase() ==='d'){
    
                    myAcc.balance += amount ;
                    console.log(' Transaction successful, Amount $' + amount + ' deposited to Account :' + name );
                    console.log( ' New Balance is : ' + myAcc.balance);
                    executeFlag = true;
                    isAccountFlag = true;
                    break;
                  
                }else if(flag.toLowerCase() ==='w'){
    
                    if(amount < myAcc.balance ){
                      
                        myAcc.balance -= amount ;
                        console.log(' Transaction successful, Amount $' + amount + ' Withdrawn from Account :' + name );
                        console.log( ' New Balance is : ' + myAcc.balance);
                        executeFlag = true;
                        isAccountFlag = true;
                        break;

                    } else {
                        console.log(' Transaction unsuccessful, Insufficient funds to withdraw from Account :' + name );
                        executeFlag = false; 
                        isAccountFlag = true;
                        break;
                       }
               
               }else {
          
                  console.log( ' Incorrect Transaction Flag  .. Failed ' );
                  executeFlag = false;
                  isAccountFlag = true;
                  break;
                }

          }else {

              executeFlag = false;
              isAccountFlag = false;
          } // end if(accounrname == name )
     } // end for loop
  }
  if(isAccountFlag === false){
  
  console.log( 'No Account exists for ' + name + ' check Account details' );
  
  }
}



// function to check if the amount is negative or positive , returns -1 if negative  and 1 if positive, if others returns NAN
var isNegative= function(amount){
  
  return (Math.sign(amount)) ;
}


// function that transfers funds between 2 accounts. 
// the sender name, receiver name and the amount to be transferred are the arguments

var transferfunds = function(sender, receiver, amount){

  var tflag = false;
  if(isNegative(amount)=== -1){

    console.log(' Transaction unsuccessful, Invalid amount  , Amount cannot be negative' );

  } else {
    
    for(i = 0; i < bank.length; i++){

      var senderDet = bank[i];

      for( var j = 0; j < bank.length; j++ ){

          var receiverDet = bank[j];
          if( senderDet.name ===sender && receiverDet.name ===receiver ){

              transaction(senderDet.name,amount ,'w');
              if(executeFlag === true){
               
                 transaction(receiverDet.name,amount ,'d');
                 tflag = true;
                 break;
              }
              
          } else{

            tflag = false;

          }     // end of transfers between senders

      } //j for loop
      if(tflag === true){
        break;
      }
    } // i for loop;

    if(tflag === false){
      console.log( 'transaction unsuccessful' );
    }
 
  } // else 


} // function end 


// calling  the functions 
addAccount('Reena',2150);
totalBalance();
transaction('Jackie',345 ,'d');
transaction('Jackie',34534 ,'3');
transferfunds('Daemon', 'Patty', 123);
