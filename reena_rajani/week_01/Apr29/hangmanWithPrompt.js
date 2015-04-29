// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var word = 'Cool'.split('');
var userWord = [];
var lettersGuessed =[];
var flag = true;
var hangman = 6;
var i; // created global counter
var userinput;
var isGameOver;

console.log(' THE HANGMAN PROBLEM ');
console.log(' *********************');

var guessLetter = function () {
	
	while(hangman >= 0){
		userinput = prompt(" Enter a Letter of your choice : ");
		var isLetterRepeated = checkLetterRepeated(userinput); // call function to check if the letter has been repeated previously or not 

		if(isLetterRepeated ===false) {
			hangman = hangman - 1 ; // if not repeated , then  decrement hangmancounter
			lettersGuessed.unshift(userinput); // add the letter into the array lettersGuessed to get the complete set of letters guessed and avoid repetive inclusions
		}

		if(hangman <= 0){
			console.log(' .............................................................');
			console.log("Sorry You Lost .. You have exceeded your limits " + hangman);
			console.log(' .............................................................');
			break;
		}
		else{
			for (i = 0; i < word.length-1; i++) {
				if(word[i] === userinput) { // checks if the letter is present in the word
					userWord[i] =userinput;  // Match found - add it to the currentgueses array 
					console.log("You Guessed a letter right " + userinput);
					flag = true;
					hangman = hangman + 1 ; // incrementing because it was a right guess 
				} else {
					flag = false;
				}
			}
		}

		if(flag === true){	
			isGameOver =isCompleted();  // calling function to check if all the letters are guessed or not 
			if(isGameOver ===true){
				break; // exit from the while loop, game over , no more prompts
			}
		} else if( flag === false ){
			isGameOver=isCompleted();
			if(isGameOver ===true){
				break; // exit from the while loop, game over , no more prompts
			}else{

				console.log('Try Another Letter ..You have ' + hangman + ' chances left' );
			}
			

		}
	}
	
}

// The function isCompleted checks if the current guesses created the actual word, by comparing the two arrays  

var isCompleted = function(){
	
	var myWord = word.join(''); // converting array elements to a string 
	var guessedword = userWord.join(''); // same as above
	
	if ( myWord === guessedword ) {  // comparison of the 2 strings
		console.log(' ===========================================================');
		console.log("Game Completed.. You guessed the Word.. Its " + myWord);
		console.log(' ===========================================================');
		return true;
	} else {
		console.log("Yet to Complete .. ");
		return false;
	}
}


// function that checks if the letter has been repeated or not and returns true or false
var checkLetterRepeated = function(guessedLetter){

	for( i=0; i<lettersGuessed.length-1; i++){
		if(lettersGuessed[i]===guessedLetter){ // check if the letter is already available in an array
			return true;
		} else {
			return false;
		}
	}
	return false; // default return false, first time it adds in to the array ,if this statement is missing, the array is is always empty as the conditions are not met 

}

guessLetter();


