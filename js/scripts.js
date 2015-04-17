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

    //use a jquery each to create pizza objects for each pizza types
    var pizzaArray = [];
    var totalCost = 0;
    var validInput = true;

    $(".select-pizza").each(function() {
      //create a pizza object
      var pizza = Object.create(Pizza);
      //initialize it with the value from this current select
      var pizzaType = parseInt($(this).find(".pizza-type").val());
      pizza.init(pizzaType);
      //find how many of that pizza we want
      var pizzaNumber = parseInt($(this).find(".pizza-quantity").val());
      //add its cost to the total if it is a valid pizza
      pizzaCost = pizza.cost() * pizzaNumber;

      //check that the cost is actually a valid number
      if(!(isNaN(pizzaCost))) {

        //if so add more pizza entries to our list and increase the total cost
        pizzaArray.push('<li>' + pizzaNumber + ' x ' + pizza.name + '<span class="pizza-cost">$' + pizzaCost +'</span></li>');
        totalCost += pizzaCost;
      } else {
        //if not make a flag to show the error and skip the rest
        validInput = false;
        return false;
      }
    });

    //if we returned a valid cost number then add it to our placed orders
    if(validInput) {

      //add an order div to append all the order details to
      var $orderDiv = $('<div class="order"></div>');
      //create title text to add to the div with the delete button
      var orderTitle = '<h4>Order Name: ' + patronName + '<span title="Cancel Order" class="order__cancel-order glyphicon glyphicon-remove"></span></h4>';
      //create total text to add to bottom of order div
      var orderTotal = '<p class="amount-total">Amount Total: $' + totalCost + '</p>';
      //create orderList element to append things to
      var $orderList = $('<ul class="order__order-details"></ul>');
      //append all pizzas from our array to the list
      $.each(pizzaArray, function(index, element) {
        $orderList.append(element);
      });

      //append all our children into the order div
      $orderDiv.append(orderTitle);
      $orderDiv.append($orderList);
      $orderDiv.append(orderTotal);

      //append the order div to the list of our orders
      $("#order-list").append($orderDiv);

      //add click listener to cancel an order
      $(".order__cancel-order").last().click(function() {
        //remove the order div 2 parents up
        $(this).parent().parent().remove();
        //if there aren't any more orders in the #placed-orders div, then hide it
        if($("#order-list").children().length === 0) {
          $("#placed-orders").css("visibility", "hidden");
        }
      });

      $("#error").hide();
      $("#placed-orders").css("visibility", "visible");
    }
    else {
      $("#error").show();
    }

  }); //end submit

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
