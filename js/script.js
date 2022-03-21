//business user interface
function Pizza(flavor, size, crust, toppings){
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var priceSize, priceCrust, priceTopping;

//calculate pizza price
var price = function(pizzaSize, pizzaCrust, pizzaTopping){
  switch (pizzaSize){
    case "":
      priceSize = 0;
      break;
    case "large":
      priceSize = 1200;
      break;
    case "medium":
      priceSize = 900;
      break;
    case "small":
      priceSize = 600;
      break;
    default:
      location.reload();
      alert("Select the pizza size you want");
  };

  switch (pizzaCrust) {
    case "":
      pizzaCrust = 0;
      break;
    case "crispy":
      pizzaCrust = 100;
      break;
    case "stuffed":
        pizzaCrust = 200;
        break;
    case "gluten":
        pizzaCrust = 150;
        break;
    default:
        location.reload();
        alert("Select the pizza crust you want");   
  };
  switch (pizzaTopping) {
    case "":
      pizzaTopping = 0;
      break;
    case "cheese":
      pizzaTopping = 100;
      break;
    case "bacon":
        pizzaTopping = 100;
        break;
    case "chicken":
        pizzaTopping = 100;
        break;
    case "mushroom":
        pizzaTopping = 100;
        break;
    case "peppers":
        pizzaTopping = 100;
        break;
    default:
        location.reload();
        // alert("Select the pizza topping you want");   
  };
 

  var pizzaTotal = priceSize + priceCrust + priceTopping;
  return pizzaTotal;
}

//user interface logic 
$(document).ready(function(){
  $("#order-now").click(function(){
    $(".content-two").show();
    $(".content-one").hide();
  })

//continue button
  $("#submit").click(function(event){
    event.preventDefault();
    $(".content-three").show();
    $(".content-two").hide();
    //get form values

    let pizzaFlavor = $("#flavor option:selected").val();
    let pizzaSize = $("#size option:selected").val();
    let pizzaCrust = $("#crust option:selected").val();
    let pizzaTopping = $("#toppings option:selected").val();
  });

  var total = price(pizzaSize, pizzaCrust, pizzaTopping);
  var grandTotal = total + 400;
  var order = new Pizza(pizzaName, pizzaSize, pizzaCrust, pizzaTopping)
  $(".current-order").append('<tr><td id="name">' + order.pizza + '</td><td id="size">' + order.size + '</td><td id="crust">' + order.crust + '</td><td id="toppings">' + '</td><td id="total">' + total);

//pickup button
$("#pick-up").click(function(){
  alert("Dear customer, your order will be ready in one hour for pickup. Your total order is:" + total);

//refresh page
  location.reload();
})

//checkout button
$("#checkout").click(function() {
  //form data
  var clientName = $("#full-name").val();
  var clientNumber = $("#phone-number").val();
  var clientLocation = $("#location").val();

  if(clientName === "" || clientNumber === "" || clientLocation === "") {
    alert("Please fill in the delivery form. ALl fields are required")
  }else {
    alert("Dear " + clientName + "your order will be delivered to " + clientLocation + "within the next hour. Your total is: " + grandTotal + "You will be called upon arrival of your pizza!");
  }
})
})

//delivery button 
$("#delivery").click(function() {
  $(".table-buttons").hide();
  $(".content-four").slideDown();
})