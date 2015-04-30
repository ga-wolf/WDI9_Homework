// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.



console.log(' WHEEL OF FORTUNE ');
console.log(' *****************');


var word = 'Miss'.split('');
var currentGuesses = [];
var amount = 0;
var rewardAmt = 0;
var flag = true;
var i; // created global counter

//Fill the currentGuesses array with default  _ based on the length of the word 
	 for(i = 0; i <= word.length-1 ; i++){
	 	currentGuesses[i] = '_';
	 }


var guessLetter = function (guessedLetter) {
	
	for (i = 0; i < word.length-1; i++) {
		
		if(word[i] === guessedLetter) { // checks if the letter is present in the word
			
			currentGuesses[i] = guessedLetter;  // Match found - add it to the currentguesses array 
			console.log(" You Guessed the letter RIGHT " + guessedLetter);
			console.log(currentGuesses.join(' '));
			
			rewardAmt = randomAmount();  // generating reward amount
			console.log( ' you have been Rewarded with $' + rewardAmt );
			
			amount += rewardAmt; // adding to the total amount
			console.log( 'Your Total Amount sums up to $' + amount );
			console.log( '\n');
			flag = true; 
			
		} else {
			
			flag = false; // usage of flag to avoid repetative logs for every letter in word[], will be displayed only once . 
			
		}
	}
	if(flag === true){	
		
		isCompleted();  // calling function to check if all the letters are guessed or not 
	
	}else if(flag === false){
		
		console.log("WRONG Letter " + guessedLetter + " is not present in the word ");
		console.log(currentGuesses.join(' '));
		isCompleted();
		rewardAmt = randomAmount(); // generating reward amount 
		console.log( ' your Amount is deducted  with  $' + rewardAmt );
		amount -= rewardAmt; // deducting from the  total amount
		console.log( 'Your Total Amount sums up to  $' + amount);
		console.log( '\n');

	}

}



// The function isCompleted checks if the current guesses created the actual word, by comparing the two arrays  

var isCompleted = function(){
	
	var myWord = word.join(''); // converting array elements to a string 
	var guessedword = currentGuesses.join(''); // same as above
	
	if ( myWord === guessedword ) {  // comparison of the 2 strings
		
		console.log(' ****************************************************');
		console.log(" Game Completed.. You guessed the Word.. Its " + myWord );
		console.log(" Your total reward Amount is : $" + amount );
		console.log(' ****************************************************');
	
	} else {
		console.log("Try Another Letter ..");
	}
}


// function that generates the randomAmount as a reward. 
var randomAmount = function(){
	var reward = Math.floor( (Math.random() * (1 - 0) + 0) * 1000 ); // random() generates the random number using the formula (Math.random() * (max - min) + min), floor() returns the integral part removing the decimals
	return reward;
}

// Initiating the Program 

guessLetter('i');
guessLetter('m');
guessLetter('M');
guessLetter('s');

