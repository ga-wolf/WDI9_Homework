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


var isLeapYear = function ( year ) {
  // To go further
  // year divided by 4 has to have no remainder - year % 4 
  // year divided by 100 can't equal 0 - year % 100
  // unless its divisible by 400 - year % 400
  if ( year % 4 === 0 && ( !(year % 100 === 0) || year % 400 === 0 ) ) {
    console.log( "Yep, " + year + " is a leap year." )
  } else {
    console.log( "Nope, " + year + " is not a leap year." )
  }
}

isLeapYear( 1900 );
isLeapYear( 1996 );
isLeapYear( 1997 );
isLeapYear( 2000 );

// PROMPT SECTION

isLeapYear( parseInt( prompt( "What year would you like to test?" ) ) );

