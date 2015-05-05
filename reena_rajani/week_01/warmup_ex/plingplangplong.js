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


var plingPlangPong = function(myno){
  
  var str = "";
  if(myno % 3 === 0){
   str +='Pling';
  }
  if(myno % 5 === 0){
      str +='Plang';
  }
  if(myno % 7 === 0 ){
      str += 'Plong';
  }

// It could be used like this also using ternary operator
  //(number %3 === 0) ? string +='Pling' : str +="";

}