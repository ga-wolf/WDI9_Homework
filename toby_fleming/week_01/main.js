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

