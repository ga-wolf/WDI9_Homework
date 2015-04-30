/*
Bonus: Make it more like Wheel of Fortune:

Start with a reward amount of $0
Every time a letter is guessed, generate a random 
amount and reward the user if they found a letter 
(multiplying the reward if multiple letters found), 
otherwise subtract from their reward.
When they guess the word, log their final reward amount.
*/

// Declare reward and set to 0 at start.
var reward = 0;
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
		if(reward === 0) {
			reward = 1;
		}
		// Create random number and * by 100.
		reward = reward * (Math.random() * 100); 
		console.log('Reward is now $' + reward);
	} else {
		console.log(correctGuesses);
		console.log('You guessed the letter ' + letter + '. DERP! TRY AGAIN.'); // Logs `try again`.
		// Create random number and * by 100. Then minus from reward.
		reward = reward - (Math.random() * 100); 
		if(reward < 0) {
			reward = 0;
		}
		console.log('Reward is now $' + reward); // Logs the reward.
	}
	// Compares letters and correctGuesses, then logs the winner statement.
	if ((letters.join('')) === (correctGuesses.join(''))) {
		console.log('You guessed all letters correctly, & have WON the game!');
		// Logs the final reward total.
		console.log('The FINAL REWARD is $' + reward);
	}
}

guessLetter('Q');
guessLetter('C');
guessLetter('O');
guessLetter('D');
guessLetter('T');
guessLetter('Z');
guessLetter('Z');
guessLetter('A');

// NOTE: Issues with using math.round to round the number down.




















