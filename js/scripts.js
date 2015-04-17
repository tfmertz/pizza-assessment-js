/*  Pizza Prototype
 *  Run init() with the pizza type argument to create a pizza of a certain
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

//on document ready
$(function() {

  //when the order-pizza form is submit
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
      var $orderDiv = $('<div class="order"></div>');
      var orderTitle = '<p>Order Name: ' + patronName + ' Total: ' + cost + '<span class="cancel-order glyphicon glyphicon-remove"></span></p>';
      var $orderList = $('<ul class="order__order-details"></ul>');
      $orderList.append('<li>' + 1 + ' x ' + pizza.name + '</li>')

      $orderDiv.append(orderTitle);
      $orderDiv.append($orderList);

      $("#order-list").append($orderDiv);

      $(".cancel-order").last().click(function() {
        $(this).parent().parent().remove();
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
