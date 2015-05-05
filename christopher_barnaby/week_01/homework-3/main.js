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


var wordArray;							//the word to be guessed.												
var correctArray = [];					//the letters correctly guessed by the player.
var guess;								//the player's guess each round.
var lettersLeft;						//the number of letters yet to be correctly guessed by the player.

function createArrays(input) {			
	input = input.toUpperCase();					
	wordArray = input.split('');					//converts input word to be guessed string to an array.
	lettersLeft = wordArray.length;					//initializes the number of unguessed letters. 
	for (var x = 0; x < wordArray.length; x++) {	//populates correctly guessed letters array.
		correctArray[x] = "_"						//represents unguessed letters to player.
	}
}

function guessLetter(guess) {
	guess = guess.toUpperCase();
	for (var i = 0; i < correctArray.length; i++) {
		if (guess === wordArray[i]) {
			correctArray[i] = wordArray[i];			
			console.log(correctArray); 
			lettersLeft--
			if (lettersLeft > 0) {
				console.log("Contratulations! The letter " + guess + " is in there! Keep going.");
			} else {
				console.log("Nice work! You got it!")
			}
		}
	}

}

createArrays("Dunhill");
guessLetter("m");
guessLetter("d");
guessLetter("l");
guessLetter("s");
guessLetter("I");
guessLetter("o");
guessLetter("U");
guessLetter("n");
guessLetter("h");

// Bonus: Make it more like Wheel of Fortune:

	// Start with a reward amount of $0
	// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
	// When they guess the word, log their final reward amount.


// Bonus: Make it like Hangman:

	// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
	// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
	// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.