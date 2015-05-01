///////////////////////////////
// Leap Year Warmup Exercise //
// 29 / 04 / 15 ///////////////
///////////////////////////////

// Write a function that will take any given year and return whether it is a leap year or not.
// Remember that a leap year is:
// - Every year that is evenly divisible by 4
// - Except if it is evenly divisible by 100...
// - Unless it is also divisible by 400 

// Test Data...
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true

// How to structure it...
// - We want a custom function called isLeapYear

// Bonus!
// - Ask the user what number they want to test
// - Add the is Leap Year function to the number prototype...  Don't be too concerned about this.
// - Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE


// var isLeapYear = function(year){
// 	if (year % 4 === 0){
// 		console.log(year + ' is a leap year! ');
// 	}
// 	else{
// 		console.log(year + ' is not a leap year!')
// 	}
// }

// console.log(isLeapYear(1996))
//prompt('Oi enter a year!')

//var 

var isLeapYear = function(year){
	if (year % 4 === 0 && ( !(year % 100 === 0) || year % 400 === 0){ //So this is checking if the year is evenly divisible by 4 AND 400.
											// If it isn't then it moves on. 
		return true;
	}
	else {
		return false
	}

console.log(isLeapYear(1900))







