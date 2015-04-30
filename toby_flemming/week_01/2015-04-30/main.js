/*
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

*/
var rectangle = {
  length: 4,
	width: 4
};

var isSquare = function(rec) {
	if (rec.length === rec.width) {
		return true;
	}

	return false;
}

var area = function(rec) {
	return rec.length * rec.width;
}

var perimeter = function(rec) {
	return 2 * rec.length + 2 * rec.width;
}


/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle) {
	if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
		return true;
	}

	return false;
}

var isIsosceles = function(triangle) {
	if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) {
		return true;
	} else if (triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB) {
		return true;
	} else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
		return true;
	}

	return false;
}

var area = function(triangle) {
	var p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;	//Half of perim
	var area = p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC);
	area = Math.sqrt(area);

	return area;
}

var isObtuse = function(triangle) {
	//a^2 + b^2 < c^2
	if (Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2) < Math.pow(triangle.sideC, 2)) {
		return true;
	}

	return false;
}






