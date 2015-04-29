// // The Calculator
// // Part 1

// // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."
// // Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. 
// It should also log a string like "Half of 5 is 2.5.".
// // Write a function called percentOf that will take two numbers, figure out what percent the first number represents 
// of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// // Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, 
// and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.
// // Part 2

// // Write a function that will take one argument (a number) and perform the following operations, using the functions you 
// wrote earlier1:

// // Take half of the number and store the result. - 1
// // Square the result of #1 and store that result. - 2 or squared result
// // Calculate the area of a circle with the result of #2 as the radius. - 3 or area
// // Calculate what percentage that area is of the squared result (#3).

function squareNumber(number) {
	var numberSq = number * number;
	console.log("The result of squaring the number " + number + " is " + numberSq);
	return numberSq;
}

squareNumber(3);

function halfNumber(number) {
	var numberHalf = number / 2;
	console.log("Half of " + number + " is " + numberHalf);
	return numberHalf;
}

halfNumber(5);

function percentOf(number1, number2) {
	var percent = ((number1 / number2) * 100);
	console.log(number1 + " is " + percent + "% of " + number2); 
	return percent;
}

percentOf(4,2);

function areaOfCircle(radius) {
	var area = Math.round(3.14 * (radius * radius));
	console.log("The area for a circle with radius " + radius + " is " + area);
	return area;
}

areaOfCircle(5);



function performOperations (number) {
	console.log("CALCULATIONS")
	var a = halfNumber( number );
	var b = squareNumber( number );
	var area = areaOfCircle(b);
	percentOf(area,b);
}

performOperations( 8 );


// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want 
// to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will 
// add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function drEvil(amount) {
	if (amount < 1000000) {
		console.log(amount + " dollars");
	}
	else {
		console.log(amount + " dollars (pinky)");
	}
}

drEvil(10);
drEvil(1000000);

// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings 
// (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are 
// at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

function mixUp(word1,word2) {
	var a = word1.slice(0,2);
	var b = word2.slice(0,2);
	var c = word1.slice(2, word1.length);
	var d = word2.slice(2, word2.length);
	console.log(b + c + " " + a + d);
}

mixUp('dog','dinner');

// FixStart

// Create a function called fixStart. It should take a single argument, a string, 
// and return a version where all occurences of its first character have been replaced with '*', 
// except for the first character itself. You can assume that the string is at least one character long. 
// For example:

// fixStart('babble'): 'ba**le'

function fixStart(word) {
	var firstL = word.slice(0,1);
	var letterReplace = word.slice(1);
	var re = new RegExp(letterReplace, 'g');
	var newWord = letterReplace.replace(re, "*");
	console.log(firstL + newWord);
}

fixStart("babble");


// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, 
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
// If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

function verbing(verbWord) {
var ing = verbWord.slice(-3);

	if ((ing === "ing") && (verbWord.length >= 3)) {
		console.log(verbWord + "ly");
	}
	else if (verbWord.length >= 3) {
		console.log(verbWord + "ing");
	}
	else {
		console.log(verbWord);
	}
}

verbing("flying");
verbing("dog");
verbing("go");

// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

function notBad(string1) {
var not = string1.indexOf("not");
var bad = string1.indexOf("bad");



}