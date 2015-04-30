var theWord = [];
var theGuess = [];
function setWord(word){
	theWord = word.split("");
	for(i = 0; i < theWord.length; i++){
		theGuess[i] = "_";
	}
}

// THIS IS A GUY THAT GUESSES WORDS
function wordGuessor(letter){
		var counter = 0;
	// LOOP THROUGH THIS TO CHECK IF THE LETTER MATCHES ANYTHING IN THE WORD
	for (i=0; i<theWord.length; i++){
	
		if(theWord[i] === letter){
			counter ++;
			theGuess[i] = letter; 
			console.log("YOU GUESSED THE GODDAMN LETTER");
			console.log(counter);
		}
		// IF YOU'VE REACHED THE END OF THE WORD AND THERE ARE NO MATCHES. RETURN NOPE
		else if(i === (theWord.length-1) && counter === 0){
			console.log("You guessed wrong :(");
		}
	} 
	//WINNING CONDITION
	if(theGuess.indexOf("_")<0){
		console.log("You won goddamnit.");
	}
}
//REWARD COUNTER
var reward = 0;
//DEATH COUNTER
var deathCounter = 0;

//THIS IS A WHEEL OF FORTUNE EMULATOR CHECKS HOW MUCH YOU EARN AFTER WINNING THE GAME
function wheelOfFortune(letter){
	var counter = 0;
	for (i=0; i<theWord.length; i++){
	
		if(theWord[i] === letter){
			counter ++;
			theGuess[i] = letter; 
			console.log("YOU GUESSED THE GODDAMN LETTER");
			reward = reward + Math.random()*Math.random()*counter*1000;
			console.log("Your reward is " + "$" + reward);
		}
		else if(i === (theWord.length-1) && counter === 0){
			console.log("nope");
			reward = reward - Math.random()*Math.random()*1000;
			console.log("Your reward is " + "$" + reward);
		}
	} 
	if(theGuess.indexOf("_")<0){
		console.log("You won goddamnit.");
		reward = reward + Math.random()*Math.random()*50000;
		console.log("Your reward is " + "$" + reward);
	}
}

//THIS IS A HANGMAN EMULATOR. BASICALLY THE SAME AS WORDGUESSER
function hangMan(letter){
	var counter = 0;
	if(checkIfLetterUsed(letter)!=true){
		for (i=0; i<theWord.length; i++){
			if(theWord[i] === letter){
				counter ++;
				theGuess[i] = letter; 
				console.log("YOU GUESSED THE GODDAMN LETTER");
				reward = reward + Math.random()*Math.random()*counter*1000;
				console.log("Your reward is " + "$" + reward);
			}
			else if(i === (theWord.length-1) && counter === 0){
				deathCounter++;
				console.log("nope");
				reward = reward - Math.random()*Math.random()*1000;
				console.log("Your reward is " + "$" + reward);
			}
			console.log("deathcounter:"+deathCounter);
		} 
	}

	if(theGuess.indexOf("_")<0){
		console.log("You won goddamnit.");
		reward = reward + Math.random()*Math.random()*50000;
		console.log("Your reward is " + "$" + reward);
	}

	// IF THE DEATH COUNTER IS EQUAL TO 6, YOU DEAD
	if(deathCounter === 6){
		console.log("You dead");
	}
}

// FUNCTION TO CHECK IF THE LETTER HAS BEEN USED YET 
function checkIfLetterUsed(letter){

		if(theGuess.indexOf(letter)!= -1){
			console.log("You've guessed this already");
			deathCounter++;
			return true;
		}
		else{
			return false;
		}

}
setWord("hello");
console.log(theWord);

// wheelOfFortune("l");
// wordGenerator("y");
// wordGenerator("o");
// wordGenerator("h");
// wordGenerator("e");
hangMan("l");
hangMan("l");
hangMan("l");
hangMan("y");

// console.log(theGuess);


// var theWord = []
// var theGuess = []
// var theOriginalWord;
// function theWordGen(word){
// 	theOriginalWord = word;
// 	theWord = word.split('');
// 	console.log(theWord);
// 	return theWord;
// }
// var reward = 0;
// var deathCounter = 0;
// function wordGuesser(letter){
// 	console.log("your guess is "+ letter);

// 	for (i=0; i < theWord.length; i++){
// 		var counter = 0;

// 		if(theWord[i] == letter){
// 			console.log("You guessed correctly! '" + letter +"' is in the word!");

// 			for(j=i;j<theWord.length;j++){
// 				if(theWord[j] == letter){
// 					counter++;
// 					theGuess.push(letter);
// 					theWord.splice(j,1);
// 				}
// 			}
			
// 			if(theWord.length== 0){
// 				console.log("the word has " + theOriginalWord.length + " letters "+" and the letters are "+theGuess);
// 			}
 
// 		}

// 	}
// 		if(theWord.length == 0){
// 			console.log("the word has" + theOriginalWord.length() + " of letters "+" and the letters are "+theGuess);
// 		}
// 		else{

// 			console.log("You guessed wrong motherfucker, try again.");
// 			deathCounter ++;
// 			console.log(deathCounter);

// 		}
// }

// function wheelOfFortune(){
// 	console.log("your guess is "+ letter);

// 	for (i=0; i < theWord.length; i++){
// 		var counter = 0;

// 		if(theWord[i] == letter){
// 			console.log("You guessed correctly! '" + letter +"' is in the word!");

