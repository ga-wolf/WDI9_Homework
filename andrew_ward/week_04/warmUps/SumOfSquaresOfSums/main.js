// Warmup - 18th of May

// The sum of the squares of the first ten natural numbers is,

// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

// Make it so that it doesn't just work for the number 10.

var squares = {

  sumOfSquares: function (amount) {
    var sum = 0;
    for (var i = 0; i <= amount; i += 1) {
      sum = sum + (i * i);
    }
    console.log('Sum of squares: ' + sum);
    return sum;
  },

  squareOfSums: function (amount) {
    var sum = 0;
    for (var i = 0; i <= amount; i +=1) {
      sum = sum + i;
    }
    console.log('Square of sums: ' + (sum * sum));
    return sum * sum;
  },

  difference: function (amount) {
    var total = this.squareOfSums(amount) - this.sumOfSquares(amount);
    console.log('Difference between square of sums and sum of squares is ' + total);
    return total;
  }

}