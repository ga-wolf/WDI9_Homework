/*
Homework: The Word Guesser:

You'll create a simple word guessing game where the user 
gets infinite tries to guess the word (like Hangman without 
the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word 
(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters 
(e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').

Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed 
letter is in there.
If the guessed letter matches a word letter, changed the 
guessed letters array to reflect that.
When it's done iterating, it should log the current guessed 
letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that 
need to be guessed, and if not, it should congratulate the 
user for winning the game.
Pretend you don't know the word, and call guessLetter multiple 
times with various letters to check that your program works.
*/

// Array which holds the current letters.
var letters = ['T', 'A', 'C', 'O']; 
// Array which will hold the correct guesses.
var correctGuesses = ['_', '_', '_', '_']; 


var guessLetter = function(letter) { 
	var i = letters.indexOf(letter);
	// If the `letter` parsed is equall to one of the letters
	// in the index of the function letters.
	if(i !== -1) {
		// Store the letter in the index of the correctGuesses array.
		correctGuesses[i] = letter;
		// Log to the result to the console.
		console.log(correctGuesses);
		console.log('You guessed the letter ' + letter + '.');
		console.log('You found the right letter!');
	} else {
		// Logs `try again`.
		console.log(correctGuesses);
		console.log('You guessed the letter ' + letter + '. DERP! TRY AGAIN.');
	}
	// Compares letters and correctGuesses, then logs the winner statement.
	if ((letters.join('')) === (correctGuesses.join(''))) {
		console.log('You guessed all letters correctly, & have WON the game!');
	}
}

// Function invocation.
guessLetter('C');
guessLetter('O');
guessLetter('D');
guessLetter('T');
guessLetter('Z');
guessLetter('Z');
guessLetter('A');


// NOTE: The bellow function also works.
// I changed it to the above because the for loop was giving me problems.
// I found by using indexOf(), it made things easier. :)

// var holdLetters = ['T', 'A', 'C', 'O'];
// var currentGuessedLetters = ['_', '_' , '_' , '_'];
// // .indexOf('_')
// var guessLetter = function(letter) {
// 	for (var i = 0; i < holdLetters.length; i++) 
// 		// if the letter you imput is equall to a letter in holdLetters
// 		if (letter === holdLetters[i]) {
// 			// the empty string will equall your imput.
// 			currentGuessedLetters[i] = letter;
// 			// log the array.
// 			console.log(currentGuessedLetters);
// 			console.log('You guessed the letter ' + letter + '.');
// 			console.log('You found the right letter!')
// 		if ((holdLetters.join('')) === (currentGuessedLetters.join(''))) {
// 			console.log('You guessed all letters correctly, and have WON the game!')
// 		}
// 	}
// }
// guessLetter('C');
// guessLetter('O');
// guessLetter('D');
// guessLetter('T');
// guessLetter('Z');
// guessLetter('Z');
// guessLetter('A');


















