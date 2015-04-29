// The Calculator
//Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
var squareNumber = function(number){
	var squareResult = number * number;
	console.log('The result of squaring the number '+ number + ' is ' + squareResult);
	return squareResult;
}

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(number){
	var halfResult = number /2;
	console.log('Half of '+ number + ' is ' + halfResult);
	return halfResult;

}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1,num2){
	var percent = (num1 / num2) * 100;
	console.log( num1+ ' is ' + percent + '% of ' + num2);
	return percent;

}

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
var areaOfCircle = function(radius){
	area = Math.PI * radius * radius;
	console.log('The area for a circle with radius ' + radius + ' is ' + area.toFixed(2));
	return area;
}


//Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result. - the squared result
// Calculate the area of a circle with the result of #2 as the radius. - this is the area
// Calculate what percentage that area is of the squared result (#3).

var Calculator = function(number){
	console.log('lets perform some calculations: ');
	var halfnum = halfNumber(number);
	var squareRes = squareNumber(halfnum);
	var circleArea = areaOfCircle(squareRes);
	var percentage = percentOf(circleArea,squareRes);

}

Calculator(100);
Calculator(20);
Calculator(5);