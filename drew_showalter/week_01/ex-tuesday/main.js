// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
var squareNumber = function(num) {
	var num2 = Math.pow(num,2);
	console.log("The result of squaring the number " + num 
		+ " is " + num2);
	return num2;
}
squareNumber(3);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
var halfNumber = function(num) {
	var numhalf = num / 2;
	console.log("Half of " + num + " is " 
		+ numhalf + ".");
	return numhalf;
}
halfNumber(3.5);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
var percentOf = function(percentor, percentee) {
	var percent = (percentor / percentee) * 100;
	percent = +percent.toFixed(2);
	console.log(percentor + " is " + percent + "% of " + percentee + ".");
	return percent;
}
percentOf(2,4);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
var areaOfCircle = function(circRad) {
	var area = Math.pow(circRad,2) * Math.PI;
	area = +area.toFixed(2);
	console.log("The area for a circle with radius " + circRad + " is " + area + ".");
	return area;
}
areaOfCircle(3);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
var longForm = function(num) {
	var m1 = halfNumber(num);
	var m2 = squareNumber(m1);
	var numArea = areaOfCircle(m2);
	return percentOf(numArea, squareNumber(numArea));
}
longForm(4);



// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
var DrEvil = function(amount) {
	if(amount === 1000000) {
		var funny = amount + " dollars (pinky)";
	} else {
		var funny = amount + " dollars";
	}
	console.log(funny);
	return funny;
}
DrEvil(45);
DrEvil(1000000);


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
var mixUp = function(thing1, thing2) {
	finalText = thing2.slice(0,2) + thing1.slice(2) + " " + thing1.slice(0,2) + thing2.slice(2);
	console.log(finalText);
	return finalText;
}
mixUp('mix', 'pod');
mixUp('dog', 'dinner');


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'
var fixStart = function(statement) {
	var firstL = new RegExp(statement[0], "g");
	var sliced = statement.slice(1);
	var finalText = statement[0] + sliced.replace(firstL, "*");
	console.log(finalText);
	return finalText;
}
fixStart('babble');


// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
var verbing = function(strang) {
	if (strang.length >= 3) {
		var end3 = strang.slice(strang.length - 3)
		if (end3 === "ing") {
			strang += "ly";
		} else if (strang === "swim") {
			strang += "ming";
		} else if (strang[strang.length - 1] === "e") {
			strang = strang.slice(0, strang.length - 1) + "ing";
		} else {
			strang += "ing";
		}
	}
	console.log(strang);
	return strang;
}
verbing("swim");
verbing("fire");
verbing("swimming");
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
var notBad = function(textual) {
	var notB = textual.search("not");
	var nBad = textual.search("bad");
	if ((nBad >= 0) && (notB >= 0)) {
		//i should remember to say >= -1 instead of 0 (because not or bad could exist at zero), and to check for nBad being before notB ... and do ...something... with that
		var finalText = textual.substr(0,notB) + "good" + textual.substr(nBad + 3);
	} else {
		finalText = textual;
	}
	console.log(finalText);
	return finalText;
}
notBad('This dinner is not that bad!')
notBad('This movie is not so bad!')
notBad('This dinner is bad!')