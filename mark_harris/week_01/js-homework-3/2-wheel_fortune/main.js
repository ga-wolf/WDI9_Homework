
// WHEEL OF FORTUNE

// Task:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

console.log(" WHEEL OF FORTUNE ");
console.log("********************");
console.log("");

// Initialise the reward amount
var reward = 0;

// Choose a word to play with
var word = "babble"

// Convert the string into an array of upper-case letters
var answer = word.toUpperCase().split("");

// Create the array for correctly guessed letters and initialise it with the correct number of "_"s
var correct = [];
for(var i = 0; i < word.length; i++) {
	correct.push("_");
}

// Show the player how many letters need to be found
console.log("Word: " + correct.join(" "));
console.log("");


var guessLetter = function(letter) {

	// Convert the guess to upper-case for matching
	letter = letter.toUpperCase();
	console.log("You guessed the letter: " + letter);
	
	// Initialise the value player will win for guessing this letter
	var guessReward = 0;
	
	// Set the random prize amount for guessing a letter
	var rewardAmt = Math.round(Math.random() * 100);
	
	// Find if the guessed letter appears in the answer
	if(answer.indexOf(letter) === -1) {

		// Tell the player that they lost with this guess and adjust the prize money
		reward -= rewardAmt;
		console.log("No Match, sorry you lost $" + rewardAmt + " with that guess");
		console.log("");

	} else {

		// Tell the player that they guessed correctly
		console.log("You found a letter!!");

		// Search the array for all instances of the guessed letter
		for(var i = 0; i < answer.length; i++) {
			if(answer[i] === letter) {
				correct[i] = letter;				// If matched, swap the appropriate "_"s with the letter
				answer[i] = "_";					// Replace the letter from answer so found letters aren't found again
				
				reward += rewardAmt;				// Add to the players winnings
				guessReward += rewardAmt;			// Keep track of winnings for guessing the current letter
			} 
		}

		// Tell the player how much they won with that guess				
		console.log("You won $" + guessReward + ", ($" + rewardAmt + " per letter)");
		console.log("");
	}
	
	// Display the current correctly guessed letters
	console.log("Word: " + correct.join(" "));					
	console.log("");

	// If all "_" have been replaced, the player has won the game
	if(correct.indexOf("_") === -1) {
		console.log("CONGRATULATIONS!! You found all the letters");
		console.log("You won $" + reward + "!");
	}
};

guessLetter("b");
guessLetter("a");
guessLetter("l");
guessLetter("a");
guessLetter("e");


