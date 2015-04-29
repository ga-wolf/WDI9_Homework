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

// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var theWord = [];
var guessedLetters = [];
var noRepeats = [];
var currentProgress = '';
var totalGuesses = 0;
var prize = 0;

var randomWords = "accoutrements acumen anomalistic auspicious bellwether callipygian circumlocution concupiscent conviviality coruscant cuddlesome cupidity cynosure ebullient equanimity excogitate gasconading idiosyncratic luminescent magnanimous nidificate osculator parsimonious penultimate perfidiousness perspicacious proficuous remunerative saxicolous sesquipedalian superabundant unencumbered unparagoned winebibber".split(" ");
// This list exists so if a word isn't set, it can set one automatically for the player.

console.log('Welcome to THE WORD GUESSER! To play, you can either set your own word by writing setWord("YOURWORDHERE") or by starting your guesses and having a random word chosen for you by entering guessLetter("x", true) - After you have set the word this way, remove the true and make all future guesses by typing guessLetter("x")');
// Intro message explaining how to play.

var setWord = function (word) {
	word = word.toLowerCase();
	theWord = word.split('');
	prize = 0;
	totalGuesses = 0;
	noRepeats = [];
	currentProgress = ''; // Resets all progress;
	for (var i = 0; i < theWord.length; i++) {
		currentProgress = currentProgress + '_'; 
		// Sets up a variable with underscores that updates as they correctly guess letters.
	}
	console.log('The word has been set!')
};

var guessLetter = function (letter, needWord) {
	letter = letter.toLowerCase();

	if (needWord && !theWord) {
		var index = Math.round(Math.random() * 34)-1;
		setWord(randomWords[index]);
	}

	if (theWord.length === 0) {
		return 'No word has been set';
	} //Just checks to make sure the game is actually in play.
	
	if (letter.length > 1) {
		return 'Not a valid guess, please enter a single letter.'; // Checks to make sure that they aren't guessing more than a single letter.
	}

	for (var j = 0; j < noRepeats.length; j++) {
		if (letter === noRepeats[j]) {
			return 'Letter has already been guessed, try again.';
			// This loop just checks that they aren't going to be penalized for guessing a letter they had guessed previously.
		} 
	}
	
	for (var k = 0; k < guessedLetters.length; k++) {
		if (letter === guessedLetters[k]) {
			return 'Letter has already been guessed, try again.';
			// This loop just checks that they aren't going to be rewarded for guessing a letter they had guessed previously.
		} 
	}

	var success = false;

	if (theWord.indexOf(letter) >= 0) {
		for (var i = 0; i < theWord.length; i++) {
			if (letter === theWord[i]) {	
				// This loop will only run if an instance of the letter is found at all.

				var success = true;
				var reward = Math.round(Math.random() * 100); //used to determine the random prize
				prize = prize + reward;

				guessedLetters.push(letter);

				currentProgress = currentProgress.split('');
				currentProgress[i] = letter;
				currentProgress = currentProgress.join('');
				// This section converts the _____ string to an array so it can replace the character of the correctly guessed characters.
					
				
				console.log('Congratulations! ' + letter + ' is a correct guess! You have earned $' + reward);
			}
		}
	}

	if (success === false) {

		noRepeats.push(letter);
		totalGuesses++;
		var penalty = Math.round(Math.random() * 100);
		console.log('Oh no! You have been penalised $' + penalty + ' for an incorrect guess');
		prize = prize - penalty;

		if (totalGuesses >= 6) {
			console.log('Unfortunately you are out of guesses, you lose! You earned $' + prize);
			console.log('     ________	');
     		console.log('	 |/      |	');
     		console.log('	 |      (_)	');
     		console.log('	 |      \\|/	');
     		console.log('	 |       |	');
     		console.log('	 |      / \\	');
     		console.log('	 |			');
 			console.log('	_|_______   ');
			theWord = [];
			noRepeats = [];
			return;
		// This section exists to reset the game if they lose
		}
	}

	console.log("Here's your progress: " + currentProgress + ' Your total prize so far is $' + prize);
	console.log("You have made " + totalGuesses + " incorrect guesses so far, you have " + (6 - totalGuesses) + " remaining.")
		
	if (guessedLetters.length === theWord.length) {
		console.log("Congratulations!! You have successfully guessed the word: " + theWord.join('') + ', Thank you for playing!');
		console.log("You earned $" + prize);
		theWord = [];
		noRepeats = [];
		// Automatically resets the game if they win
	}
};

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumber = function (num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function (num1, num2, num3) {
	// Need to use greater than or equal too in this function to ensure that the largest number isn't ignored if it's the same as one of the others.
	if (num1 >= num2 && num1 >= num3) {
		return num1;
	} else if (num2 >= num1 && num2 >= num3) {
		return num2;
	} else {
		return num3;
	};
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var charIsVowel = function(char) {
	if (char.length !== 1) {
		return "Please enter a single character";
	}

	if (char.length === 1) {
    	return /[aeiou]/.test(char);
  	} else {
  		return false;
  	}
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function(testArray) {
	var sumTotal = 0;
	for (var i = 0; i < testArray.length; i++) {
		sumTotal = sumTotal + testArray[i];
	}
	return sumTotal;
};

var multiplyArray = function(testArray) {
	var multiplyTotal = 1;
	// multiplyTotal needs to begin as 1 or else this function will always give 0.
	for (var i = 0; i < testArray.length; i++) {
		multiplyTotal = multiplyTotal * testArray[i];
	}
	return multiplyTotal;
};

// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(str) {
	str.split('');
	var result = [];

	for (var i = 0; i < str.length; i++) {
		result.push(str[str.length-1-i]);
		// Starts from the back of the str array and pushes each letter into the result array.

	}
	result = result.join('');
	// After the loop has run and each letter has been added in reverse order, turns the result array back into a string for the return.

	return result;
};

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function(str) {
	words = str.split(" ");
	var num = words[0].length;
	// Starts by storing the length of the first word in the array.

	for (var i = 1; i < words.length; i++) {
		if (words[i].length > num) {
			num = words[i].length;
			// If a word is found that has a longer length than the currently stored num, it replaces the num.
		}
	}
	return num;
};

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function(wordArray, minLength) {
	var result = [];

	for (var i = 0; i < wordArray.length; i++) {
		if (wordArray[i].length > minLength) {
			result.push(wordArray[i]);
		}
	}
	return result;
};

// Yay!