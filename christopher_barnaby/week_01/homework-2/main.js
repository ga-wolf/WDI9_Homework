// Strings

// DrEvil

	// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

		//   DrEvil(10): 10 dollars
		//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function(amount) {
	if (amount === 1000000) {
		result = amount + " dollars (pinky)" //Oh my god, I just got this. Took me about 6 hours, but I got it.
	} else result = amount + " dollars"
	console.log(result);
}

drEvil(10);
drEvil(1000000);

// MixUp

	// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

		//   mixUp('mix', pod'): 'pox mid'
		//   mixUp('dog', 'dinner'): 'dig donner'
		// 	 Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(mix,up) {
	var string1 = mix.slice(0,2);
	var string2 = up.slice(0,2);
	var string3 = mix.slice(2);
	var string4 = up.slice(2);
	console.log(string1 + string4 + " " + string2 + string3)
}

mixUp("christopher","barnaby");
mixUp("Yeeeeah","mate");


// FixStart

	// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

		// fixStart('babble'): 'ba**le'

var fixStart = function(stars) {
	var string1 = stars.charAt(0);
	var string2 = stars.slice(1);
	var string3 = string2;
	var re = new RegExp(string1, 'g');
	string3.replace(re,"*");
}

fixStart("paappaappaa") //Yeah, I just can't get this one to work. 

// Verbing

	// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

		//   verbing('swim'): 'swimming'
		//   verbing('swimming'): 'swimmingly'
		//   verbing('go'): 'go'

var verbing = function(verbString) {
	var LengthOfString = verbString.length;
	var LastThreeChars = verbString.slice(-3);
	if (LengthOfString < 3) {
		console.log(verbString);
	} else {
		if (LastThreeChars === "ing") {
			console.log(verbString + "ly");
		} else {
			console.log(verbString + "ing")
		}
	}
}
verbing("swimming")
verbing("swim")
verbing("go")
verbing("fish")
	
// Not Bad

	// Create a function called notBad that takes a single argument, a string.	

	// It should find the first appearance of the substring 'not' and 'bad'.
	// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
	// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
	// For example:

		//   notBad('This dinner is not that bad!'): 'This dinner is good!'
		//   notBad('This movie is not so bad!'): 'This movie is good!'
		//   notBad('This dinner is bad!'): 'This dinner is bad!'


var notBad = function(negs) {
	var positionOfNot = negs.indexOf("not");
	var positionOfBad = negs.indexOf("bad");
	var beforeNot = negs.substring(0,positionOfNot);
	var afterBad = negs.substring(positionOfBad+3);
		if (((positionOfBad === -1) || (positionOfNot === -1)) || (positionOfNot > positionOfBad)) {
			console.log(negs);
		} else {
			console.log(beforeNot + "good" +afterBad)
		}
}

notBad("This movie is not that bad");
notBad("This movie is not bad");
notBad("This movie is bad");
notBad("I wouldn't say this movie is bad, but it's not good at all");
notBad("This movie is good")

