//This function takes three integers as input, evaluates them as three
//sides of a triangle, then returns the type of triangle they are--equilateral
//isosceles, or scalene
var triangle = function(a,b,c) {
  var triangleType = ""
  //this if statement checks to see if all three inputs are equal
  if (a === b && a === c) {
    triangleType = "equilateral";
  //if the program determines that the triangle is not equilateral,
  //this else if statement checks to see if two sides are equal to each other
  } else if (a === b || a === c || b === c) {
    triangleType = "isosceles";
  };
  return triangleType;
  };
