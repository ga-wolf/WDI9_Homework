// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount) {
	if(amount >= 1000000) {
		return amount + " dollars (pinky)";
	}
	else {
		return amount + " dollars";
	}
}
console.log(DrEvil(10));
console.log(DrEvil(11000000));




// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(str1, str2) {
	return str2.substr(0,2) + str1.substr(2) + " " + str1.substr(0,2) + str2.substr(2);
}
console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));




// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'

// STRING ARRAY ITERATION
var fixStart = function(str) {
	var char1 = str.charAt(0);
	var newStr = char1;

	for(var i=1; i<str.length; i++){
		if(str.charAt(i) === char1) {
			newStr = newStr + "*";
		}
		else {
			newStr = newStr + str.charAt(i);
		}
	}
	return newStr;
}
console.log(fixStart("babble"));


//REGULAR EXPRESSION
var fixStart2 = function(str) {
	var firstChar = str.charAt(0);
	re = new RegExp(firstChar, "g");
	var newStr = firstChar + str.slice(1).replace(re, "*");

	return newStr;
}
console.log(fixStart2("babble"));




// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(str) {
	if(str.length >= 3) {
		if(str.substr(-3,3) === "ing") {
			return str + "ly";
		}
		else {
			return str + "ing";
		}
	}
	else {
		return str;
	}
}
console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));




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
	var newStr;
	if(str.indexOf("not") !== -1 && (str.indexOf("not") < str.indexOf("bad"))) {
		newStr = str.substr(0,str.indexOf("not")) + "good" + str.substr(str.indexOf("bad")+3);
	}
	else newStr = str;

	return newStr;
}
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));




