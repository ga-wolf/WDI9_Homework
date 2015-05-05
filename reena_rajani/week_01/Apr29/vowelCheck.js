// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowels = "aeiou".split('');
var isvowel;

var checkVowel = function(mychar){

	for(var i =0;i<vowels.length-1;i++){

		if(mychar.toLowerCase() === vowels[i]){
			
			return true;
		
		}else {
			
			return false;
		}

	}

}



function display(isvowel){
	if(isvowel === true){

		console.log(" Vowel Found " );

	} else {

		console.log(" Vowel  Not Found ");
	}

}

isvowel = checkVowel('x');
display(isvowel);
isvowel = checkVowel('A');
display(isvowel);


