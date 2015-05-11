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
//parseInt(string, radix);


var result ;
var isLeapYear = function(year){
	
	var intYear = parseInt(year,10);
	if(intYear%4 === 0  && (intYear%100 !== 0 || intYear%400 === 0)){
		return true;
	}
	else{
		return false;
	}
}

result = isLeapYear('1997');
console.log(result);

result = isLeapYear(1996);
console.log(result);
result = isLeapYear(1900);
console.log(result);
result = isLeapYear(2000);
console.log(result);


var inputYear = prompt(" Enter a Year to check : ");
// or inputYear = parseInt(prompt(",....")) // converts to a no 
result = isLeapYear(inputYear);
console.log(result);

