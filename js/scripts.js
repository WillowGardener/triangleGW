//This function takes three integers as input, evaluates them as three
//sides of a triangle, then returns the type of triangle they are--equilateral
//isosceles, or scalene
var triangle = function(a,b,c) {
  var triangleType = ""
  //makes sure the integers entered form a triangle, and if they don't, insults your intelligence
    if (a > b + c || b > a + c || c > a + b) {
      triangleType = "that's not geometrically possible, dummy. Seriously, try drawing it.";
  //this if statement checks to see if all three inputs are equal
    } else if (a === b && a === c) {
      triangleType = "Your triangle is... equilateral!";
  //if the program determines that the triangle is not equilateral,
  //this else if statement checks to see if two sides are equal to each other
    } else if (a === b || a === c || b === c) {
      triangleType = "Your triangle is... isosceles!";
  //if none of the above conditions are  true, the triangle is scalene
    } else if (a !== b && a !== c && b !== c) {
      triangleType = "Your triangle is... scalene!";
  };
  return triangleType;
  };

$(document).ready(function() {
  $("form#triangle").submit(function(event){
    var a = $("input#sideA").val();
    var b = $("input#sideB").val();
    var c = $("input#sideC").val();
    var result = triangle(a,b,c);
    $("#result").text(result);

    $("#result").show();
    event.preventDefault();
  });
})
