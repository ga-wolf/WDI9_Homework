
// HANGMAN

// Task:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

console.log(" HANGMAN ");
console.log("***********");
console.log("");

// Set the number of lives the player has
var lives = 6;

// Choose a word to play with
var word = prompt("Choose a word to play with");

// Convert the string into an array of upper-case letters
var answer = word.toUpperCase().split("");

// Create the array for correctly guessed letters and initialise it with the correct number of "_"s
var correct = [];
for(var i = 0; i < word.length; i++) {
	correct.push("_");
}

// Create and array to hold all the letters the player has already chosen
var guessed = [];

// Show the player how many letters need to be found
console.log("Word: " + correct.join(" "));
console.log("");


var guessLetter = function(letter) {

	// Convert the guess to upper-case for matching
	letter = letter.toUpperCase();
	console.log("You guessed the letter '" + letter + "'");

	// Check if player has already guessed the letter
	if(guessed.indexOf(letter) !== -1) {					
		console.log("You have already guessed '" + letter + "'");

	} else {

		// Add the letter to the guessed letters array
		guessed.push(letter);

		// Find if the guessed letter appears in the answer
		if(answer.indexOf(letter) === -1) {

			// Player guessed wrong so loses a life
			lives--;

			// Tell the player that they lost a life with that guess
			if(lives === 1) {
				console.log("No Match, " + lives + " life left");
			} else {
				console.log("No Match, " + lives + " lives left");
			}
			
			// At zero lives, tell the player that they have lost the game
			if(lives === 0) {
				yourDead();									
			}

		} else {
		
			// Tell the player that they guessed correctly
			console.log("You found a letter!!");
			
			// Search the array for all instances of the searched letter
			for(var i = 0; i < answer.length; i++) {
				if(answer[i] === letter) {
					correct[i] = letter;						// If matched, swap the appropriate "_"s with the letter
				}
			}

			// If all "_" have in the correct guesses' array have been replaced, the player has won the game
			if(correct.indexOf("_") === -1) {
				youWon();
				lives = 0;
			}
		}
	}

	// If the game is not over, display information to the player
	if(lives != 0) {
		console.log("Word: " + correct.join(" "));						// Display the correctly guessed letters
		console.log("Guessed Letters: " + guessed.join(" "));	// Display the letters guessed so far
		console.log("");																			// Add a line to make it pretty
	}
};


// If the player still has lives, ask for a letter
while(lives > 0) {
	guessLetter(prompt("Guess a letter"));
}














function youWon() {
	console.log("CONGRATULATIONS!! You found all the letters");
	console.log("");
	console.log("	 __                             __       __  __           ");
	console.log("/  \\    /  |                       /  |  _  /  |/  |          ");
	console.log("$$  \\  /$$/______   __    __       $$ | / \\ $$ |$$/  _______  ");
	console.log(" $$  \\/$$//      \\ /  |  /  |      $$ |/$  \\$$ |/  |/       \\ ");
	console.log("  $$  $$//$$$$$$  |$$ |  $$ |      $$ /$$$  $$ |$$ |$$$$$$$  |");
	console.log("   $$$$/ $$ |  $$ |$$ |  $$ |      $$ $$/$$ $$ |$$ |$$ |  $$ |");
	console.log("    $$ | $$ \\__$$ |$$ \\__$$ |      $$$$/  $$$$ |$$ |$$ |  $$ |");
	console.log("    $$ | $$    $$/ $$    $$/       $$$/    $$$ |$$ |$$ |  $$ |");
	console.log("    $$/   $$$$$$/   $$$$$$/        $$/      $$/ $$/ $$/   $$/ ");
	console.log("");                                                   
}




function yourDead() {
	console.log(" ___________.._______");
	console.log("| .__________))______|");
	console.log("| | / /      ||");
	console.log("| |/ /       ||");
	console.log("| | /        ||.-''.");
	console.log("| |/         |/  _  \ ");
	console.log("| |          ||  `/,|");
	console.log("| |          (\\`_.'");
	console.log("| |         .-`--'.");
	console.log("| |        /Y . . Y\ ");
	console.log("| |       // |   | \\");
	console.log("| |      //  | . |  \\");
	console.log("| |     ')   |   |   (`");
	console.log("| |          ||'||");
	console.log("| |          || ||");
	console.log("| |          || ||");
	console.log("| |          || ||");
	console.log("| |         / | | \ ");
	console.log('""""""""""|_`-\' `-\' |"""| ');
	console.log('|"|"""""""\ \       \'"|"|');
	console.log("| |        \ \        | |");
	console.log(": :         \ \       : :");
	console.log(". .          `'       . .");
	console.log("");
}


