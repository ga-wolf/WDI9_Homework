var wordGuess = [ "f", "o", "x" ];
var missingAlphabet = [ "_", "_", "_" ]; 

var guessLetter = function ( letter ) {
	for (var w = 0; w < wordGuess.length; w++) { 
		if (letter === wordGuess[w]) {
			missingAlphabet[w] = letter;
			console.log('Yes! almost there! ' + letter);
			console.log( missingAlphabet );
		} else {
			console.log(' Not quite, try again');
			console.log(missingAlphabet); 
		}
	}
}

guessLetter("f");
guessLetter("o");



// guessLetter("g")
// else {
// 	console.log (' Not quite, try again')
// }



// for ( var letter = 0; letter < wordGuess.length; letter++ ) {
//     console.log( wordGuess[ letter ] ); 

// guessWord.indexOf("o")
