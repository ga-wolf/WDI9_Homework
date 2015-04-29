// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(num1) {
	var result = num1 * num1;
	console.log('The result of squaring the number ' + num1 + ' is ' + result)
	return result
}

squareNumber(30);

var halfNumber = function(num1) {
	var result = num1 / 2;
	console.log('Half of ' + num1 + ' is ' + result)
	return result
}

halfNumber(30)

var percentOf = function(num1, num2) {
	var result = (num1 / num2) * 100;
	console.log(num1 + ' is ' + result + '% of ' + num2)
	return result
}

percentOf(30, 50);

var areaOfCircle = function(num1) {
	var result =  2 * Math.PI * num1;
	console.log('The area for a circle with radius ' + num1 + ' is ' + result)
	return result
}

areaOfCircle(2);
// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
console.log(' ') //empty console.logs for readability in console

var calculator = function(a) {	
	result = halfNumber(a)
	squareNumber(result)
	result2 = areaOfCircle(result)
	percentOf(result2, result)
	console.log(result2)
}

calculator(20)

console.log(' ') //empty console.logs for readability in console

var DrEvil = function(amount) {
	if (amount === 1000000) {
		console.log(amount + ' dollars (pinky)')
	} else {
		console.log(amount + 'dollars')
	}
}

DrEvil(19);
DrEvil(1000000);

console.log(' ')

var mixUp = function(a, b) {
	var str1 = a.slice(0, 2);
	var str2 = a.slice(2);
	var str3 = b.slice(0, 2);
	var str4 = b.slice(2);
	var result = str3 + str2 + ' ' + str1 + str4
	console.log(result);
}

mixUp('middle', 'man')
mixUp('sweat', 'shirt')
mixUp('web', 'design')

console.log(' ')

var fixStart = function(word) {
	var firstLetter = word.slice(0, 1);
	var completeStr = word.slice(1);
	var re = new RegExp(firstLetter, 'g'); // all magic
	var str = word
	var newstr = completeStr.replace(firstLetter, '*');
	console.log(firstLetter + newstr)

}

fixStart('throttle');
fixStart('cyclical')
fixStart('avalanche')

console.log(' ')

var verbing = function(word) {

	var lastThree = word.slice(-3)
	if (word.length < 3) {
		console.log(word)
	} else {
		if (lastThree === 'ing') {
			var replaced = new RegExp(lastThree, 'g');
			var newstr = word.replace(replaced, 'ingly')
			console.log(newstr)
		} else {
			console.log(word + 'ing')
		}
	}
}

verbing('laugh')
verbing('sparing')
verbing('go')

console.log(' ')

var notBad = function(thing) {
	var notIndex = thing.indexOf('not');          
	var badIndex = thing.indexOf('bad');  
	if (badIndex === -1 || notIndex === -1) {
	    console.log(thing);
	} else if (badIndex > notIndex) {
    	var str = thing;
    	var replaceIndex1 = notIndex;
    	var replaceIndex2 = badIndex + 3;
        var replaceArea = str.substring(replaceIndex1, replaceIndex2) 		  
        var newstr = str.replace(replaceArea, 'good')
    	console.log(newstr);
	} else {
	    console.log(thing);
	}
}

notBad('This movie is not so bad at making me cry')
notBad('Drama movies are bad at making me cry')
notBad('Food does not make me sad')
notBad('Dinner is not that bad')

