
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman 
	//without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current 
// guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they 
// found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should 
// congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that 
// your program works.

// ---------------------------------------Guess game---------------------------------------------------------------
var secretWord = "Jaaaaaav".split("");
var guessedPlacehold = " _ ";
var guessed = [];
var usedChars = [];													//global variables
var tries = 0;
var amount = 0;
var min = 50;
var max = 100;
var maxTry = 3;

for(var i = 0; i < secretWord.length; i++){								//guessed filled with place holders has
	guessed.push(guessedPlacehold);										//identical # of array items as secretword
}



function guess(a){



	var guessLetter = function(guessedL){
		
		if(secretWord.indexOf(guessedL) >=0){										
			console.log("You guessed a letter!");

			for(var i = 0; i < secretWord.length; i++){
				if(guessL === secretWord[i]){									
					guessed[i] = secretWord[i];									
																				

					if(secretWord.join() === guessed.join()){					
						console.log("You WIN!!!!!!");
						break;
					}
				
				}
			}

			console.log(guessed);

		}else{
			console.log("WRONG! Try Again!");
		}	

	} //end of guessLetter function

	guessLetter(a);

}


//-------------------------------Bonus wheel of fortune-------------------------------------------------------

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter 
// (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:

//-------------------------------Bonus wheel of fortune-------------------------------------------------------


function wheel(g){

	// var secretWord = "Jaaaaaav".split("");
	// var guessedPlacehold = " _ ";
	// var guessed = [];
	// var amount = 0;
	// var min = 50;
	// var max = 100;


	for(var i = 0; i < secretWord.length; i++){									
		guessed.push(guessedPlacehold);											
	}


	var guessLetter = function(guessL){
		
		if(secretWord.indexOf(guessL) >=0){										
			console.log("You guessed a letter!");

			for(var i = 0; i < secretWord.length; i++){
				if(guessL === secretWord[i]){									
					guessed[i] = secretWord[i];									
					amount = amount + getRandomInt();								
																				

					if(secretWord.join() === guessed.join()){					
						console.log("You WIN!!!!!! \n  you earnt $" + amount + " dollars" );
						break;
					}
				
				}
			}

			console.log(guessed);

		}else{
			amount = amount - getRandomInt();
			console.log("WRONG! Try Again!");
		}	

	}  //end of guessLetter Function

	guessLetter(g);


}

//---------------------------------------Hangman-----------------------------------------------------------------

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess 
// a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time 
// they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and 
// show a hangman on the log.

//---------------------------------------Hangman-----------------------------------------------------------------





function hangMan(a){

	// var secretWord = "Jaaaaaav".split("");
	// var guessedPlacehold = " _ ";
	// var guessed = [];
	// var usedChars = [];
	// var tries = 0;


	var guessLetter = function(guessL){

		if(tries < maxTry){
			

			if(usedChars.indexOf(guessL) < 0){
				usedChars.push(guessL);
				

				if(secretWord.indexOf(guessL) >=0){								//checks to see if letter exists
					console.log("You guessed a correct letter!");

					for(var i = 0; i < secretWord.length; i++){
						if(guessL === secretWord[i]){							//compares every letter in secretword
							guessed[i] = secretWord[i];							//to guessL if matches assigns							
																				//the same letter to the guessed array

							if(secretWord.join() === guessed.join()){			//checks if you got all the letters!
								console.log("You WIN!!!!!!");
								break;
							}
						
						}
					}

					console.log(guessed.join().replace(/,/gi, " "));

				}else{
					
					console.log("WRONG! Try Again!   " + (tries+1) + " of " + (maxTry+1) + " mistakes");
					tries++;
				}
			}


		}else{

			console.log("WRONG!   " + (tries+1) + " of " + (maxTry+1) + " mistakes");
			console.log("Game over! \n You loose! looser!");
			clearGame()													//calls function that resets variables
			

							 console.log("  _______     ");
						     console.log(" |/      |	");
						     console.log(" |      (_)	");
						     console.log(" |      \\|/	");
						     console.log(" |       |	");
						     console.log(" |      / \\	");
						     console.log(" |			");	
						 	 console.log("_|_______     ");
		}


	} //end of guessLetter function

	guessLetter(a);
}



//----------------------------------------------Bonus material-----------------------------------------------

// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use 
// the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling 
// to figure this out.


var maxOfTwoNumbers = function(x,y){
	if(x > y){
		return x;
	}else{
		return y;
	}
}

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.


var maxOfThree = function(x,y,z){
	if(x > y && x >z){
		return x;
	}else if(y>z){
		return y;
	}else{
		return z;
	}
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(5,2,3));
console.log(maxOfThree(2,6,5));


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false 
// otherwise. 


var isVowels = function(letter){
	var vowels = "a,e,i,o,u".split(',');

	for(var i = 0 ; i < vowels.length; i++){
		if(letter===vowels[i]){
			console.log("its a vowel");
			return true;
		}else{
			console.log("not a vowel");
			return false;
		}
	}
	
}



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and 
// multiplyArray([1,2,3,4]) should return 24.
// Bonus

var sumArray = function(){
	var numbers = [1,2,3,4,5,6,7];
	var sumResult = numbers[0];

	for(var i = 1; i<numbers.length; i++){
		sumResult = sumResult + numbers[i];
	}

	console.log(sumResult)
	return sumResult

}


var multiplyArray = function(){
	var numbers = [1,2,3,4,5,6,7];
	var sumResult = numbers[0];

	for(var i = 1; i<numbers.length; i++){
		sumResult = sumResult * numbers[i];
	}

	console.log(sumResult)
	return sumResult
}



// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") 
// should return the string "ratset gaj".


var reverseString = function(string){
	var stringAsArray = string.split("");
	var stringReverse = [];
	

		for(var i = (string.length -1); i >= 0 ; i--){
			stringReverse.push(stringAsArray[i]);
		}

	var re = /,/gi;   											//used to define what im looking for ','
	
	console.log(string);
																	
	console.log(stringReverse.join().replace(re, ''));			//when u join an array it adds ','
																//deletes all occurances of re which is ','
}

reverseString("Today im going to japan");


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var someArrayWords = "cat,dog,lamps,pinapple,lam,chicken,whistle".split(',');


var findLongestWord =function(wordsArr){
	var wordLengthArr = [];

	for(var i = 0; i < wordsArr.length; i++){
		wordLengthArr.push(wordsArr[i].length);
	}

	wordLengthArr.sort();													//sorts array from small to large

	console.log("Length of longest word is " + wordLengthArr.pop());		//pop last which is largest
}



findLongestWord(someArrayWords);

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words 
// that are longer than i.


var filterLongWords = function(wordsArr, j){
	var wordsResult = [];


	for(var i = 0; i < wordsArr.length; i++){
		if(wordsArr[i].length > j){
			wordsResult.push(wordsArr[i]);
		}
	}
	console.log(wordsResult);
	return wordsResult;

}



filterLongWords(someArrayWords, 3);





function clearGame(){

	guessed = [];
	usedChars = [];													
	tries = 0;
	amount = 0;

}

function getRandomInt() {
  return Math.floor(Math.random() * (max - min)) + min;
}







