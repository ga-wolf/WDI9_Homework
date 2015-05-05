
// THE WORD GUESSER

// Task:
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

console.log(" THE WORD GUESSER ");
console.log("*******************");
console.log("");

// Choose a word to play with
var word = "FOX"

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
	
	// Search the array for all instances of the guessed letter
	for(var i = 0; i < answer.length; i++) {
		if(answer[i] === letter) {
			correct[i] = letter;					// If matched, swap the appropriate "_"s with the letter
			answer[i] = "_";						// Replace the letter from answer so found letters aren't found again
			console.log("You found a letter!!");	// Feedback to the player
		}
	}

	console.log(correct.join(" "));					// Display the current correctly guessed letters
	console.log("");

	// If all "_" have been replaced, the player has won the game
	if(correct.indexOf("_") === -1) {
		console.log("CONGRATULATIONS!! You found all the letters");
	}
};

guessLetter("X");
guessLetter("H");
guessLetter("X");
guessLetter("O");
guessLetter("F");
