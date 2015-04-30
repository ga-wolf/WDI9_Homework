/*
Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

var rectangle = {
  len: 4,
  wid: 7
};

var square = {
    len: 5,
    wid: 5
};



// Square the values.

var isSquare = function(rect) { 
  return rect.len === rect.wid ? 'is a square' : 'is not a square';
}

console.log(isSquare(rectangle));
console.log(isSquare(square));


// Find the area. 

var area = function(rect) {
  return rect.len * rect.len;
}

console.log(area(rectangle));



// Find the perimeter.

var perimeter = function(rect) {
  return  2 * (rect.len + rect.len);
}

console.log(perimeter(rectangle));



/*
Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not

isIsosceles - Returns whether the triangle is isosceles or not

area - Returns the area of the Triangle

isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

*/


var triangle = {
  sA: 4,
  sB: 4,
  sC: 4
};

var tacoTriangle = {
  sA: 5,
  sB: 7,
  sC: 4
};



// Is triangle equilateral?

var isEquilateral = function(tri) {
  return (tri.sA === tri.sB) && (tri.sB === tri.sC) ? 'triangle is equilateral' : 'triangle is not equilateral';
}

console.log(isEquilateral(triangle));
console.log(isEquilateral(tacoTriangle));




// Is triangle isosceles?

var isIsosceles = function(tri) {
  return (tri.sA === tri.sB) && (tri.sB != tri.sC) ? 'triangle is isosceles' : 'triangle is not isosceles';
} 


console.log(isIsosceles(triangle));
console.log(isIsosceles(tacoTriangle));



// Find triangle area. Used Heron's formula.

var area = function(tri) {

  var s = (tri.sA + tri.sB + tri.sC) / 2;
   // console.log(s);
  return Math.sqrt(s * ((s - tri.sA) * (s - tri.sB) * (s - tri.sC)));

}

console.log(area(triangle));
console.log(area(tacoTriangle));




