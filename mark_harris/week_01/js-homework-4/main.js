// Geometry Function Lab
//***********************************************

// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(rectangle) {
	if(rectangle.length === rectangle.width) {
		return true;
	}
	else {
		return false;
	}
};


var area = function(rectangle) {
	return rectangle.length * rectangle.width;
};


var perimeter = function(rectangle) {
	return 2 * (rectangle.length + rectangle.width);
};


console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));


console.log("");
console.log("");
console.log("*****************************************");
console.log("");
console.log("");


// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 12,
  sideB: 22,
  sideC: 18
};

var isEquilateral = function(triangle) {
	if(triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideB) {
		return true;
	}
	else {
			return false;
	}
};

var isIsosceles = function(triangle) {
	if(	(triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) ||
			(triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB) ||
			(triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) ) {
		return true;
	} else {
		return false;
	}
};

var area = function(triangle) {
	var s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
	var area = Math.sqrt(s * (s-triangle.sideA) * (s-triangle.sideB) * (s-triangle.sideC));
	return area;
};

var isObtuse = function(triangle) {
	// THEORY: If a^2 + b^2 < c^2, where c is the hypotenuse then the triangle is obtuse. 
	var sides = [triangle.sideA, triangle.sideB, triangle.sideC];

	// Find the hypotenuse
	var hyp = sides[1];
	for(var i = 1; i < sides.length; i++) {
		if(sides[i] > hyp) {
			hyp = sides[i];
		}
	}

	// Remove hypotenuse from the sides array
	var index = sides.indexOf(hyp);
	sides.splice(index, 1);

	// Test for obtuse-ness
	 if(((sides[0] * sides[0]) + (sides[1] * sides[1])) < (hyp * hyp)) {
	 	return true;
	 } else {
	 	return false;
	 }
};


console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(area(triangle));
console.log(isObtuse(triangle));














