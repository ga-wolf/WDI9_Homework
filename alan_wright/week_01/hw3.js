// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 7
};

var isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width ) {
    return true;
  } else {
    return false;
  }
} 

var area = function (rectangle) {
  return rectangle.length * rectangle.width
}

var perimeter = function (rectangle) {
  return (rectangle.length * 2) + (rectangle.width * 2)
}

// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 3
};

var isEquilateral = function (triangle) {
  if(triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return 'Is an equilateral triangle.'
  } else {
    return 'Pysch!';
  }
}
console.log(isEquilateral(triangle));

var isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA !==triangle.sideC) {
    return 'Is an isosceles t1';
  } else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA){
    return 'Is an isosceles t2';
  } else if (triangle.sideA === triangle.sideC && triangle.sideC !== triangle.sideB){
    return 'Is an isosceles t3';
  }
}
console.log(isIsosceles(triangle));