// 			for(j=i;j<theWord.length;j++){
// 				if(theWord[j] == letter){
// 					counter++;
// 					theGuess.push(letter);
// 					theWord.splice(j,1);
// 				}
// 				reward = reward + Math.random()*Math.random()*counter*1000;
// 			}
			
// 			if(theWord.length== 0){
// 				console.log("the word has " + theOriginalWord.length + " letters "+" and the letters are "+theGuess);
// 				reward = reward + Math.random()*Math.random()*10000;
// 				console.log("Your "+ " reward $" +reward.toFixed(2));
// 			}
// 			break; 
// 		}
// 		else if(theWord.length == 0){
// 			console.log("the word has" + theOriginalWord.length() + " of letters "+" and the letters are "+theGuess);
// 			break;
// 		}
// 		else{
			
// 			console.log("You guessed wrong motherfucker, try again.");
// 			reward = reward - Math.random()*Math.random()*100;
// 			deathCounter ++;
// 			console.log(deathCounter);

// 			break;
// 		}
// 	}
// }
// function hangMan(){
// 	console.log("your guess is "+ letter);

// 	for (i=0; i < theWord.length; i++){
// 		var counter = 0;

// 		if(theWord[i] == letter){
// 			console.log("You guessed correctly! '" + letter +"' is in the word!");

// 			for(j=i;j<theWord.length;j++){
// 				if(theWord[j] == letter){
// 					counter++;
// 					theGuess.push(letter);
// 					theWord.splice(j,1);
// 				}
// 				reward = reward + Math.random()*Math.random()*counter*1000;
// 			}
			
// 			if(theWord.length== 0){
// 				console.log("the word has " + theOriginalWord.length + " letters "+" and the letters are "+theGuess);
// 				reward = reward + Math.random()*Math.random()*10000;
// 				console.log("Your "+ " reward $" +reward.toFixed(2));
// 			}
// 			break; 
// 		}
// 		else if(theWord.length == 0){
// 			console.log("the word has" + theOriginalWord.length() + " of letters "+" and the letters are "+theGuess);
// 			break;
// 		}
// 		else{
// 			for (i = 0 ; i<theGuess.length;i++){
// 				if(theGuess[i] == letter){
// 					console.log("You guessed wrong motherfucker, try again.");
// 					reward = reward - Math.random()*Math.random()*100;
// 					console.log(deathCounter);
// 				}
// 				else{
// 					console.log("You guessed wrong motherfucker, try again.");
// 					reward = reward - Math.random()*Math.random()*100;
// 					deathCounter ++;
// 					console.log(deathCounter);
// 				}
// 			}


// 			break;
// 		}
// 	}
// 	if(deathCounter == 6){
// 		console.log("you dead.");
// 	}	
// }
// theWordGen("thames");

// wordGuesser("e");

// console.log(theWord);
// console.log(theGuess);

// BONUS BONUS
// find the max of two numbers
function maxOfTwoNumbers(a,b){
	if(a > b){
		return a
	}else if(a<b){
		return b
	}else{
		var log = "both numbers are equal";
		return log;
	}

}
function maxOfThree(a,b,c){
	if(a > b && a > c){
		return a;
	}else if(b> a && b > c){
		return b;
	}else if(c > a && c > b){
		return c;
	}else{
		var log = "both numbers are equal";
		return log
	}
}

function isVowel(a){
	var vowels = "aeiou".split("");
	if(a.length == 1){
		for (i=0; i < vowels.length; i++){
			if (a == vowels[i]){
				return true;
			} else{
				return false;
			}
		}
	}
	else{
		return false;
	}
}

function sumArray(arraynum){
	var sum = 0;
	for(i = 0; i<arraynum.length; i++){
		sum = sum + arraynum[i];
	}
	return sum;
}
function multiplyArray(arraynum){
	var total = 0;
	for (i=0; i<arraynum.length;i++){
		if(i=0){
			total = total + arraynum[i];
		}
		else{
			total = total * arraynum[i];
		}
	}
	return total;
}

function reverseString(str){
	var firstStr= []
	var secondStr=[]
	firstStr  = str.split("");
	console.log(firstStr);
	for (i=firstStr.length;i>=0;i--){
		var secondStrLetter= firstStr[i];
		console.log(secondStrLetter);
		secondStr.push(secondStrLetter);
	}
	var reverseStr = secondStr.join("");
	console.log(reverseStr);

}
reverseString("Hello");
var listOfWords= ["Hello","Goodbye","HELLO GOODBYE","no", "FARETHEEWELLMEEEEPPOOOO"];
console.log(listOfWords);
function longestWord(array){
	var longestworda = array[0];
	// longestWord defaults at 0
	for(i=1;i<array.length;i++){
		// if i is greater than the previous number then i is now the longest word
		if(array[i].length > array[i-1].length){
			longestworda = array[i];
		}
	}
	//LOG THE LONGEST WORD
	console.log(longestworda);
}

longestWord(listOfWords);
console.log(listOfWords);

function filterLongWords(array, num){
	var filteredArray = [] 
	for(i=0;i<array.length;i++){
		console.log("unaccepted length:" + array[i].length);
		if(array[i].length >= num){
		console.log("accepted length:" + array[i].length);
			
			filteredArray.push(array[i]);
		}
	}
	console.log(filteredArray);
}
filterLongWords(listOfWords,6);