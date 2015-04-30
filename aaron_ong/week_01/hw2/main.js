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

var boxOfRandomWords = ["HELICOPTER", "SUPERMAN", "ELEPHANT", "WHATTHEFUCKDOIDONOW", "PROGRAM", "HACKER", "UNDERCOVER", "CRAZY","SLEEPISAWESOME", "MOREWORDSTHEBETTER", "UNDERPERFORMING"];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
random = getRandomArbitrary(0,boxOfRandomWords.length).toFixed(0)

var theGuessingWord = boxOfRandomWords[random].split('');
var theGuessedArray = [];
for (i=0; i <= (theGuessingWord.length - 1); i++) {
	theGuessedArray.push("_");
}


var rewardAmount = 100;
var tries = 6;
console.log("GUESSING LETTER GAME");
console.log("Use guessLetter(LETTERHERE) to play or resetGame() to reset");
console.log(theGuessedArray);


var guessLetter = function(userinput) {
	userinput = userinput.toUpperCase();
	if (theGuessingWord.indexOf(userinput) !== -1) {
		for (i=0; i < theGuessingWord.length; i++) {
			if (theGuessingWord[i] == userinput) {
				theGuessedArray[i] = userinput;
				rewardAmount += 10;
				console.log("Your current reward is $" + rewardAmount);
				console.log(theGuessedArray);

			}
		}
		if (theGuessedArray.join() == theGuessingWord.join()) {
		console.log("CONGRATUATIONS!!!!!");
		console.log("YOU HAVE GUESSED THE WORD");
		console.log("GAME RESET");				
		resetGame();
		}	
	}
	else {
		tries -= 1
		rewardAmount -= 10
		console.log("You guessed, " + userinput + ". Try again. You have " + tries + " tries left.");
		if (tries === 0) {
			console.log("You have failed")
		}
		if (rewardAmount === 0) {
			console.log("You ran out of money")
		}
	}
}

var resetGame = function() {
	random = getRandomArbitrary(0,boxOfRandomWords.length).toFixed(0);
	wordToGuess = boxOfRandomWords[random].split('');
	theGuessedArray = [];
	for (i=0; i <= wordToGuess.length; i++) {
		theGuessedArray.push("_");
	}
	theGuessingWord = wordToGuess;

	rewardAmount = 10;
	tries = 6;
	console.log(theGuessedArray);
}



// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


var maxOfTwoNumbers = function(num1,num2) {
	if (num1>num2) {
		console.log(num1);
	}
	else {
		console.log(num2);
	}
}
maxOfTwoNumbers(4,7)
maxOfTwoNumbers(7,5)
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// would like to check if there is a max function but i have no internet now
var maxOfThree = function(num1,num2,num3) {
	if (num1 > num2 && num1 > num3) {
		console.log(num1);
	}
	else if (num2 > num1 && num2 > num3) {
		console.log(num2);
	}
	else {
		console.log(num3);
	}
}
maxOfThree(3,4,7);
maxOfThree(7,3,5);
maxOfThree(2,7,5);
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var charVowel = function(str) {
	str = str.toLowerCase(); 
	if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
		return true;
	}
	else {
		return false;
	}
}


charVowel("a");
charVowel("d");
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
testArray = ['1','5','10','3','6'];
sumOf = 0 ;
var sumArray = function(array){
	for (i=0; i < array.length; i++) {
		sumOf += parseInt(array[i]);
		console.log(sumOf);
	}
}
mulOf = 1 
var multiplyArray = function(array){
	for (i=0; i < array.length; i++) {
		mulOf *= array[i];
		console.log(mulOf);
	}
}
console.log("SUM");
sumArray(testArray);
console.log("MULTIPLY");
multiplyArray(testArray);
// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function(str) {
	strArray = str.split('');
	reverseArray = [];
	for (i = strArray.length - 1; i >= 0 ; i -- ) {
		reverseArray.push(strArray[i]);
	}
	console.log(reverseArray);
}
//NOT WORKING
reverseString("jag testar")
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var findLongestWord = function(array) {
	lengthOfWord = [];
	for (i=0; i < array.length; i++) {
		wordInArray = array[i].length;
		lengthOfWord.push(wordInArray) ;
	}
	console.log(Math.max.apply(Math, lengthOfWord));
}
//NOT WORKING
findLongestWord(boxOfRandomWords);
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function (array, length) {
	longWordsArray = [];
	for (i=0; i < array.length; i++) {
		if (array[i].length > length) {
			longWordsArray.push(array[i]);
		}	
	}
	console.log(longWordsArray);
}
filterLongWords(boxOfRandomWords, 6)