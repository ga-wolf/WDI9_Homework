 
var wordToGuess = 'super'.split('');
var guessedLetters = [ ];
var rewardMoney = 1;

var guessLetter = function (letter){
	//this iterates through the Array
	for(i = 0; i < wordToGuess.length; i++){ //this iterates through the Array
		if (letter === wordToGuess[i]){		 //this checks if the players entry is equal to any of the letters in the array
			guessedLetters[i] = letter;			 //this adds the letter to the guessedLetters array(But doesnt save it?!)
			console.log('Congratulations you found ' + letter);
		}
		else{
			console.log('Try again...');
		}
	}
	if(wordToGuess.join('') === guessedLetters.join('')){
		console.log('You found the word!');
	}

	console.log('You have found...' + guessedLetters.join(''));
}

var wordFound = function (){
	if(wordToGuess.join('') === guessedLetters.join('')){
		console.log('you have won!');
	}
}

//console.log(guessLetter('t'))
console.log(guessLetter('r'))
console.log(guessLetter('s'))
console.log(guessLetter('u'))




var vowels = 'aeiou'.split('')
var isItaVowel = function(letter){
	var result;
	var vowels = 'aeiou'.split('') //splits the string into an array so the "i" variable can check it in the for loop
	for(var i = 0; i < vowels.length; i++){
		// debugger;
		if(letter === vowels[i]){ //checks the input (letter) against the array data
			result = true;
			console.log( result )
			return result;
		}
		else{
			result = false;
		}
	}
	return result;

	// return result;
}
console.log(vowels)
console.log(isItaVowel('u'))





