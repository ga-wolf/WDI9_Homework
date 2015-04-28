var sanitize = function(number) {
	return number.toFixed(2);
}





var squareNumber = function(number) {
	var result = sanitize(number * number);

	console.log('The result of squaring the number ' + number + ' is ' + result);
	return result;
}

var halfNumber = function(number) {
	var result = sanitize(number / 2);

	console.log('Half of ' + number + ' is ' + result);
	return result;
}

var percentOf = function(num1, num2) {
	var result = sanitize(num1 / num2 * 100);

	console.log(num1 + ' is ' + result + '% of ' + num2);
	return result;
}

var areaOfCircle = function(radius) {
	var result = sanitize(Math.PI * squareNumber(radius));

	console.log('The area for a circle with radius ' + radius + ' is ' + result);
	return result;
}

var calculator = function(number) {
	var halfNum = halfNumber(number);
	var squareNum = squareNumber(halfNum);
	var area = areaOfCircle(squareNum);
	area / squareNum * 100;
}

var DrEvil = function(amount) {
	var pinky = false;
	if (amount === 1000000) {
		pinky = true;
	}

	var result = amount + ' dollars';
	if (pinky) {
		result += ' (pinky)';
	}

	return result;
}

var mixUp = function(str1, str2) {
	var str1Result = str2.slice(0, 2) + str1.slice(2);
	var str2Result = str1.slice(0, 2) + str2.slice(2);

	return str1Result + ' ' + str2Result;
}

var fixStart = function(string) {
	var firstLetter = string[0];
	var re = new RegExp(firstLetter, 'g');
	var result = firstLetter + string.slice(1).replace(re, '*');

	return result;
}

var verbing = function(string) {
	var length = string.length;
	var result = string;

	if (length >= 3) {
		if (string.slice(-3) === 'ing') {
			result += 'ly';
		} else {
			result += 'ing';
		}
	} 

	return result;
}

var notBad = function(string) {
	var re = new RegExp('not.*bad', '');
	var matchStart = string.search(re);

	if (matchStart < 0) {
		return string;
	}

	//Worth explaining...  
	//match will return an array as there may be multiple matches.  We are only interested in the first match in this case.
	var length = string.match(re)[0].length;

	var matchEnd = matchStart + length;
	var result = string.slice(0, matchStart) + 'good' + string.slice(matchEnd);

	return result;
}
