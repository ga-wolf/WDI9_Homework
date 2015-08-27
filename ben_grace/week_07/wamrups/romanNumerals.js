// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

// The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

// To see this in practice, consider the example of 1990.

// In Roman numerals 1990 is MCMXC:

// 1000=M 900=CM 90=XC

// 2008 is written as MMVIII:

// 2000=MM 8=VIII

// var numerals = {
//   1:'I'
// }

// var result = []

// var convertToNumeral = function(num){
//   if( num <= 1 ){
//     result.push('I')
//   }
//   return result.toString()
// }

//Jacks Version

// We need a RomanNumeral object
// We need a toRoman function
  // We need to start off with an empty string
  // We need to have all of our mappings (i.e. the arabic and roman number)
  // We need to go through each mapping

var RomanNumeral = {

  mappings: [
    { arabic: 1000, roman: 'M'  },
    { arabic:  900, roman: 'CM' },
    { arabic:  500, roman: 'D'  },
    { arabic:  400, roman: 'CD' },
    { arabic:  100, roman: 'C'  },
    { arabic:   90, roman: 'XC' },
    { arabic:   50, roman: 'L'  },
    { arabic:   40, roman: 'XL' },
    { arabic:   10, roman: 'X'  },
    { arabic:    9, roman: 'IX' },
    { arabic:    5, roman: 'V'  },
    { arabic:    4, roman: 'IV' },
    { arabic:    1, roman: 'I'  }
  ],

  toRoman: function ( number ) {
    var result = "";
    // Go through all of the mappings
    for ( var i = 0; i < this.mappings.length; i++ ) {
      var mapping = RomanNumeral.mappings[i]
      while(number >= mapping.arabic){
        result += mapping.roman;
        number -= mapping.arabic
      }

    }
    console.log(result)
    // Store the current mapping
    // While the number is greater than or equal to 
      // Add to the result string
      // Reduce the number
  }

}




RomanNumeral.toRoman(234)



