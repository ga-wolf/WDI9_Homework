// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million
// for Example 
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var printResult;
var drEvil = function(amount){
	console.log("DrEvil");
	var value;
	if(amount===1000000)
		value = amount+ ' dollars (pinky)';
	else 
		value = amount+ ' dollars';

	console.log("Result of drEvil is : " + value);
	return value;
}

drEvil(1000000);
drEvil(1234);


// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'

var mixUp = function(string1, string2){
	console.log("Let's Mix Up");
	var mix2 = string1.substr(0,2)+string2.substr(2,string2.length);
	var mix1 = string2.substr(0,2)+string1.substr(2,string1.length);
	var mixResult = mix1 + ' ' + mix2;
	console.log('mix up for ' +string1 + ' & ' + string2 + ' is ' + mixResult);
	return mixResult;
}

mixUp('pink','blue');
mixUp('dog', 'dinner');


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'

var fixStart = function(stringval){
	var firstchar = stringval.charAt(0);
	var re = new RegExp(firstchar,"gi") // globally and ignores case 
	var fixStartResult = stringval.substr(1,stringval.length).replace(re,'*');
	console.log("input is " + stringval + ' result is : '+ firstchar+fixStartResult);
}

fixStart("Mummy");
fixStart('babble');


//verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
var verbing = function(stringval){
	var resultVerb;
	if(stringval.length < 3){
		resultVerb = stringval;	
	}else if(stringval.endsWith("ing")){
			resultVerb = stringval + 'ly';
		}else{
			resultVerb = stringval + 'ing';
		}
			
	console.log('After Verbing ' + stringval + ' is ' + resultVerb);
}

verbing('swim');
verbing('swimming');
verbing('go');
verbing("And");
verbing('or');


// Not Bad
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad= function(stringval){
	var result;
	if(stringval.indexOf('not')=== -1 || stringval.indexOf('bad')=== -1 ){
		result = stringval;
	} else if(stringval.indexOf('not') < stringval.indexOf('bad')){
		result =stringval.substr(0,stringval.indexOf('not')) + 'good' + stringval.substr((stringval.indexOf('bad')+3),stringval.length);
	}
	console.log("Original Message is : " + stringval + " its Result: " + result);
	return result;

}


notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
notBad("this is not that bad programming exercise");



