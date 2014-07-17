describe("triangle", function() {
  it("should interpret three instances of the same integer as an equilateral triangle", function() {
    triangle(6,6,6).should.equal("equilateral");
  });
  it("should interpret two equivalent integers and one unequivalent as an isosceles triangle", function() {
    triangle(7,7,4).should.equal("isosceles");
  });
  it("should interpret three unequivalent integers as a scalene triangle", function() {
    triangle(7,6,5).should.equal("scalene");
  });
});
