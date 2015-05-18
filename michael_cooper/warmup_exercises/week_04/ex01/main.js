var sumOfSquaresAndSquares = function(num) {
  var sumOfSquaresResult = 0;
  var squareOfSumResult = 0;
  for (var i = 1; i <= num; i++) {
    sumOfSquaresResult += (i * i);
    squareOfSumResult += i;
  }
  squareOfSumResult = squareOfSumResult * squareOfSumResult;
  return squareOfSumResult - sumOfSquaresResult;
}