// Geometry Function Lab

// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// var rectangle = {
//   length: 4,
//   width: 4
// };

console.log("Lets Go With Rectangle First .. ")

//Object Creation 
var rectangle ={
		length : 5,
		width : 6
};

// checks of the rectangle is a square if its length and breath are same 
var  isSquare = function(rectangle){
	if (rectangle.length === rectangle.width){
		return true;
	} else {
		return false;
	}
}

// returns the area of the rectangle
var area = function(rectangle){
 
 	return rectangle.length * rectangle.width;
  
}


// returns the perimeter of the rectangle.
var perimeter = function(){

	return 2*(rectangle.length + rectangle.width);

}

// function call and checks
console.log("REctangle Properties ::: "+ "length : " + rectangle.length + " \t Width : " + rectangle.width);
console.log("isSquare ?  :  " + isSquare(rectangle));
console.log("Area is :  " + area(rectangle));
console.log("Perimeter  is :  " + perimeter(rectangle));



// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };


console.log("\n \n Here comes Triangle  ")

var triangle = {
	sideA : 2,
	sideB : 3,
	sideC : 4
};


// A triangle is an Equilateral triangle if all its side are equal. 
var isEquilateral = function(triangle){

	if(triangle.sideA === triangle.sideB  &&  triangle.sideB === triangle.sideC){
		
		return true;
	
	}else {

		return false;
	}
}

// A triangle is an Isosceles triangle if any two of its side are equal. 
var isIsosceles = function(triangle){
	
	if(isEquilateral(triangle) !== true){ // ensures  all the 3 sides are not equal and only 2 sides are. 

		if(triangle.sideA ===triangle.sideB || triangle.sideA ===triangle.sideC || triangle.sideB === triangle.sideC){
		
			return true;
	
		}else {

			return false;
		}

	} else {

			return false; // default return false, since it is equilateral it cannot be an isosceles
	}
	
}

// Finds the area of the triangle using the formula 
// sqrt(S(S-a)(S-b)(S-c)) where S is the perimeter with the formula
// S = (a+b+c)/2
// a,b,c are the sides 

var triangleArea = function(triangle){
	
	var triPerimeter = (triangle.sideA +  triangle.sideB +  triangle.sideC )/ 2;

	var triArea = Math.sqrt(triPerimeter * (triPerimeter - triangle.sideA) * (triPerimeter - triangle.sideB)* (triPerimeter - triangle.sideC));

	return triArea;

}

// A triangle is an Obtuse triangle if one of its angle is greater than 90 
// the larger side is opposite to the angle > 90 
// so we use the formula  c^2 > a^2 + b^2 to check for Obtuse angle (pytha theorem+ Cosine formulae)
// we can also check using c^2 - a^2 - b^2 > 0

var isObtuse = function(triangle){

	// using temporary array to sort the sides in ascending order by calliung the array.sort()
	var tempArr =[]; 
	tempArr.push(triangle.sideA,triangle.sideB,triangle.sideC); 
	
	tempArr.sort(); // sorting the values in ascending order
	
	var side1 = parseInt(tempArr.shift());
	var side2 = parseInt(tempArr.shift());
	var side3 = parseInt(tempArr.shift());

//check for c^2 > a^2 + b^2
	if(Math.pow(side3, 2) > ( Math.pow(side1, 2) + Math.pow(side2, 2) ) ){

		return true;
	
	} else {

			return false;

	}

}


// calling the functions 
console.log('Properties of the Triangle :' + " Side A :" + triangle.sideA + 
																						 " Side B :" + triangle.sideB +
																						 " Side C :" + triangle.sideC);
console.log("Obtuse ? " + isObtuse(triangle));
console.log("Equilateral ? " + isEquilateral(triangle));
console.log("Isosceles ? " + isIsosceles(triangle));
console.log("Area is :  " + triangleArea(triangle));


