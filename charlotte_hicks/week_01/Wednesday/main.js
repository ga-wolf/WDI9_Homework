//INSTRUCTIONS



//TASK 1



// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.



//GOOD COPY


// var word = ""; //change this to whatever you want in the console
// word.split("");
// var guessedLetters = [];

// var guessLetter = function(guess){
// 	guess = guess.toUpperCase();
// 	var guessIndex = word.indexOf(guess);
	
// 	 	if (guessIndex > -1 && guessedLetters.length < (word.length - 1)) { //Checks if they've guessed the correct letter but haven't 																	   //yet completed the word
//  				guessedLetters.push(guess);//Adds the correct guess to the guessedLetters variable
//  				console.log("You guessed a letter! Now see if you can guess the next one");

//  		}else if (guessIndex > -1) { //checks that they have guessed the right letter but assumed that if they have then they must 									//have completed the word
//  				console.log("Congratulations! You guessed the word!") //Appears when the have successfully completed the word
//  			}
//    	 	else { 
//  				console.log("Sorry, that letter is not in the word. Try again!"); //Appears when their guess was not correct
//  		}


// }


//LONGER VERSION

	 	// if (guessIndex > -1) { //Check if they've guessed the correct letter
 		// guessedLetters.push(guess)//Adds the correct guess to the guessedLetters variable

 		// 	if (guessedLetters.length < word.length) { //See if they've still got letters to guess
 		// 		console.log("You guessed a letter! Now see if you can guess the next one"); //Appears if they guessed correctly this round, but they still
 		// 	}													//have more letters to go
 		// 	else {
 		// 		console.log("Congratulations! You guessed the word!") //Appears when the have successfully completed the word
 		// 	}
   // 	 	} else { 
 		// 	console.log("Sorry, that letter is not in the word. Try again!"); //Appears when their guess was not correct
 		// }






//TASK 2



// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.



// var word = ""; //change this to whatever you want in the console
// word.split("");
// var guessedLetters = [];
// var reward = 0;


// var guessLetter = function(guess){
// 	guess = guess.toUpperCase();
// 	var guessIndex = word.indexOf(guess);
	
// 	 	if (guessIndex > -1 && guessedLetters.length < (word.length - 1)) { //Checks if they've guessed the correct letter but haven't 																	   //yet completed the word
//  				guessedLetters.push(guess);//Adds the correct guess to the guessedLetters variable
//  				reward = reward + Math.floor(Math.random() * 10) + 1;
//  				console.log("You guessed a letter! Your score now equals " + reward);

//  		} 

//  		else if (guessIndex > -1) { //checks that they have guessed the right letter but assumed that if they have then they must 									//have completed the word
//  			 	reward = reward + Math.floor(Math.random() * 10) + 1;
// 				console.log("Congratulations! You guessed the word! Your total score is " + reward) //Appears when the have successfully completed the word
//  		} 

//  		else { 
//  				reward = reward - Math.floor(Math.random() * 10) + 1;
//  				console.log("Sorry, that letter is not in the word. Try again! " + reward); //Appears when their guess was not correct
//  		}


// }






//TASK 3



// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.



//NOTES

//make var of right guesses and var of wrong guesses
//make 
// tryto use set to add each guess. could push every guess into a separate variable and then put that into the set variable 



// var word = ""; //change this to whatever you want in the console
// word.split("");
// var guessedLetters = [];

// var guessLetter = function(guess){
// 	guess = guess.toUpperCase();
// 	var guessIndex = word.indexOf(guess);
	
// 	 	if (guessIndex > -1 && guessedLetters.length < (word.length - 1)) { //Checks if they've guessed the correct letter but haven't 																	   //yet completed the word
//  				guessedLetters.push(guess);//Adds the correct guess to the guessedLetters variable
//  				console.log("You guessed a letter! Now see if you can guess the next one");

//  		}else if (guessIndex > -1) { //checks that they have guessed the right letter but assumed that if they have then they must 									//have completed the word
//  				console.log("Congratulations! You guessed the word!") //Appears when the have successfully completed the word
//  			}
//    	 	else { 
//  				console.log("Sorry, that letter is not in the word. Try again!"); //Appears when their guess was not correct
//  		}


// }























