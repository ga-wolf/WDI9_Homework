/*
Game of Hangman:
Call hangman() in the console to begin.  Would have called it for you but it
doesn't let you open the console once the first prompt appears.
*/

var word = [];	//'T', 'O', 'B', 'Y'
var mask = [];	//'-', '-', '-', '-'

var lettersRevealed = 0;
var guessedLetters = [];	//Both correct and incorrect guesses
var guessesLeft = 6;

var guessLetter = function(letter) {
	var found = false;

	letter = letter.toUpperCase();

	//Check to see if letter has previously been guessed.  If it has do not
	//continue.  Otherwise add it to the list and move on..
	if (guessedLetters.indexOf(letter) >= 0) {
		return;
	} else {
		guessedLetters.push(letter);
	}

	//Iterate through the word to try and find a match.  If a match is found
	//increment lettersRevealed and update mask appropriately.
	for (var i = 0; i < word.length; i++) {
		if (letter === word[i]) {
			found = true;
			mask[i] = letter;
			lettersRevealed++;
		}
	}

	if (found) {
		console.log('Congratulations!  You guessed ' + letter + ' correctly');
	} else {
		guessesLeft--;
	}

	console.log('Guesses left: ' + guessesLeft + '\n\n');
}

var createMask = function() {
	for (var i = 0; i < word.length; i++) {
		if (word[i] === ' ') {
			mask[i] = '_';
			guessedLetters++;
		} else {
			mask[i] = '-';
		}
	}
}

var hangman = function() {
	console.log('----------------------------');
	console.log('HANGMAN');
	console.log('----------------------------');

	//Ask user for word
	console.log('Player 1: Enter A Word or Phrase:');
	word = prompt().toUpperCase().split('');
	createMask();

	console.log('Player 2: Start Guessing:');
	while (word.length !== lettersRevealed && guessesLeft) {
		console.log('Word: ' + mask.join(''));
		guessLetter(prompt());
	}

	if (!guessesLeft) {
		console.log('YOU LOSE!!!!!!!!!');
	} else {
		console.log('Congratulations You WON!  The word was ' + word.join(''));
	}
};