// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
var testNumber = 5.56;

var squareNumber = function(number) {
	result = number * number;
	result = result.toFixed(2);
	console.log("The result of squaring the number " + number + " is " + result);
	return result;
}
var halfNumber = function(number) {
	result = number / 2;
	result = result.toFixed(2);
	console.log("Half of " + number + " is " + result);
	return result;
}
var percentOf = function(n1, n2) {
	result = n1 / n2 * 100;
	result = result.toFixed(2);
	console.log(n1 + " is " + result + "% of " + n2);
	return result;
}
var areaOfCircle = function(radius) {
	result = 3.14 * radius * radius;
	result = result.toFixed(2);
	console.log("The are for a circle with radius " + radius + " is " + result);
	return result;
}
console.log("");
console.log("CALCULATOR PART 1");
squareNumber(testNumber);
halfNumber(testNumber);
percentOf(testNumber,10);
areaOfCircle(testNumber);

// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


var aLotOfMaths = function(number) {
	step1 = halfNumber(number);
	step2 = squareNumber(step1);
	step3 = areaOfCircle(step2);
	return percentOf(step3, step2);
}
console.log("");
console.log("CALCULATOR PART 2");
aLotOfMaths(testNumber);


// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// MixUp

var DrEvil = function (number) {
	if (number < 1000000) {
		return number + " dollars";
	}
	else
		return number + " dollars (pinky)";
}
console.log("");
console.log("DR EVIL");

console.log(DrEvil(10));
console.log(DrEvil(241002030));

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
var mixUp = function(str1, str2) {
	return str2.slice(0,2) + str1.slice(2) + " " + str1.slice(0,2) + str2.slice(2);
}
console.log("");
console.log("MIX UP");

console.log(mixUp('wet','dog'));
console.log(mixUp('sad','day'));
console.log(mixUp('dog','dinner'));

// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

var fixStart = function(string) {
	firstChar = string.charAt(0);
	RegFirstChar = new RegExp(firstChar, 'g');
	return firstChar + string.slice(1).replace(RegFirstChar, "*");
}
console.log("");
console.log("FIX START");
console.log(fixStart("testingthisout"));
console.log(fixStart("sisterstringers"));
console.log(fixStart("babble"));


// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// Not Bad
var verbing = function(string) {
	if (string.length < 3) {
		return string;
	}
	else if (string.indexOf("ing") < 0) {
		return string + "ing";
	}
	else if (string.indexOf("ing") > -1) {
		return string + "ly";
	}
	else {
		return string;
	}
}
console.log("");
console.log("VERBING");
console.log(verbing("laughing"));
console.log(verbing("play"));
console.log(verbing("cry"));
console.log(verbing("go"));
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
var notBad = function(sentence) {
	if (sentence.indexOf("not") > -1 && sentence.indexOf("bad") > -1) {
		return sentence.replace(sentence.slice(sentence.indexOf("not")),"good!");
	}
	else {
		return sentence;	
	}
}
console.log("");
console.log("NOT BAD");
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This movie is bad!'));
// it doesn't work well if the sentence is something like this
console.log(notBad('The movie was not good at all, it was pretty bad!'))

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


var multiples3And5 = function(numberUpTo) {
	var countUp = 0;
	arrayOf3And5 = [];
	var sumOfArray = 0;
	while (countUp < numberUpTo) {
		countUp += 1;
		if (countUp % 3 == 0 || countUp % 5 == 0) {
			arrayOf3And5.push(countUp);
			sumOfArray += countUp
		}
	}
	console.log(arrayOf3And5);	
	console.log("The sum of the numbers up to " + numberUpTo + " is " + sumOfArray)
	console.log("There are exactly " + arrayOf3And5.length + " numbers in this array");	
}

console.log("");
console.log("EXTRA Multiples of 3 and 5");
multiples3And5(15);
multiples3And5(1000);

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.



var fibonaci = function(numberUpTo) {
	arrayOfFibonaci = [1,2];
	arrayOfEvenFibonaci = [];
	var sumOfArray = 2;
	while (arrayOfFibonaci.slice(-1) < numberUpTo) {
		newNumber = (parseInt(arrayOfFibonaci.slice(-1))) + parseInt((arrayOfFibonaci.slice(-2,-1)));
		arrayOfFibonaci.push(newNumber);
		if (newNumber % 2 === 0) {
			arrayOfEvenFibonaci.push(newNumber);
			sumOfArray += newNumber;
		}
	}
	console.log(arrayOfFibonaci);
	console.log("There are exactly " + arrayOfEvenFibonaci.length + " even Fibonaci numbers out of " + arrayOfFibonaci.length + " Fibonaci with the highest number being less than " + numberUpTo);
	console.log("Sum of aray for even fibonacis up to " + numberUpTo + " is " + sumOfArray)
}

console.log("");
console.log("EXTRA Even Fibonaci numbers");
fibonaci(100);
fibonaci(4000000);

