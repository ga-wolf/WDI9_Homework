// # Pling Plang Plong
 
// Write a program that converts a number to a string per the following rules:
 
// If the number contains 3 as a prime factor, output 'Pling'.
// If the number contains 5 as a prime factor, output 'Plang'.
// If the number contains 7 as a prime factor, output 'Plong'.
 
// If the number does not contain 3, 5, or 7 as a prime factor, simply return the
// string representation of the number itself.
 
// E.g.
 
// The prime factors of 28 are [2, 2, 7].
 
// ```
// # => "Plong"
// ```
 
// The prime factors of 1755 are [3, 3, 3, 5, 13].
 
// ```
// # => "PlingPlang"
// ```
 
// The prime factors of 34 are [2, 17].
 
// ```
// # => "34"
// ```

////my code////

var plingPlangPlong = function (enterNumber){

	var string = ""

	// //if(enterNumber % 3 === 0 && enterNumber % 5 === 0 && enterNumber % 7 === 0 ){
	// 	return('plingplangplong')
	// }
	if(enterNumber % 3 === 0){
		string += 'pling';
	}
	if(enterNumber % 5 === 0){
		string += 'plang';
	}
	if(enterNumber % 7 === 0){
		string += 'plong';
	}
	return string
	// else if(enterNumber % 5 === 0){
	// 	return 'plang';
	// }
	// else if(enterNumber % 7 === 0){
	// 	return 'plong';
	// }
}
///////////////

//////Ternary-operator/////////////

[conditional]?[true]:[false]

[conditional] = what is in the brackets of an if statement;
[true] = what would return if the conditional is true;
[false] = what would return if the conditional is false;

(enterNumber % 3 === 0) ? string += 'Pling' : string+= string"";

(enterNumber % 5 === 0) ? string += 'Plang' : string+= string"";

(enterNumber % 7 === 0) ? string += 'Plong' : string+= string"";

///////////////////

/////////////////

// best functions have their variables running inside them

/////////////////

This...

.this refers to the variable/object that it is contained within.



////////////////










