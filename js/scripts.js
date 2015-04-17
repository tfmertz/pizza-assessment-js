/*  Pizza Prototype
 *  Run init() with the pizza type parameters to create a pizza of a certain
 *  type. Then use the cost() method on pizza to return that type's cost.
 *  1 - Cheese, 2 - Pepperoni, 3 - Hawaiian, 4 - Supreme
 */

var Pizza = {
  init: function(type) {
    this.type = type;
  },
  cost: function() {

    switch(this.type) {
      case 1: return 10;
      break;
      case 2: return 12;
      break;
      case 3: return 14;
      break;
      case 4: return 15;
      break;
      default: return "We don't offer that selection!"
    }
  }
};

$(function() {


});
