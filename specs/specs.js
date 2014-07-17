describe("triangle", function() {
  it("should interpret three instances of the same integer as an equilateral triangle", function() {
    triangle(6,6,6).should.equal("Your triangle is... equilateral!");
  });
  it("should interpret two equivalent integers and one unequivalent as an isosceles triangle", function() {
    triangle(7,7,4).should.equal("Your triangle is... isosceles!");
  });
  it("should interpret three unequivalent integers as a scalene triangle", function() {
    triangle(7,6,5).should.equal("Your triangle is... scalene!");
  });
  it("should check to make sure the input integers form a triangle", function() {
    triangle(7,6,30000).should.equal("that's not geometrically possible, dummy. Seriously, try drawing it.");
  });
});
