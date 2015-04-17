describe("Pizza", function() {
  describe("cost", function() {
    it("should give a price of 10 if a customer orders a cheese pizza", function() {

      var pizza = Object.create(Pizza);
      pizza.init(1);

      expect(pizza.cost()).to.equal(10);
    });

    it("should give a price of 12 for a pepperoni pizza", function() {
      var pizza = Object.create(Pizza);
      pizza.init(2);

      expect(pizza.cost()).to.equal(12);
    });

    it("should give a price of 14 for a hawaiian pizza", function() {
      var pizza = Object.create(Pizza)
      pizza.init(3);

      expect(pizza.cost()).to.equal(14);
    });

    it("should give a price of 15 for a supreme pizza", function() {
      var pizza = Object.create(Pizza);
      pizza.init(4);

      expect(pizza.cost()).to.equal(15);
    });

    it("should tell the user 'We don't offer that selection! if they input an invalid value", function() {
      var pizza = Object.create(Pizza);
      pizza.init(10);

      expect(pizza.cost()).to.equal("We don't offer that selection!");
    });
  });
});
