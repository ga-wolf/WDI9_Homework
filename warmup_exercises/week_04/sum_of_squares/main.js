/*

  I am going to structure this like I always do.

  We are going to have an object and within that we need a couple of functions.

  - Something that returns the sum of all the squares between 1 and a given maximum number
  - Something that returns the sum of all of the numbers between 1 and a given maximum number, squared.  
  - Something that will return the difference.

*/

var Squares = {

  sumOfSquares: function ( max ) {
    var sum = 0;
    for ( var i = 1; i <= max; i += 1 ) {
      sum += ( i * i );
    }
    return sum;
  },

  squaresOfSums: function ( max ) {
    var sum = 0;
    for ( var i = 0; i <= max; i += 1 ) {
      sum += i;
    }
    return ( sum * sum );
  },

  getDifferenceOfSquares: function ( max ) {
    var diff = this.squaresOfSums(max) - this.sumOfSquares(max);
    console.log(diff);
  }

}

Squares.getDifferenceOfSquares( -21 );