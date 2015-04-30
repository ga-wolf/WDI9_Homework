//PART 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function (num) {
  var result = num * num;
  result = (result.toFixed(2))/1;
  console.log("The result of squaring the number " + num + " is " + result + ".")
  return result;
};

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
var halfNumber = function (num) {
  var result = num / 2;
  result = (result.toFixed(2))/1;
  console.log("Half of " + num + " is " + result + ".")
  return result;
};

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
var percentOf = function (num1,num2) {
  var result = num1 / num2 * 100;
  result = (result.toFixed(2))/1;
  console.log(num1 + " is " + result + "% of " + num2 + ".")
  return result;
};

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function (radius) {
  var result = 2 * radius * Math.PI;
  result = (result.toFixed(2))/1;
  console.log('The area for a circle with radius ' + radius + ' is ' + result + '.')
  return result;
};

//Part2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var calculate = function(num) {
  var halved = halfNumber(num);
  var squared = squareNumber(halved);
  var aread = areaOfCircle(squared);
  var percento = percentOf(aread,squareNumber(aread));
};

//STRINGS
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
var drEvil = function (num) {
	var result = num + ' dollars'
	if (num === 1000000) {
		result = result + ' (pinky)'
	}
	return result;
};

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
var mixUp = function (a,b) {
	var aArray = [];
  for (i=0;i<a.length;i++) {
  	aArray.push(a[i]);
  }
  	var bArray = [];
  	for (i=0;i<b.length;i++) {
  	bArray.push(b[i]);
  }
 var aArrayToSwap = aArray[0];
 aArray[0] = bArray[0];
 bArray[0] = aArrayToSwap;
  return aArray.join("") + " " + bArray.join("");
};
var mixUpSliced = function (a,b) {
	var aSlice = a.slice(0,1);
	var bSlice = b.slice(0,1);
	var aRest = a.slice(1,a.length);
	var bRest = b.slice(1,b.length);
	return bSlice + aRest + " " + aSlice + bRest;
}	

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.
var fixStart = function (str) {
	var strArray = [];
	for (i=0;i<str.length;i++) {
		strArray.push(str[i]);
	}
	var charToReplace = strArray[0];
	for (i=1;i<strArray.length;i++) {
		if (strArray[i] === charToReplace) {
			strArray[i] = '*';
		}
	}
	console.log(strArray.join(""));
};

//can't get this  to ignore first letter
var fixStartRegExp = function(str) {
	var firstLetter = str[0];
	var regExp = new RegExp(firstLetter, 'g');
	var result = str.replace( regExp, '*');
	return result;
}

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
var verbing = function (str) {
  if (str.match('ing')) {
  	str = str + 'ly';
  } else if (str.length > 3) {
  	str = str + 'ing';
  } 
  return str;
};

// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
var notBad = function(str){
	var indexOfNot = str.indexOf('not');
	var indexOfBad = str.lastIndexOf('bad') + 3;
	if (str.match('not' && 'bad') && indexOfNot < indexOfBad) {
		var sliced = str.slice(indexOfNot,indexOfBad);
		str = str.replace(sliced,'good');
	}
	return str;
};



