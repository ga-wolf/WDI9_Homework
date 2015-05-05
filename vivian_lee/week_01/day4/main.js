// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:



// isSquare - Returns whether the rectangle is a square or not

var rectangle = {
  length: 9,
  width: 6
};



var iSquare = function (rectangle) {
		if(rectangle.length === rectangle.width ) {
			return "This is a square" ; 
		} else {
			return " This is a rectangle "
	};
}

console.log(iSquare(rectangle))


// area - Returns the area of the rectangle

var area = function (rectangle) {
		return( "Area of the rectangle is " + rectangle.length  * rectangle.width ) ;
	} 

console.log(area(rectangle))

// perimeter - Returns the perimeter of the rectangle

var perimeter = function (rectangle) {
		return( "perimeter of the rectangle is " + 2 * (rectangle.length + rectangle.width )) ;
	}


console.log(perimeter(rectangle))


// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
  sideA: 10,
  sideB: 20,
  sideC: 21
};

var testtriangle = {
  sideA: 7,
  sideB: 5,
  sideC: 10.77
};

var isEquilateral = function (triangle) {
 	if(triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
 		return "This triangle is equilateral"; 
 	} else {
		return "This triangle is not equilateral";  
    }
   }

console.log(isEquilateral(triangle)) 



// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function (triangle) {
 	if(triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC ||  triangle.sideA === triangle.sideC) {
 		return "This triangle isIsosceles"; 
 	} else {
		return "This triangle is not isIsosceles";  
    }
   }


console.log(isIsosceles(triangle)) 

// area - Returns the area of the Triangle




	var triArea = function(triangle) {




 	var s = ((triangle.sideA + triangle.sideB + triangle.sideC)/ 2 ); 



return Math.sqrt((s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC)) 

}

console.log(triArea(triangle)) 


// isObtuse - Returns whether the triangle is obtuse or not


var isObtuse = function (triangle) {
	var A = Math.acos( triangle.sideB * 2 + triangle.sideC * 2 - triangle.sideA * 2 ) / 2 * triangle.sideB * triangle.sideC

	var B = Math.acos( triangle.sideC * 2 + triangle.sideA * 2 - triangle.sideB * 2 ) / 2 * triangle.sideC * triangle.sideA 

	var C = 180 - A - B 

		if (A > 90 || B > 90 || C > 90){ 
			return "The triangle is obtuse"
		} else { 
			return "The triangle is not obtuse"}

}

console.log(isObtuse(triangle)) 
console.log(isObtuse(testtriangle)) 

// ie A B or C angles is more than 90 degrees 
// cos A = (b2 + c2 − a2) / 2bc
// cos B = (c2 + a2 − b2)/2ca
// 180 - A - B =  C 


