// Homework Day 4 - Part 1

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

var rectangle = { 
  length: 4,
  width: 4
};

var isSquare = function() {
  if (rectangle.length === rectangle.width) {
    console.log("Yep, that's a square");
  } else {
    console.log("Nope, that's a rectangle");
  }
}

var area = function() {
  console.log("The area of the quadrilateral is " + rectangle.length * rectangle.width + ".")
}

var perimeter = function() {
  console.log("The perimeter of the quadrilateral is " + (rectangle.width * 2) + (rectangle.length * 2) + ".")
}


isSquare();
area();
perimeter();


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



var triangle = { 
  sideA: 4,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function() {
if ((triangle.sideA === triangle.sideB) && (triangle.sideB === triangle.sideC)) {
    console.log("That's an equilateral triangle.");
  } 
}

var isIsosceles = function() {

if (((triangle.sideA === triangle.sideB) && (triangle.sideB !== triangle.sideC))  || ((triangle.sideA === triangle.sideC) && (triangle.sideA !== triangle.sideB)) || ((triangle.sideB === triangle.sideC) && (triangle.sideA !== triangle.sideC))) {
    console.log("That's an isosceles triangle.")
  }
}

var isObtuse = function() {   
  var longest = (Math.max(triangle.sideA, triangle.sideB, triangle.sideC));
  if (longest === triangle.sideA) {
    if ((Math.pow(triangle.sideB, 2) + Math.pow(triangle.sideC, 2)) < Math.pow(triangle.sideA, 2)) {
      console.log("That's an obtuse triangle.")
    }
  } else if (longest === triangle.sideB) {
    if ((Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideC, 2)) < Math.pow(triangle.sideB, 2)) {
      console.log("That's an obtuse triangle.")
    }
  } else if (longest === triangle.sideC) {
    if ((Math.pow(triangle.sideA, 2) + Math.pow(triangle.sideB, 2)) < Math.pow(triangle.sideC, 2)) {
       console.log("That's an obtuse triangle.")
    }
  }
}

var area = function() {
  var s = ((triangle.sideA + triangle.sideB + triangle.sideC) / 2);
  theArea = Math.sqrt(s * ((s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC)))
    console.log("The area of the triangle is " + theArea + ".");
}

isEquilateral(); 
isIsosceles();
isObtuse();
area();













