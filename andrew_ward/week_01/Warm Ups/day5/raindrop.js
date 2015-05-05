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

var plingPlangPlong = function (num) {
  var stringToPrint = '';
  if (num % 3 === 0) {
  stringToPrint += 'Pling';
}
if (num % 5 === 0) {
  stringToPrint += 'Plang';
}
if (num % 7 === 0) {
  stringToPrint += 'Plong';
}
  return stringToPrint;
};

var ternaryVersion = function (num) {
  var string = '';
  (num % 3 === 0) ? string += 'Pling' : string += '';
  (num % 5 === 0) ? string += 'Plang' : string += '';
  (num % 7 === 0) ? string += 'Plong' : string += '';
  return string;
 };








