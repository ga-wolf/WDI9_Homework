function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return x;
		}
	else if (x < y) {
		return y; 	
		}
}

function maxOfThree(x, y, z) {
	if (x > y) && (x > z) {
		return x;
		}
	else if (y > x) && (y > z) {
		return y;
		} 
	else { 
		return z;
	}
}

function findVowel(x) {
	if x = a {
		return true;
	}
	else if x = e {
		return true;
	}
	else if x = e {
		return true;
	}
	else if x = e {
		return true;
	}
	else if x = e {
		return true;
	else {
		return false;
	}
}


function sA(1, 2, 3, 4) {
	var x = 0;
	while (sA.lentgh > 0) { 
		x += sA.pop(); 
	}
	console.log(x);
}


var mA = [1, 2, 3, 4];
 	var x = 0;
	for (var i = 0; i < mA.length; i++) {
    var	x += mA[i] * mA[(i + 1)];
	}	

console.log(x);



function reverseString(x) {
	console.log(reverse.reverseString(x));
}



var longestWord = ['could', 'kill', 'a', 'beerortwo'];
var length = x;
var y;

for (var i = 0; i < longestWord.length; i++) {
    if (longestWord[i].length > x) {
        var x = longestWord[i].length;
    }      
} 

console.log(x);



for (var i = 0; i < longestWord.length; i++) {
    if (longestWord[i].length > i) {
    	console.log(longestWord[i].length); 
    }



var wordLetters     = ['f', 'o', 'x'];
var guessedLetters  = ['_', '_', '_'];


function guessLetter(x) {
    
var goodGuess = false;
var moreToGuess = false;

for (var i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] == x) {
        guessedLetters[i] = x;
        goodGuess = true;
   	}
    if (guessedLetters[i] == '_') {
        moreToGuess = true;
    }
}
    if (goodGuess) {

        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
    }
    if (!moreToGuess) {
        console.log('YOU WON!');
    }  
	else (moreToGuess) {
        console.log('Oh noes, thats not right!');
    }
}

guessLetter('F');
guessLetter('O');
guessLetter('x');



var isLeapYear = function (x) {
	
	var leap;

	if (leap % 400 === 0) {
		retsult = true;
	}
	if (leap % 100 === 0) {
		result = false;
	}
	if (leap % 4 === 0) {
		result = true;
	}
	if result = true {
		console.log("Well done! Have a sticker");	
	}
}

var whichYear = prompt("what year?")
// alert ("this is annoying")
// console.warn("what)")

var isLeapYear = function (x) {
	if ( year % 4 ===0 && ( ! (year % 100 === 0) || (year % 400 === 0)) {
		console.log( "yep " + year + " is a leap year");
}



isLeapYear(whichYear);
isLeapYear(1996);
    