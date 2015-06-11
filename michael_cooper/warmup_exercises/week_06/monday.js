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

var convertNumerals = function(num) {
    temp = num;
    result = "";
    while (temp > 0) {
        if (temp >= 1000) {
            result += "M";
            temp -= 1000;
        } else if (temp >= 900) {
            result += "CM";
            temp -= 900;
        } else if (temp >= 500) {
            result += "D";
            temp -= 500;
        } else if (temp >= 400) {
            result += "CD";
            temp -= 400;
        } else if (temp >= 100) {
            result += "C";
            temp -= 100;
        } else if (temp >= 90) {
            result += "XC";
            temp -= 90;
        } else if (temp >= 50) {
            result += "L";
            temp -= 50;
        } else if (temp >= 40) {
            result += "XL";
            temp -= 40;
        } else if (temp >= 10) {
            result += "X";
            temp -= 10;
        } else if (temp >= 9) {
            result += "IX";
            temp -= 9;
        } else if (temp >= 5) {
            result += "V";
            temp -= 5;
        } else if (temp >= 4) {
            result += "IV";
            temp -= 4;
        } else if (temp >= 1) {
            result += "I";
            temp -= 1;
        };
    };
    console.log(result);
};

function romanize(num) {
    var lookup = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        roman = '',
        i;

    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        };
    };

    return roman;
};


// Jack's solution:

// We need a RomanNumeral object
// We need a toRoman function
// We need to start off with an empty string
// We need to have all of our mappings (i.e. the arabic and roman number)
// We need to go through each mapping

var RomanNumeral = {

    mappings: [{
        arabic: 1000,
        roman: 'M'
    }, {
        arabic: 900,
        roman: 'CM'
    }, {
        arabic: 500,
        roman: 'D'
    }, {
        arabic: 400,
        roman: 'CD'
    }, {
        arabic: 100,
        roman: 'C'
    }, {
        arabic: 90,
        roman: 'XC'
    }, {
        arabic: 50,
        roman: 'L'
    }, {
        arabic: 40,
        roman: 'XL'
    }, {
        arabic: 10,
        roman: 'X'
    }, {
        arabic: 9,
        roman: 'IX'
    }, {
        arabic: 5,
        roman: 'V'
    }, {
        arabic: 4,
        roman: 'IV'
    }, {
        arabic: 1,
        roman: 'I'
    }],

    toRoman: function(number) {
        // Go through all of the mappings
        var result = "";
        for (var i = 0; i < RomanNumeral.mappings.length; i++) {
            var mapping = RomanNumeral.mappings[i];
            while (number >= mapping.arabic) {
                result += mapping.roman;
                number -= mapping.arabic;
            }
        }
        console.log(result);
        // Store the current mapping
        // While the number is greater than or equal to 
        // Add to the result string
        // Reduce the number
    }
};

RomanNumeral.toRoman(1990);
