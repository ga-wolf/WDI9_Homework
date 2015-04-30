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

var answer = [];
var lettersGuessed = [];
var prize = 0;

var setWord = function (word) {

	prize = 0;
	word = word.toLowerCase();
	answer = word.split('');

for(var x = 0; x < word.length; x++ ) {
	lettersGuessed[x] = '_';
	}
}

var guessLetter = function (letter) {
	letter = letter.toLowerCase();

	for (var i = 0; i < answer.length; i++ ) {
		// if (answer.indexOf(letter) !== -1) {
		if (letter === answer[i]) {
		  lettersGuessed[i] = letter;
		  var reward = Math.round(Math.random() * 100); 
		  console.log('You have found: ' + lettersGuessed + ' and you also earned $' + prize);
		}
		if (lettersGuessed.indexOf("_") < 0) {
			console.log('congrats');
		}
	}
}



// Updated homework!
// function 1

var maxOfTwoNumbers = function (numOne, numTwo){
	if (numOne > numTwo) {
		return numOne;
	} else {
		return numTwo;
	}
}


// function 2

var maxOfThree = function (numOne,numTwo,numThree) {
	if (numOne > numTwo && numOne > numThree) {
		return numOne;
	} else if (numTwo > numThree) {
		return numTwo;
	} else return numThree;
}

// function 3	

var vowelCheck = function (x) {
	if (x === 'a'){
		return true;
	} else if (x === 'e'){
		return true;
	} else if (x === 'i'){
		return true;
	} else if (x ==='o'){
		return true;
	} else if (x === 'u'){
		return true;
	} else return false;
}


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var arrayOne = [1,2,3,4]
var myTotal = 0;

var sumArray = function (arrayOne){
	for(var i = 0; i < arrayOne.length; i++){
		myTotal += arrayOne[i];
	}


}

var arrayTwo = [1,2,3,4]

var  multiplyArray = function (arrayTwo){
	var result = 1;
	for(var i = 0; i < arrayTwo.length; i++){
		result = arrayTwo[i] * result;
	}
	return result;

}
























