// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(num) {
	var result = num * num;
	return result;
};

var halfNumber = function(num) {
	var result = num / 2;
	return result;
};

var percentOf = function(num1, num2) {
	var percent = num1 / num2 * 100;
	var result = num1 / num2; //result is a seperate response here as .5% would be incorrect in the readable version, so percent is x100 to make it readable for humans.
	return result;
	console.log(num1 + ' is ' + percent + '% of ' + num2);
};

var areaOfCircle = function(radius) {
	result = Math.round(Math.PI * (radius * radius) * 100) / 100;
	return result;
};

// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var calculator = function(num) {
	var halfNum = halfNumber(num);
	console.log('Half of ' + num + ' is ' + halfNum);

	var squaredHalf = squareNumber(halfNum);
	console.log('Squaring half of ' + num + ' gives ' + squaredHalf);

	var circleArea = areaOfCircle(squaredHalf);
	console.log('Using the Squared result of ' + squaredHalf + ' the area of a circle would be ' + circleArea);

	var percentAreaOfSquared = percentOf(circleArea, squaredHalf);
	console.log('The area of ' + circleArea + ' is ' + Math.round(percentAreaOfSquared * 10000) / 100 + '% of the Squared half of the original number of ' + squaredHalf);
};

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function (amount) { //the name in the example wasn't camelcase :(
	if (amount === 1000000) {
		return amount + ' dollars (pinky)';
	} else {
		return amount + ' dollars';
	}
};

// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(str1, str2) {
	return str2.substring(0,1) + str1.substring(1) + ' ' + str1.substring(0,1) + str2.substring(1); // Assuming each string is at least 2 characters, though this should still work correctly on strings of 1 character.
};

// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

var fixStart = function(str) {
	var result = str;
	for (i = 1; i < str.length; i++) {
		if (str.charAt(i) === str.charAt(0)) {
			result = result.substring(0,i) + '*' + result.substring(i+1);
		} //JavaScript doesn't seem to mind about adding a potentially non-existant substring at the end of the result here... I was going to include another if statement to check if this was the last character in the string, but it seems unnecessary. Can you let me know if this is an alright way to do this in JS..?
	}
	return result;
	console.log(result);
};

// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(str) {
	if (str.length <= 3) {
		return str;
	} else if (str.substring(str.length-3,str.length) === 'ing') {
		return str + 'ly';
	} else {
		return str + 'ing';
	}
};

// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function (str) {
	if (str.indexOf('not') < str.indexOf('bad')) {
		var notIndex = str.indexOf('not');
		var badIndex = str.indexOf('bad');
		// I only did this to make the return statement a little clearer
		return str.substring(0,notIndex) + 'good' + str.substring(badIndex+3);
	} else {
		return str;
	}
};