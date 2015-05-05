// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var array = [ 2, 4, 5 , 6, 7, 8, 10];
 var sumArray = function(array){

  var result=0;
  for (var i = 0 ; i < array.length ;  i++){
    result +=parseInt( array[i] );
  }
   return result ;
 }


  var multiplyArray = function(array){

  var result = array[0]; // setting the result to default the first element of the array 
  for (var i = 1 ; i < array.length ;  i++ ){
   
   result = result * parseInt( array[i] );
  }
   return result ;
 }


console.log( ' Sum of the elements in the array is  ' + sumArray(array) );
console.log( ' Multiplication of all the elements results ' + multiplyArray(array) );

console.log( ' Sum of the elements in the array is  ' + sumArray([1,2,3,4]) );
console.log( ' Multiplication of all the elements results ' + multiplyArray([1,2,3,4]) );
