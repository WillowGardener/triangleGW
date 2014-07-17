describe("triangle", function() {
  it("should interpret three instances of the same integer as an equilateral triangle", function() {
    triangle(6,6,6).should.equal("equilateral");
  });
  it("should interpret two of the same integer and one that is different as an isosceles triangle", function() {
    triangle(7,7,4).should.equal("isosceles");
  });
});
