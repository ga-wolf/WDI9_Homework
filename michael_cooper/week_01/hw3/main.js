// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not

var isSquare = function(rect) {
  if (rect.length === rect.width) {
    return true;
  } else {
    return false;
  }
};

// area - Returns the area of the rectangle

var areaSq = function(rect) {
  return rect.length * rect.width;
}

// perimeter - Returns the perimeter of the rectangle

var perimeter = function(rect) {
  return 2 * (rect.length + rect.width);
}

var rectangle = {
  length: 4,
  width: 4
};

// Part 2, Triangle

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

var isEquilateral = function(tri) {
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return true;
  } else {
    return false;
  }
};

// isIsosceles - Returns whether the triangle is isosceles or not

var isEquilateral = function(tri) {
  if (tri.sideA === tri.sideB || 
    tri.sideB === tri.sideC || 
    tri.sideC === tri.sideA) {
    return true;
  } else {
    return false;
  }
};

// area - Returns the area of the Triangle

var areaTri = function(tri) {
  var halfPer = (tri.sideA + tri.sideB + tri.sideC) / 2;
  var area1 = Math.sqrt(halfPer * 
    (halfPer - tri.sideA) *
    (halfPer - tri.sideB) *
    (halfPer - tri.sideC)
    );
  return area1;
};

// isObtuse - Returns whether the triangle is obtuse or not




