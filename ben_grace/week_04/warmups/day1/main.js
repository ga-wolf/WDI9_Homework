// The sum of the squares of the first ten natural numbers is,

// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

// Make it so that it doesn't just work for the number 10.

// var sumOfSquaresResult = 

// sumOfSquares = function(num1, num2, num3, num4, num5, num6, num7, num8, num9 ,num10){
//   squareResult = num1*num1 + num2*num2 + num3*num3 + num4*num4 + num5*num5 + num6*num6 + num7*num7 + num8*num8 + num9*num9 + num10*num10;

//   sumResult = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;

//   squareOfSum = sumResult * sumResult

//   difference = squareOfSum - squareResult

//   console.log(squareResult)
//   console.log(sumResult)
//   console.log(squareOfSum)
//   console.log('The difference is ' + difference)
// };

// sumOfSquares = function(num){
//    for (var i = 0; i <= num; i++){
//     var result =  i * i
//     var sumOfResult = sumOfResult +=  (i * result)
//     // console.log(sumOfResult)
//     console.log(result)
//   };
// }



///Jacks Version/////

var squares = {

  sumOfSquares: function(max){
    console.log(max)
    var sum = 0;
    for (var i = 1; i <= max; i += 1) {
       sum += (i * i)
    };
    console.log(sum);
    return sum;
  }

  squareOfSums: function(max){
    var sum = 0;
    for (var i = 0; i <= max; i += 1) {
      sum += i
    };
    return(sum*sum)
  }

  getDifferenceOfSquares: function(max){
    console.log(max)
    var diff = this.squareOfSums(max) - this.sumOfSquares(max);

  };

};

Sqaures.getDifferenceOfSquares(10)

  // sumResult = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;

  // squareOfSum = sumResult * sumResult

  // difference = squareOfSum - squareResult

  // console.log(squareResult)
  // console.log(sumResult)
  // console.log(squareOfSum)
  // console.log('The difference is ' + difference)

