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

function isLeapYear(year){
	if(year%4 === 0){
		if((year%100 === 0) && (year%400 !== 0)){
			console.log("false");
			return false;
		}
		else{
			console.log("true");
			return true;
		}	
	}
	else{
		console.log("false");
		return false;
	}
}


// cleaner version
function betterIsLeapYear(year){
	if(year%4 === 0 && (!(year % 100 === 0) || year % 400 ===0)){
		var log = "Yep, it's a leap year";
		return log;
	} else {
		var log = "Nope, not a leap year";
		return log;	
	}
}
// console.log(isLeapYear(1997));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(4000));

// Bonus!
// - Ask the user what number they want to test
// - Add the is Leap Year function to the number prototype...  Don't be too concerned about this.
// - Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

var whichYear = parseInt(prompt("What year?"));
betterIsLeapYear(whichYear);
console.log("What number do you want to test?");

Number.prototype.leapYear = betterIsLeapYear();

