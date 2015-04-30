console.log("----------------------Part 1----------------------------------");
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, 
//and return the result. It should also log a string like "The result of squaring the number 3 is 9."


var squareNumber = function(a){
	var numSquare = Math.pow(a, 2);					//pow takes input, power of 2
	console.log("The result of squaring the number " + a + " is " + numSquare);


	return numSquare;
}



// Write a function called halfNumber that will take one argument (a number), divide it by 2, 
//and return the result. It should also log a string like "Half of 5 is 2.5.".


var halfNumber = function(a){
	var numDivide = a / 2;

	console.log("Half of " + a + " is " + numDivide);

	return numDivide;
}


// Write a function called percentOf that will take two numbers, figure out what percent the first number 
//represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


var percentOf = function(a,b){
	var numPercent = Math.round((a/b) * 100);

	console.log(a + " is "+ numPercent+ "% of " + b);

	return numPercent;
}



// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, 
// and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function(a){
	var area = Math.PI * Math.pow(a, 2);
	var areaRounded = area.toFixed(2);				//2 decimal places

	console.log("The area for the circle with radius " + a + " is " + areaRounded);

	return areaRounded;

}


// Part 2

// Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var somethingCool = function(a){

	var halfed = halfNumber(a);
	var squared = squareNumber(halfed);
	var area = areaOfCircle(squared);
	var percentOfNum = percentOf(area, squared);

}

somethingCool(10);







//-----------------JSHW2 Strings------------------

console.log("");
console.log("");
console.log("----------------------DrEvil----------------------------------");
console.log("");


// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', 
// except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(a){
	if(a===1000000){
		console.log(a + " dollars (pinky)");
	}
	else{
		console.log(a + " dollars");
	}
}

DrEvil(100);
DrEvil(1000000);


console.log("");
console.log("----------------------MixUp-----------------------------------");
console.log("");
// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two 
// strings (separated by a space) slicing out and swapping the first 2 characters of each. 
// You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// 'cat'.charAt(1); // returns "a"

var mixUp = function(a, b){
	var first2CharsA = a.slice(0, 2);		// takes the first 2 letters place into variable
	var wordACut =  a.slice(2);				// deletes the first 2 letters of the string

	var first2CharsB = b.slice(0, 2);
	var wordBCut =  b.slice(2);

	console.log(a + ", " + b + " : " + first2CharsB + wordACut + " " + first2CharsA + wordBCut);
}

mixUp("people", "toobat");



console.log("");
console.log("----------------------FixStart--------------------------------");
console.log("");
// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where 
// all occurences of its first character have been replaced with '*', except for the first character itself. 
// You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

var fixStart = function(a){
	
	var wordAsArray = a.split("");				// changes string to an array  split at each letter using ("")
	var firstLetter = wordAsArray[0];			// stores the first letter of array into variable
	var stringLength = wordAsArray.length;
	var modifiedWord = firstLetter;				// stores the first letter in variable used for cat to make new word

	for(var i = 1; i<= (stringLength-1); i++){		//looks at first letter of array then compares to each letter
		if(firstLetter === wordAsArray[i]){			// in array and changes to "*" if matches
			wordAsArray[i] = "*";
		}
	}

	for(var i = 1; i<= (stringLength-1); i++){					// constructing the new string starting at 1
		modifiedWord = modifiedWord.concat(wordAsArray[i]);		// moddifiedWord already has the letter from index0
	}

	console.log(a + " : " + modifiedWord);
		

}

fixStart("sleesseels");


console.log("");
console.log("----------------------Verbing---------------------------------");
console.log("");
// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, 
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
// If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(a){

	var wordAsArray = a.split("");     		//changes string to an array ("") split at each letter
	var wordLength = a.length;
	var ending = a.slice(-3);				//takes out the last 3 letters from the string a place in variable
	var addVerbing;

	if(wordLength >= 3){
		if(ending === "ing"){
			addVerbing = a.concat("ly");
			
		}
		else{
			addVerbing = a.concat("ing");
		}
	}
	else{
		addVerbing = a;
	}

	console.log("Your word " + a + " is now " + addVerbing);

}

verbing("Going");




console.log("");
console.log("----------------------notBad----------------------------------");
console.log("");
// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and 
// return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function(a){
	var stringToArray = a.split(" ");			//split at white space (" ")
	var stringLength = stringToArray.length;
	var notPos = stringLength;					//default at string length
	var badPos = stringLength;					
	var stringChanged = a;						//defaulted to the input string

	var arrayToString = stringToArray[0];   	//needs a value to use concat so used first word


	for(var i = 0; i <= stringLength; i++){		//look for first occurance of "not" or "bad"
		if(stringToArray[i]==="not"){			//when found breaks out of loop
			notPos = i;							
			i = stringLength + 1;
		}
		else if(stringToArray[i]==="bad"){
			badPos = i;
			i = stringLength + 1;
		}
	}																	

	if(notPos < badPos){												//if "not" comes before "bad"
		stringToArray.splice(notPos, (stringLength-notPos),"good");		//splice out "not" along with everythig after it
																		//then add good where "not" was
			for(var i = 1; i<= (stringToArray.length -1); i++){
				arrayToString = arrayToString.concat(" " + stringToArray[i]);	//convert array to string using concat
			}

		stringChanged = arrayToString;									// stringChanged now assigned to the "good"
	}																	// string


	
	

	console.log(a + " : " + stringChanged);

}

notBad("Today was the day which was not so bad");
notBad("Today was the day bad so not so bad 2222222");










