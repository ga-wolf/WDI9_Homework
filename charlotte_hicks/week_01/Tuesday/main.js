// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(num) {
	console.log( "SQUARE NUMBER CALLED " + typeof num)
	var numSquared = num * num;
	console.log("The result of squaring the number " + num + " is " + numSquared + ".");
	return numSquared;
}


squareNumber(12);

var halfNumber = function(num) {
	console.log( "HALF NUMBER CALLED " + typeof num)
	var numHalved = num/2;
	console.log("Half of " + num + " is " + numHalved + ".");
	return numHalved;
}
halfNumber(12);

var percentOf = function(num1,num2) {
	var percentageStep1 = num2 / num1;
	var percentageStep2 = 100 / percentageStep1;
	console.log(num1 + " is " +percentageStep2 + "% of " + num2 + ".");
	return percentageStep2;
}
percentOf(120,1000);

var areaOfCircle = function(radius) {
	var area = (Math.PI * radius * radius).toFixed(2);
	console.log("The area for a circle with radius " + radius + " is " + area + ".");
	return area;
}

areaOfCircle(2);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var workAll = function(num) {
	// debugger;
	var half = halfNumber(num);
	var square = squareNumber(half);
	var area = areaOfCircle(square);
	var percent = percentOf(area,square);
}

console.log(workAll(10));



// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)'at the end if the amount is 1 million. For example:


var DrEvil = function(num) {
	if (num === 1000000){
		return num + " dollars (pinky)";
	}
	else {
		return num + " dollars";
	}
}

console.log(DrEvil(1000000));


// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

var mixUp = function(word1,word2) {

	var word1Start = word1.slice(0, 1);
	var word2Start = word2.slice(0, 1);

	var word1End = word1.slice(1);
	var word2End = word2.slice(1);
	
	console.log(word2Start + word1End + " " + word1Start + word2End);
}

mixUp("Cat","Dog")

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

//RegExp .replace re
// var re = new RegExp(wordStart, 'g')

var fixStart = function (word) {
	var wordStart = word.slice(0, 1);
		console.log(wordStart);

		// wordStart = /wordStart/g;
	var wordEnd = word.slice(1);
	console.log(wordEnd);

	// debugger;

	// var newWordEnd = wordEnd.replace(wordStart, '*');
	// // var newWordEnd = new RegExp(wordStart, 'g')
	// console.log(newWordEnd);
	var regEx = new RegExp( wordStart, "g" );
	wordEnd = wordEnd.replace( regEx, "*" )
	var censoredWord = wordStart + wordEnd;

	console.log(censoredWord);
}

fixStart("babble");



// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:


//.edswith function

var verbing = function (word) {
	var endsIn = word.slice(-3)
	if (word.length > 3 && endsIn === "ing") {
		return word + "ly";
	}
	else if (word.length > 3) {
		return word + "ing";
	}
	else {
		return word;
	}
}

console.log(verbing("cat"));

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

//.replace

var notBad = function (sentence) {
	var whereIsNot = sentence.indexOf("not");
	var whereIsBad = sentence.indexOf("bad");

	if (whereIsNot >= 0 && whereIsBad >= 0 && whereIsNot < whereIsBad) {
		return sentence.substring(whereIsNot,-1) + "good";
		} 
	else {
		return sentence;
	}
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));































