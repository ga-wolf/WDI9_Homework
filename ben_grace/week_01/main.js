var squareNumber = function(num){
	var result = (num * num).toFixed(2);
		console.log("The result of squaring " + num + " is " + result);
		return result;
}



var halfNumber = function(num){
	var result = num / 2;
	console.log("The result of halving " + num + " is " + result);
	return result;
}

var percentOf = function(num1, num2){
	var result = ((num1 / num2) * 100).toFixed(2);
	console.log(num1 + ' is ' + result + '% of ' + num2);
	return result + '%';
}

var areaOfCircle = function(num){
	var result = (Math.PI * num * num).toFixed(2);
	console.log('The area for a circle with a radius of ' + num + ' is ' + result);
	return result;

}

// console.log(halfNumber(24));
// console.log(squareNumber(4));
// console.log(percentOf(45, 92))
// console.log(areaOfCircle(6))


var calculator = function(num){
	result1 = halfNumber(num);
	result2 = squareNumber(result1);
	result3 = areaOfCircle(result2);
	result4 = percentOf(result3,squareNumber(result3))
}

//console.log(calculator(4))


var DrEvil = function(num){
	if(num >= 1000000){
		return num + ' dollars ' + '*pinky*';
	}
	else{
		return num + ' dollars';
	}

}

//console.log(DrEvil(1000))

// Create a function called mixUp. It should take in two strings,
// and return the concatenation of the two strings(separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long

// var replaceAt = function(index, character){
// 	return this.substr(0, index) + character + this.substr(index+character.length);
// }

var mixUp = function(str1, str2){
	var firstStr1Swap = str1.slice(0,2)
	var secondStr1Swap = str1.slice(2,5)
	var firstStr2Swap = str2.slice(0,2)
	var secondStr2Swap = str2.slice(2,5)

	// var cut1 = str1.slice(0,1) //this is y
	// var cut5 = str1.slice(1,2) //this is e
	// var cut2 = str1.slice(2,3) //this is u
	// var cut3 = str2.slice(1,2) // this is s
	// var cut4 = str2.slice(0,1) // this is n
	// var cut6 = str2.slice(2,3) // this is h

	//holy shit it is so much better when you're doing the right thing and not trying
	//trying to do something which makes you butcher words...I'm leaving the above code
	//in to remind myself to read things properly. Also as a lesson on naming shit properly.
	//The fuck was I thinking...

	 return firstStr2Swap + secondStr1Swap + ' ' + firstStr1Swap + secondStr2Swap

}


console.log(mixUp('super', 'bogus'))

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character
// have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
var fixStart = function(str){
	var wordArray = str.split("")
	var firstLetter = str.charAt(0)

	for(i = 1; i < wordArray.length; i++){
		if (wordArray[i] === firstLetter){
			wordArray[i] = "*"
		}
	}
	return wordArray
}

console.log(fixStart('abcdeaaa'))

var verbing = function(str){
	if (str.length >=3 && str.lastIndexOf('ing',2)){//this is an attempt at getting it to verify whether 'ing' is the final statement in the sentence.
													//can't think of how I need to structure the conditions to get them to work. Suggestions?
		return str + 'ing' + 'ly';
	}
	else if(str.length >= 3){
		return str + 'ly';
	}
	else{
		return str;
	}
}

console.log(verbing('swinging'))



// Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged


 var notBad = function(str){
	var notIndex = str.indexOf('not');//grabs the index of 'not' within the string
	var badIndex = str.indexOf('bad');//grabs the index of 'bad' within the string

	if(notIndex < badIndex){
		return 'Angry beavers is good';
	}
	else{
		return str;
	}
}

console.log(notBad('Angry beavers is not that bad'))


