// The Calculator

// Part 1


	// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(number) {
	var result = number * number;
	console.log("The result of squaring the number " + number  + " is " + result);
	return result;
}

squareNumber(5);	

	// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(number) {
	var result = number / 2;
	console.log("Half of " + number + " is " + result);
	return result;
}

halfNumber(5);

	// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(num1,num2) {
	var result = num1 / num2 * 100;
	console.log(num1 + " is " + result + "% of " + num2);
	return result;
}

percentOf(6,10);

	// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function(radius) {
	var result = Math.PI * radius * radius;
	console.log("The area for a circle with a radius of " + radius + " is " + result);
}

areaOfCircle(5);

// Part 2 

	// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
		// Take half of the number and store the result.
		// Square the result of #1 and store that result.
		// Calculate the area of a circle with the result of #2 as the radius.
		// Calculate what percentage that area is of the squared result (#3).

var bigCalculator = function(number) {
	var result = number / 2;
	result = result * result;
	result = Math.PI * result * result;
	result = (result * result) / result * 100;
	console.log("Here's your number, brahhh : " + result);
}

//TO DO: Need to add something here that will round the result to max 2 decimal places

bigCalculator(5);