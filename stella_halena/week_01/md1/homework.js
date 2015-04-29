var squareNumber = function (x) {
	var sqNum= x*x;
	var number = " The result of squaring the number " + x + " is " + sqNum ; 

	console.log(number);
}; 

squareNumber(9);
squareNumber(10);


var halfNumber = function (x) {

	var halfNum = x/2;
	var number =  " Half of " + x + " is " + halfNum ;

	console.log(number)
};

halfNumber(5);
halfNumber(90);



var percentOf = function (x, y) {
	var percent = x / y * 100 ;
	var result = x + " is " + percent + " % of " + y;

	console.log(result)
};

percentOf(100, 400);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function (radius) {
	var area = Math.round( Math.PI * radius * radius, 2);
	var result = " The area for a circle with radius" + radius + " is " + area; 
	console.log(result) 
};

areaOfCircle(3);
areaOfCircle(10);


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.


var halfNumber = function (x) {

	var halfNum = x/2;
	var squareNum = halfNum * halfNum;
	var radius = squareNum; 
	var areaOfCircle = Math.round( Math.PI * radius * radius, 2);
	var percentOfsquareNum = Math.round(squareNum / areaOfCircle * 100 , 2);


	console.log('The radius is ' + radius)
	console.log('The area of the circle is ' + areaOfCircle)
	console.log('The area of the circle is ' + areaOfCircle + 
		' and the percentage of the squared result is ' + percentOfsquareNum + "%")
};

halfNumber(10);

// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).








