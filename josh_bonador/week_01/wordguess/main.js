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

// var currentWord = 'dodge'.split('');
// var correctLetter = [];
// correctLetter.length = currentWord.length;
// var lettersLeft = correctLetter.length

// console.log('Input "guessLetter(letterOfYourChoice)" or "fortune(letter)" to start');

// var guessLetter = function(letter) {

// 	lettersLeft.length = correctLetter.length
// 	for (var b = 0; b < currentWord.length; b++) {
// 		if (letter === currentWord[b]) {                    
// 			correctLetter[b] = (letter);                //passed letter is given correct spot in 2nd array      
// 			console.log('You found a new letter!') 
// 			console.log(correctLetter);
// 			lettersLeft = lettersLeft - 1               //therefore the lettersLeft goes down by 1
// 		}
// 	}
// 	if (lettersLeft === 0) {
// 		console.log('You did it! The word is ' + currentWord.join(''))
// 	} else if (lettersLeft > 0)
// 	console.log('You have ' + lettersLeft + ' letters left.')
// }

// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var currentWord = 'dodge'.split('');
var correctLetter = [];
correctLetter.length = currentWord.length;
var lettersLeft = correctLetter.length
var reward = 0
var subtractBy; 


var fortune = function(letter) {

	lettersLeft.length = correctLetter.length
	for (var b = 0; b < currentWord.length; b++) {
		if (letter === currentWord[b]) {                    
			correctLetter[b] = (letter);                     
			console.log('You found a new letter!')
			reward += Math.round(Math.random())                    //reward is given a random amount
			console.log(correctLetter);
			lettersLeft = lettersLeft - 1
		} else {
		subtractBy = Math.round(Math.random())                     //reward is going to be subtracted by random amount
		}
	}
	console.log('Your current reward is ' + (reward - subtractBy))   //reward is subtracted by random amount
	if (lettersLeft === 0) {
	console.log('You did it! The word is ' + currentWord.join(''))
	} else if (lettersLeft > 0)
	console.log('You have ' + lettersLeft + ' letters left.')
	
}



