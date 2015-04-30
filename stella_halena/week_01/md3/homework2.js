var wordGuess = [ "h", "o", "u", "n","d" ];
var missingGuess = [ "_", "_", "_", "_", "_" ];

var solveWord = function (it) { 					// the variable to call the function is solveWord // and the function is called ()													
	for ( var y = 0; y < wordGuess.length ; y++ ) {	// the y = represents the user's input, ++ to repeat the function
		if (solveWord === wordGuess[y]) {			// if matched the variable is good, [y] is found with wordGuess variable
			missingGuess[y] = it; 					// thus replacing the _ with the [y] itself which is [it]
			consel.log( it + 'is right what about the rest?');
			consel.log(missingGuess);
	} else { 
		consel.log('not quite, try again');
		consel.log(missingGuess);
		}
	}
}

solveWord("r");
solveWord("o");

var rewardAmount = 0
var 