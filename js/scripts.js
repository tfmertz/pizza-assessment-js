/*  Pizza Prototype
 *  Run init() with the pizza type parameters to create a pizza of a certain
 *  type. Then use the cost() method on pizza to return that type's cost.
 *  1 - Cheese, 2 - Pepperoni, 3 - Hawaiian, 4 - Supreme
 */

var Pizza = {
  init: function(type) {
    this.type = type;
    this.name = "";
  },
  cost: function() {

    switch(this.type) {
      case 1:
        this.name = "Cheese";
        return 10;
      break;
      case 2:
        this.name = "Pepperoni";
        return 12;
      break;
      case 3:
        this.name = "Hawaiian";
        return 14;
      break;
      case 4:
        this.name = "Supreme";
        return 15;
      break;
      default: return "We don't offer that selection!"
    }
  }
};

$(function() {

  $("#order-pizza").submit(function(event) {
    event.preventDefault();

    //grab the values from the form
    var patronName = $("#name").val();
    var pizzaType = parseInt($("#pizza-type").val());

    //create our pizza object
    var pizza = Object.create(Pizza);
    pizza.init(pizzaType);
    var cost = pizza.cost();

    //if we returned a valid cost number then add it to our placed orders
    if(typeof(cost) === "number") {

      //add a order to the list of orders
      $("#order-list").append('<li class="order">' + patronName +': 1 x ' + pizza.name + '  Total: ' + cost + '<span class="cancel-order glyphicon glyphicon-remove"></span></li>');

      $(".cancel-order").last().click(function() {
        $(this).parent().remove();
        if($("#order-list").children().length === 0) {
          $("#placed-orders").css("visibility", "hidden");
        }
      });

      $("#error").hide();
      $("#placed-orders").css("visibility", "visible");
    }
    else
    {
      $("#error").show();
    }


  });

});
