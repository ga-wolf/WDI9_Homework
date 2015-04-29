/*
Homework: The Word Guesser
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

var guessedLetters = [];

var guessLetter = function(letter) {
	var found = false;

	for (var i = 0; i < word.length; i++) {
		if (letter === word[i]) {
			found = true;
			guessedLetters.push(letter);
		}
	}

	if (found) {
		console.log('Congratulations!  You guessed ' + letter + ' correctly');
	}
	console.log('Guessed letters: ' + guessedLetters.join(', ') + '\n\n');
}

var wordGuesser = function() {
	console.log('----------------------------');
	console.log('GUESSING GAME');
	console.log('----------------------------');

	console.log('Player 1: enter a word:');
	word = prompt().split('');
	console.log('*' + word.length + ' letter word entered*\n\n');

	console.log('Player 2: start guessing');
	while (word.length !== guessedLetters.length) {
		guessLetter(prompt());
	}

	console.log('Congratulations!  You WON!');
}();