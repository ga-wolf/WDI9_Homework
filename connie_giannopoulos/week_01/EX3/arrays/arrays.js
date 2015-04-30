/*
Define a function maxOfTwoNumbers that takes two numbers
 as arguments and returns the largest of them. Use the 
 if-then-else construct available in Javascript.
*/
var maxOfTwoNumbers = function (num1, num2){
    
    if(num1 === num2) {
        return 'Equal'
    } else if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(50,50));
console.log(maxOfTwoNumbers(4,50));



/*
Define a function maxOfThree that takes 
three numbers as arguments and returns the largest of them.
*/

var maxOfThree = function(num1, num2, num3) {
	var arr = [num1, num2, num3];
	return arr.sort(function(a, b) {
		return a - b;
	}).pop();
}


console.log(maxOfThree(7, 31312312, 1));

/*
Define a function sumArray and a function multiplyArray that sums and multiplies
 (respectively) all the numbers in an array of numbers.
  For example, sumArray([1,2,3,4]) should return 10, 
  and multiplyArray([1,2,3,4]) should return 24.
*/


var newArray = [1, 2, 3, 4, 5, 6, 7]



var sumArray = function(arr) {
	var sum = 0;
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

console.log(sumArray(newArray));



var multiplyArray = function(arr) {
	var times = 1;
	var len = arr.length;
	for(var i = 0; i < len; i++) {
		times = times * arr[i];
	}
	return times;
}

var reduced = newArray.reduce(function(p, c) {
	return p * c;
}, 1);

console.log(multiplyArray(newArray));




/*
Write a function that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

// Version 1:

// var ifVowel = function(character) {

// 	 if (character === ('a' || 'e' || 'i' || 'o' || 'u')) {
// 	 	return true;
// 	 } else {
// 	 	return false;
// 	 }
// }


// Version 2:

// var ifVowel = function(c) {
// 	if ('aeiou'.indexOf(c) !== -1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


// Version 3:

var ifVowel = function(c) {
	return ('aeiou'.indexOf(c) !== -1) ? true : false;
}

console.log(ifVowel('b'));
console.log(ifVowel('a'));
console.log(ifVowel('i'));



/*
Define a function reverseString that computes the reversal of a string.
 For example, reverseString("jag testar") should return the string "ratset gaj".
*/

var reverseString = function (str){
	return str.split('').reverse().join('');
}

console.log(reverseString('noodles'));
console.log(reverseString('cheese'));
console.log(reverseString('supercolourfragelisticespialydocious'));







