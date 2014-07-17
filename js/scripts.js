//This function takes three integers as input, evaluates them as three
//sides of a triangle, then returns the type of triangle they are--equilateral
//isosceles, or scalene
var triangle = function(a,b,c) {
  var triangleType = ""
  //this if statement checks to see if all three inputs are equal
  if (a === b && a === c) {
    triangleType = "equilateral"
  return triangleType;
  };
};
