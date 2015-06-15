// We need a RomanNumeral object
// We need a toRoman function
  // We need to start off with an empty string
  // We need to have all of our mappings (i.e. the arabic and roman number)
  // We need to go through each mapping

var RomanNumeral = {

  mappings: [ // We need to store this as an array so we can guarantee order
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
    var result = ""; // Start with an empty string
    for ( var i = 0; i < RomanNumeral.mappings.length; i++ ) { // Go through each of the mappings
      var mapping = RomanNumeral.mappings[i]; // Store the current mapping
      while ( number >= mapping.arabic ) { // While the number is still passed in
        result += mapping.roman; // Add to the string (the roman value)
        number -= mapping.arabic; // Reduce the number so we can escape the while loop
        console.log( result );
      }
    }
  }

}

RomanNumeral.toRoman( 4 );
