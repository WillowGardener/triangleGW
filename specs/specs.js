describe("triangle", function() {
  it("should interpret three instances of the same integer as an equilateral triangle", function() {
    triangle(6,6,6).should.equal("equilateral");
  });
});
