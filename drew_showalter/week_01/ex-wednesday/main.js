// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
var maxOfTwoNumbers = function(a, b) {
	if (a >= b) {
		return a;
	} else {
		return b;
	}
}
//console.log(maxOfTwoNumbers(2,5));
//console.log(maxOfTwoNumbers(99,15));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var maxOfThree = function(a, b, c) {
	if ((a >= b) && (a >= c)) {
		return a;
	} else if ((b >= a) && (b >= c)) {
		return b;
	} else {
		return c;
	}
}
//console.log(maxOfThree(2,5,99));
//console.log(maxOfThree(99,15,45));
//console.log(maxOfThree(4,99,4));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var isAVowel = function(char) {
	var vowels = 'aeiouy'.split('');
	if (vowels.indexOf(char.toLowerCase()) < 0) {
		return false;
	} else
		return true;
}
//console.log(isAVowel('a'));
//console.log(isAVowel('e'));
//console.log(isAVowel('i'));
//console.log(isAVowel('o'));
//console.log(isAVowel('u'));
//console.log(isAVowel('y'));
//console.log(isAVowel('G'));
//console.log(isAVowel('x'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
var sumArray = function(arra) {
	var delta = 0;
	for ( var i = 0 ; i <= (arra.length - 1) ; i++ ) {
		delta += arra[i];
	}
	return delta;
}
//console.log(sumArray([1,2,3,4]));

var multiplyArray = function(arra) {
	var delta = 1;
	for ( var i = 0 ; i <= (arra.length - 1) ; i++ ) {
		delta = delta * arra[i];
	}
	return delta;
}
//console.log(multiplyArray([1,2,3,4]));

// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function(strang) {
	var newString = "";
	for ( i = strang.length - 1 ; i >= 0 ; i-- ) {
		newString += strang[i];
	}
	return newString;
}
//console.log(reverseString("jag testar"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var findLongestWord = function(arra) {
	var longest = 0;
	for ( var i = 0 ; i <= (arra.length - 1) ; i++ ) {
		if (arra[i].length >= longest) {
			longest = arra[i].length;
		}
	}
	return longest;
}
newArra = "big bigger biggester biggest".split(' ');
//console.log(findLongestWord(newArra));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
var filterLongWords = function(arra, i) {
	var longWords = [];
	for ( var j = 0 ; j <= (arra.length - 1) ; j++ ) {
		if (arra[j].length > i) {
			longWords.push(arra[j]);
		}
	}
	return longWords;
}
//console.log(filterLongWords(newArra, 3));



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
var wordLets = "frogger".split('');
var guessedLets = ["", "", ""];

var guessLetter = function(guess) {
	for ( var i = 0 ; i <= wordLets.length ; i++ ) {
		if (guess === wordLets[i]) {
			guessedLets[i] = guess;
		}
	}
	console.log("The currently correctly guessed letters are: " + guessedLets.join(""));


	if (guessedLets.join("") === wordLets.join("")) {
		console.log("Congratualtions! You win! The word was: " + wordLets.join(""));
	} else {
		console.log("Keep guessing!")
	}
}
// guessLetter('a');
// guessLetter('f');
// guessLetter('g');
// guessLetter('o');
// guessLetter('x');
// guessLetter('r');
// guessLetter('e');


// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
var wordLets = "frogger".split('');
var guessedLets = ["", "", ""];
var rewardAmt = 0;
var guessBetter = function(guess) {
	//this block sets up the variables that change on each run of the program, and logs your roll
	rewardRoll = Math.round(Math.random() * 1000);
	console.log("You rolled $" + rewardRoll + "!")
	//this variable is used to determine if there was a correct answer, and log how many there are
	var isThereOne = 0;

	//this function evaluates whether or not you've guessed correctly, and updates the found letters array when you do
	for ( var i = 0 ; i <= wordLets.length ; i++ ) {
		if (guess === wordLets[i]) {
			guessedLets[i] = guess;
			rewardAmt += rewardRoll;
			isThereOne ++;
		}
	}
	console.log("The currently correctly guessed letters are: " + guessedLets.join(""));

	//this function displays your winnings and losings each round, and doesn't let winnings drop below zero
	if (isThereOne === 0) {
		rewardAmt -= 250;
		if (rewardAmt <= 0) {
			rewardAmt = 0;
		}
		console.log("You lost $250.");
	} else {
		console.log("You won $" + (isThereOne * rewardRoll));
	}

	//this function evaluates the win/loss condition
	if (guessedLets.join("") === wordLets.join("")) {
		console.log("Congratualtions! You win! The word was: " + wordLets.join("") 
			+ ". You won: $" + rewardAmt + ".");
	} else {
		console.log("Keep guessing!");
	}
}
// guessBetter('a');
// guessBetter('f');
// guessBetter('g');
// guessBetter('o');
// guessBetter('x');
// guessBetter('r');
// guessBetter('e');


// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
var wordLets = "frogger".split('');
var guessedLets = ["", "", ""];
var guessWrong = ["", "", ""];
var guesses = 0;

var guessHang = function(guess) {
	console.log("You've guessed " + guess);

	//variable to check wheter or not a correct guess has been made
	var correctGuess = 0;

	//iterates through the word-'wordLets', finding and replacing correct guesses
	//also now changes correctGuess to something other than zero
	for ( var i = 0 ; i <= wordLets.length ; i++ ) {
		if (guess === wordLets[i]) {
			guessedLets[i] = guess;
			correctGuess ++;
		}
	}

	//breakout 'if' for duplicate letters
	if ( ((guessedLets + guessWrong).search(guess) >= 0 ) && (correctGuess <= 0) ) {
		return;
	}

	//'if' for correct or incorrect guess console logs
	if (correctGuess === 0) {
		guesses ++;
		console.log(" You guessed wrong, you have " + ( 6 - guesses ) 
			+ " guesses remaining!");
		guessWrong.push(guess)
	} else if (correctGuess > 0) {
		console.log("You guessed right!")
		console.log("The currently correctly guessed letters are: " + guessedLets.join(""));
	}



	//ending conditional
	if (guessedLets.join("") === wordLets.join("")) {
		console.log("Congratualtions! You win! The word was: " + wordLets.join(""));

		//resetting everything after a win
		guesses = 0;
		guessWrong = ["", ""];
		guessedLets = ["", ""]

	} else if (guesses === 6) {
		console.log('_______\n|   |   \n|   o   \n|   M   \n|   |   \n|   ^   \n YOU LOSE');

		//resetting everything after a loss
		guesses = 0;
		guessWrong = ["", ""];
		guessedLets = ["", ""]
	} else {
		console.log("Keep guessing!")
	}
}
guessHang('a');
guessHang('a');
guessHang('f');
guessHang('d');
guessHang('x');
guessHang('y');
guessHang('x');
guessHang('z');
guessHang('b');

guessHang('x');
guessHang('f');
guessHang('f');
guessHang('r');
guessHang('o');
guessHang('g');
guessHang('e');
