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


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

