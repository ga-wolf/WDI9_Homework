/*
The Calculator - Part 1.
Write a function called squareNumber that will take one argument (a number), 
square that number, and return the result. It should also log a string like 
"The result of squaring the number 3 is 9."
*/
var squareNumber = function(num) {
	var square = num * num;
	var	result = 'The result of squaring the number ' + num + ' is ' + square + '.';
		console.log(result);
		return square;
}

squareNumber(2);


/*
Write a function called halfNumber that will take one argument (a number), 
divide it by 2, and return the result. It should also log a string like
 "Half of 5 is 2.5.".
*/
var halfNumber = function(num) {
	var half = num / 2;
	var	result = 'Half of ' + num + ' is ' + half;
		console.log(result);
		return half;
}

halfNumber(10);


/*
Write a function called percentOf that will take two numbers, figure 
out what percent the first number represents of the second number, 
and return the result. It should also log a string like "2 is 50% of 4."
*/
var percentOf = function(num1, num2) {
	var percent = (num1 / num2 * 100).toFixed(2);
	var	result = num1 + ' is ' + percent + '% of ' + num2;
		console.log(result);
		return percent;
}

percentOf(2, 4);


/*
Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result. It should also log a 
string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/
var areaOfCircle = function(radius) {
	var area = (Math.PI * radius * radius).toFixed(2);
	var	result = 'The area for a circle with the radius ' + radius + ' is ' + area;
		console.log(result);
		return area;
}

areaOfCircle(5);


/*
The Calculator - Part 2.
Write a function that will take one argument (a number)
and perform the following operations, using the functions you wrote earlier1:
1 - Take half of the number and store the result.
2 - Square the result of #1 and store that result.
3 - Calculate the area of a circle with the result of #2 as the radius.
4 - Calculate what percentage that area is of the squared result (#3).
*/
var calculator = function(num) {
	var half = halfNumber(num);
	var square = squareNumber(half);
	var area = areaOfCircle(square);
	var percentage = percentOf(area, square);
	return percentage;
};

console.log(calculator(20));


/*
Create a function called DrEvil. It should take a single argument,
 an amount, and return ' dollars', except it will add '(pinky)' at 
 the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

var DrEvil = function(amount) {
	amount = amount.toString();
	if(amount === '1000000') {
		return amount + ' dollars (pinky)';
	}
	return amount + ' dollars';
}

console.log(DrEvil(1000000));
console.log(DrEvil(500));


/*
Create a function called mixUp. It should take in two strings, 
and return the concatenation of the two strings (separated by a space) 
slicing out and swapping the first 2 characters of each. You can assume 
that the strings are at least 2 characters long. For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/
var mixUp = function(string1, string2){

	var string1FirstTwo = string1.slice(0, 2);
	var string2FirstTwo = string2.slice(0, 2);
	var string1MinusFirstTwo = string1.slice(2);
	var string2MinusFirstTwo = string2.slice(2);

	return string2FirstTwo + string1MinusFirstTwo + ' ' + string1FirstTwo + string2MinusFirstTwo;
}

// NOTE: I figured out another shorter way to write the mixUp function:
// var mixUp = function(string1, string2){
// 	return string2.slice(0, 2); + string1.slice(2); + ' ' + string1.slice(0, 2); + string2.slice(2);
// }

console.log(mixUp('Noodle', 'Strudel'));


/*
FixStart
Create a function called fixStart. It should take a single argument,
 a string, and return a version where all occurences of its first 
 character have been replaced with '*', except for the first character itself. 
 You can assume that the string is at least one character long. For example:
fixStart('babble'): 'ba**le'
*/

// Working/Please Ignore:
// var fixStart = function(string){
// 	var str = string;
// 	var newStr = str.replace('b', '*');
// 	return newStr;
// }
// console.log(fixStart('babble'));

// NOTE: I only got to replace the first character, I was unable to
// replace all other occurances of that character.
var fixStart = function(string){
	var firstLetter = string.slice(0, 1);
	string = string.replace(firstLetter, '*');
	return string;
}

console.log(fixStart('somelongstring'));


/*
Verbing
Create a function called verbing. It should take a single argument,
 a string. If its length is at least 3, it should add 'ing' to its end,
 unless it already ends in 'ing', in which case it should add 'ly' instead. 
 If the string length is less than 3, it should leave it unchanged. For example:
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/  
var verbing = function(string) {
	if(string.length >= 3) {
		if(string.slice(-3) === 'ing') {
			return string + 'ly';
		} else {
			return string + 'ing';
		}
	} else {
		return string;
	}
}

console.log(verbing('dingaling'));
console.log(verbing('do'));
console.log(verbing('read'));


/*
Not Bad
Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' 
substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), 
just return the original sentence.
For example:
  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
*/