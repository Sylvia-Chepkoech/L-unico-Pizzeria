//business user interface
function Pizza(name, size, crust, toppings){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var priceSize, priceCrust, priceTopping;

//calculate pizza price
var price = function(pizzaSize, pizzaCrust, pizzaTopping){
  switch (pizzaSize) {
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
      priceCrust = 0;
      break;
    case "crispy":
      priceCrust = 100;
      break;
    case "stuffed":
        priceCrust = 200;
        break;
    case "gluten":
        priceCrust = 150;
        break;
    default:
        location.reload();
        alert("Select the pizza crust you want");   
  };

  if (pizzaSize == 'large') {
    priceTopping = pizzaTopping.length * 150;
  } else if (pizzaSize == 'medium') {
    priceTopping = pizzaTopping.length * 100;
  } else if (pizzaSize == 'small') {
    priceTopping = pizzaTopping.length * 50;
  }
 

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

    let pizzaName = $("#name option:selected").val();
    let pizzaSize = $("#size option:selected").val();
    let pizzaCrust = $("#crust option:selected").val();
    let pizzaTopping = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizzaTopping.push($(this).val());
    // })
  });

  var total = price(pizzaSize, pizzaCrust, pizzaTopping);
  var grandTotal = parseInt(total + 400);
  var order = new Pizza(pizzaName, pizzaSize, pizzaCrust, pizzaTopping)
  $(".current-order").append('<tr><td id="name">' + order.name + '</td><td id="size">' + order.size + '</td><td id="crust">' + order.crust + '</td><td id="toppings">' + order.toppings + '</td><td id="total">' + total);

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
    alert("Dear  " + clientName + " your order will be delivered to  " + clientLocation + " within the next hour. Your total is: " + grandTotal + "You will be called upon arrival of your pizza!");
  }
})
})

//add another pizza
$("#add").click(function(event) {
  event.preventDefault();

  //add an extra order
  $(".content-three").hide();
  $(".content-four").hide();
  $(".content-two").show();
  document.getElementById("form1").reset();
})
//delivery button 
$("#delivery").click(function() {
  $(".content-three").hide();
  $(".table-buttons").show();
  $(".content-four").show();
})
})