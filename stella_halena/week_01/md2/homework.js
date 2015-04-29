// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function (x) {

if (100000 >= x) {
	console.log(x + '$ dollars')
	}

else if (x >= 1000000 ) {
	console.log(x + '$ pinky dollars')
	}

}

drEvil(1000000);
drEvil(135);
drEvil(60);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
// 	mixUp('mix', pod'): 'pox mid'
//  mixUp('dog', 'dinner'): 'dig donner'


var mix = function mixUp (x, b) {

	var str1Begin = x.slice(2, 1);
	var str2Begin = b.slice(2, 1);
	
	var str1End = x.slice(2);
	var str2End = b.slice(1); 
	var result = str1Begin + str1End + str2Begin + str2End; 

		console.log(result); 

}; 

mix('the rider' , 'horse pooping');
mix('amazing', 'cat')



  






















