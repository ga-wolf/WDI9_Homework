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

//function to set arrays to the string you wish to guess
var arrayify = function (str) {
	wordToBeGuessed = str.split('');
	unknownWord = str.split('');
	hangmanWord = str.split('');
};

var wordToBeGuessed = [];
var currentLettersGuessed = [];

var guessLetter = function(a) {
	

	for (var i = 0; i < wordToBeGuessed.length; i += 1) {

		if (a === wordToBeGuessed[i]) {
			currentLettersGuessed.splice(i,0,a); // inserts guessed letter into array of guessed letters
			console.log('You guessed a letter! Woo hoo!');
		}
	}

	if (wordToBeGuessed.length === currentLettersGuessed.length) { // determines it is now game over
		console.log('Congrats you have guessed the word');
	}

	return currentLettersGuessed.join('');
};

// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var rewardTotal = 0;
var unknownWord = [];
var guessedWord = [];

var guessLetterReward = function(a) {

	var guessed = false; // will determine whether to add or deduct reward amount

	for (var i = 0; i < unknownWord.length; i += 1) { // searches for correct letter match

		var rewardToReceive = 0;

		if (a === unknownWord[i]) {
			guessed = true; // skips reward deduction
			guessedWord.splice(i,0,a); // inserts letter into array at correct position
			rewardToReceive = Math.floor(Math.random() * 100); // calculates reward amount between 1-100
			rewardTotal = rewardTotal + rewardToReceive; 
			console.log('You guessed a letter! Woo hoo! You earn a reward of ' + rewardToReceive + '. You now have a reward of ' + rewardTotal);
		}
	}

	if (guessed === false) { // signifies no correct letter guessed
			rewardToReceive = (Math.floor(Math.random() * 100)) * (-1); // calculates reward deduction between 1-100
			rewardTotal = rewardTotal + rewardToReceive;
			console.log('You did not guess a letter this time. You lose an amount of ' + rewardToReceive + ' Your new reward amount is ' + rewardTotal);
	}

	if (unknownWord.length === guessedWord.length) { // determines game is over
		console.log('Congrats you have guessed the word');
	}

	return guessedWord.join(''); // returns word guessed

};

// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var hangmanWord = [];
var knownLetters = [];
var correctGuesses = [];
var incorrectGuesses = [];
var deathCounter = 0;


var hangman = function(a) {

	var guessed = false;
	var incorrectGuess = '';
	var alreadyDone = false;

	if (hangmanWord.length === knownLetters.length) { // stops you playing on after you have finished game
		return 'You have already guessed the word and avoided death. Refresh to play again'
	} else if (deathCounter === 6) {
		return 'You are dead'
	} else {

		for (var i = 0; i < correctGuesses.length; i++) { // checks double guesses with correct letters
			if (correctGuesses[i] === a) {
				alreadyDone = true;
			}
		}

		for (var i = 0; i < incorrectGuesses.length; i++) { // checks double guesses with incorrect letters
			if (incorrectGuesses[i] === a) {
				alreadyDone = true;
			}
		}
		
		if (alreadyDone === true) { // stops double guesses
			return 'Please choose another letter. This letter has already been guessed'
		}
		
		if (deathCounter < 6) {
			for (var i = 0; i < hangmanWord.length; i += 1) { // searches through to see if you have a correct letter

				if (a === hangmanWord[i]) {
					guessed = true;
					knownLetters.splice(i,0,a); // inserts guessed letter into array of guessed letters
					console.log('You guessed a letter! Woo hoo!');
					correctGuesses.push(a);

					if (hangmanWord.length === knownLetters.length) {
						console.log('You win the game. The correct word is ' + hangmanWord.join(''));
						return 'VICTORY'
					}
				} else {
					incorrectGuess = a;
				}
			}

			if (guessed === false) { // signifies no correct letter guessed
				deathCounter += 1;
				console.log('Incorrect. You have ' + (6 - deathCounter) + ' guesses left.');
				incorrectGuesses.push(incorrectGuess);
			}

			guessed = false;
			console.log('Your correct guesses are ' + correctGuesses);
			console.log('Your incorrect guesses are ' + incorrectGuesses);
		} else if (deathCounter >= 6) {
			console.log('You will hang at dawn');
			return 'l2p hangman'
		} 

		console.log(knownLetters.join(''));
	}
};

// cannot get my death message in game(line150), only works when I hangman() and have no lives
// therefore haven't added in asci image of hangman

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function (a,b) {
	if (a > b) {
		return a
	} else {
		return b
	}
};

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function (a,b,c) {
	if (a > b) {
		if (a > c) {
			return a
		} else {
			return c
		}
	} else if (b > a) {
		if (b > c) {
			return b
		} else {
			return c
		}
	} else {
		return c
	}
};

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelCheck = function (a) {
	if (a === 'a' || a === 'e') {
		return true
	} else if (a === 'i' || a === 'o') {
		return true
	} else if (a === 'u') {
		return true
	}
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function (array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum
};

var multiplyArray = function (array) {
	var total = 1;
	for (var i = 0; i < array.length; i++) {
		total = total * array[i];
	}
	return total
};

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


var reverseString = function (str) {
	var strArray = [];
	var reverseStrArray = [];
	for (var i = 0; i < str.length; i += 1) {
		strArray.push(str[i]);
	}
	console.log(strArray);
	for (var i = str.length - 1; i >= 0; i -= 1) {
		reverseStrArray.push(strArray[i]);
	}
	console.log(reverseStrArray);
	return reverseStrArray.join('');
};

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var findLongestWord = function (array) {
	var longest = 0;
	for (var i = 0; i < array.length; i +=1) {
		if (array[i].length > longest) {
			longest = array[i].length
		}
	}
	return longest
};

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function (array,i) {
	var longWords = [];
	for (var x = 0; x < array.length; x++) {
		if (array[x].length > i) {
			longWords.push(array[x]);
		}
	}
	return longWords
};









