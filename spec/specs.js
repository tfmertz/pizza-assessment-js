describe("Pizza", function() {
  describe("cost", function() {
    it("should give a price of 10 if a customer orders a cheese pizza", function() {

      var pizza = Object.create(Pizza);
      pizza.init();

      expect(pizza.cost()).to.equal(10);
    });
  });
});
