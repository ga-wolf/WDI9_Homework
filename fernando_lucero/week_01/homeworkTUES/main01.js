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


function halfNumber(number) {
	var numberHalf = number / 2;
	console.log("Half of " + number + " is " + numberHalf);
	return numberHalf;
}


function percentOf(number1, number2) {
	var percent = ((number1 / number2) * 100);
	console.log(number1 + " is " + percent + "% of " + number2); 
	return percent;
}


function areaOfCircle(radius) {
	var area = Math.PI * (radius * radius); //Math.PI gives me value of Pi.
	console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2)); //the .toFixed() lets me set how many decimals to round off to.
	return area;
}




function performOperations (number) { //here we made a function that will use output from previous functions. Thats why we needed to return them,
										//so they would be available to store in these new variables to use in THIS function.
	console.log("CALCULATIONS")
	var a = halfNumber( number );
	var b = squareNumber( number );
	var area = areaOfCircle(b);
	percentOf(area,b);
}


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


// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings 
// (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are 
// at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

function mixUp(word1,word2) {
	var a = word1.slice(0,2); //use slice to grab portion needed, in this cast the first two letters.
	var b = word2.slice(0,2);
	var c = word1.slice(2, word1.length); //will cut the word at (2) and keep going for its length ie.length.
	var d = word2.slice(2, word2.length);
	console.log(b + c + " " + a + d); //stitch the portions together.
}

// HERE IS A DIFFERENT WAY OF DOING MIXUP, WE'LL CALL IT MIXUP2

function mixUp2(word1,word2) {
	console.log(word2.substring(0,2) + word1.substring(2) + " " + word1.substring(0,2) + word2.substring(2));
} //here we use the substring command to cut the words up, either specify full portion eg. (0,2) or just (2) which will cut the word from there
	//and take everything after it.


// FixStart

// Create a function called fixStart. It should take a single argument, a string, 
// and return a version where all occurences of its first character have been replaced with '*', 
// except for the first character itself. You can assume that the string is at least one character long. 
// For example:

// fixStart('babble'): 'ba**le'

var fixStart = function(word) {
	var firstLetter = word.charAt(0); //takes the first letter in the word and stores it.
	var newWord = firstLetter; //the new word to output will begin with the first letter thats has been stored.

	for(var i=1; i<word.length; i++){ //loops thru the word to check it there are any matches with first letter.
		if(word.charAt(i) === firstLetter) {
			newWord = newWord + "*"; //if so add an * to the new word which already has the first original letter.
		}
		else {
			newWord = newWord + word.charAt(i); //else just add the letter in that position to the newWord, which will be the same.
		}
	}
	
	console.log(newWord); // print out the newly formed word.
};




// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, 
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
// If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

function verbing(verbWord) {
var ing = verbWord.slice(-3); //here we use to slice the last 3 letters off whatever the word might be. ie.(-3) cuts off the last 3 letters.

	if (ing === "ing") { //if those 3 letters are "ing" then we will leave it and add "ly".
		console.log(verbWord + "ly");
	}
	else if (verbWord.length >= 3) {
		console.log(verbWord + "ing");
	}
	else {
		console.log(verbWord);
	}
}


// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

// function notBad(string1) {
// var not = string1.indexOf("not");
// var bad = string1.indexOf("bad");

// 	if (string1.indexOf("not") === true) {
// 	var yippee = "it worked";
// console.log(yippee);

// 	}
// 	else {
// 		console.log("Nooo");
// 	}

// }

var notBad = function (string1) {
	var newString;
	if(string1.indexOf("not") !== -1 && (string1.indexOf("not") < string1.indexOf("bad"))) { // saying if 'not' is found (ie.!== -1) AND 'not' comes before 'bad' then go on.
		newString = string1.substr(0,string1.indexOf("not")) + "good" + string1.substr(string1.indexOf("bad")+3); //stitch newString together replacing from substring(?,?) to substring (?).
																													//note: added +3 to include all three b,a,d letters.
	}
	else newString = string1;

	return newString;
};
