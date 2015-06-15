var Squares = {

  sumOfSquares: function(max) {
    var sum = 0;
    for (var i = 1; i <= max; i += 1) {
      sum += i * i;
    }
    return sum;
  }

  squaresOfSums: function(max) {
    var sum = 0;
    for (var i = 0; i <= max; i += 1) {
      sum += i
    }
    return sum * sum;
  }

  getDifferenceOfSquares: function (max) {
    var diff = this.squaresOfSums(max) - this.sumOfSquares(max);
    console.log(diff);
  }
}

Squares.getDifferenceOfSquares(10);