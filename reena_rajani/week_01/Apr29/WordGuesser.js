// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


var word = 'Miss'.split('');
var currentGuesses = [];
var flag = true;

var i; // created global counter

console.log(' THE WORD GUESSER');
console.log(' ****************');

//Fill the currentGuesses array with default  _ based on the length of the word 
	 for(i = 0; i <= word.length-1 ; i++){
	 	currentGuesses[i] = '_';
	 }

var guessLetter = function (guessedLetter) {
	
	for (i = 0; i < word.length-1; i++) {
		
		if(word[i] === guessedLetter) { // checks if the letter is present in the word
			currentGuesses[i] =guessedLetter;  // Match found - add it to the currentgueses array 
			console.log("You Guessed a letter right " + guessedLetter);
			console.log(currentGuesses.join(' '));
			flag = true;
		} else {
			flag = false;
		}
	}

	if(flag === true){	
		
		isCompleted();  // calling function to check if all the letters are guessed or not 
		console.log("Good Job");
	
	} else if( flag === false ){
		
		isCompleted();
		console.log("Try Another Letter ..");
		console.log( '\n');

	}
}

// The function isCompleted checks if the current guesses created the actual word, by comparing the two arrays  

var isCompleted = function(){
	
	var myWord = word.join(''); // converting array elements to a string 
	var guessedword = currentGuesses.join(''); // same as above
	
	if ( myWord === guessedword ) {  // comparison of the 2 strings
		console.log("Game Completed.. You guessed the Word.. Its " + myWord);
	
	} else {
		console.log("Yet to Complete .. ");
	}
}


guessLetter('i');
guessLetter('m');
guessLetter('M');
guessLetter('r');
guessLetter('s');

	

