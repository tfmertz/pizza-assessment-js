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

      //add an order div to append all the order details to
      var $orderDiv = $('<div class="order"></div>');
      //create title text to add to the div with the delete button
      var orderTitle = '<p>Order Name: ' + patronName + '<span title="Cancel Order" class="order__cancel-order glyphicon glyphicon-remove"></span></p>';
      //create total text to add to bottom of order div
      var orderTotal = '<p>Amount Total: $' + cost + '</p>';
      //create orderList element to append things to
      var $orderList = $('<ul class="order__order-details"></ul>');
      //append all details to the list
      $orderList.append('<li>' + 1 + ' x ' + pizza.name + '</li>')

      $orderDiv.append(orderTitle);
      $orderDiv.append($orderList);
      $orderDiv.append(orderTotal);

      $("#order-list").append($orderDiv);

      $(".order__cancel-order").last().click(function() {
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

  //when the user clicks the add pizza button
  $("#add-pizza").click(function() {
    //store a copy of the first <select> for the pizza types
    var $pizzaSelect = $(".select-pizza").first().clone();
    //add a button to remove it
    $pizzaSelect.append('<span class="delete-pizza">Remove</span>')
    //append it to our list of pizzas on the form
    $("#pizza-list").append($pizzaSelect);

    //add click listener for the deletion to it
    $(".delete-pizza").last().click(function() {
      $(this).parent().remove();
    });

  });

});
