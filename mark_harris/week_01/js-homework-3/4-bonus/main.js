
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.

var maxOfTwoNumbers = function(num1, num2) {
	if(num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};

console.log(maxOfTwoNumbers(4, 50));


console.log("");
console.log("*******************************************************");
console.log("");


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(num1, num2, num3) {
	if(num1 > num2) {
		if(num1 > num3) {
			return num1;
		} else {
			return num3;
		}
	} else {
		if(num2 > num3) {
			return num2;
		} else {
			return num3;
		}
	}
};

console.log(maxOfThree(4, 50, 35));


console.log("");
console.log("*******************************************************");
console.log("");


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowel = function (str) {
	var vowels = ["a", "e", "i", "o", "u"];
	
	if(vowels.indexOf(str.toLowerCase()) === -1) {
		return false;
	} else {
		return true;
	}
};

console.log(vowel("e"));


console.log("");
console.log("*******************************************************");
console.log("");


//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function(array) {
	var total = 0;
	for(var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
};

var multiplyArray = function(array) {
	var total = 1;
	var value;
	while(value = array.shift()) {
		total *= value;
	}
	return total;
};

console.log(sumArray([1,2,3,4]));
console.log("");
console.log(multiplyArray([1,2,3,4]));


console.log("");
console.log("*******************************************************");
console.log("");


// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(str) {
	str = str.split("");
	var newStr = [];
	var letter
	while(letter = str.pop()) {
		newStr.push(letter);
	}
	return(newStr.join(""));
};

console.log(reverseString("jag testar"));


console.log("");
console.log("*******************************************************");
console.log("");


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function(array) {
	var largestWord = 0;
	for(var i = 0; i < array.length; i++) {
		if(array[i].length > largestWord) {
			largestWord = array[i].length;
		}
	}
	return largestWord;
};

console.log(findLongestWord(['Write','a','function','findLongestWord','that','takes','an','array','of','words','and','returns','the','length','of','the','longest','one']));


console.log("");
console.log("*******************************************************");
console.log("");


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function(array, maxLength) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		if(array[i].length > maxLength) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};

console.log(filterLongWords(['Write','a','function','filterLongWords','that','takes','an','array','of','words','and','an','number','i','and','returns','the','array','of','words','that','are','longer','than','i'], 5));































