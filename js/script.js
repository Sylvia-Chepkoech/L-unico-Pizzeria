//business user interface
function Pizza(flavor, size, crust, toppings){
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var priceSize, priceCrust, priceTopping

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
    case "glutten":
        pizzaCrust = 150;
        break;
    default:
        location.reload();
        alert("Select the pizza crust you want");   
  };

  if (pizzaSize == 'large') {
      priceTopping =pizzaTopping.length * 150;
  } else if (pizzaSize = 'medium') {
      priceTopping =pizzaTopping.length * 200;    
  } else if (pizzaSize = 'small'){
    priceTopping =pizzaTopping.length * 50;
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
  
})