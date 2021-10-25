//Starting function on button press
$("#knap").click(udregn);

//Funtion
function udregn() {
  // Avoid multible numbers in the p tag
  $("#taxSum").html("Tax amount: ");
  $("#totalSum").html("Final amount: ");

  // Define input values
  var $loen = $("#indkomst").val();
  var $skat = $("#skatteprocent").val();

  //Defining the Math in the variables
  var $udbetalt = ($loen * (100 - $skat)) / 100;
  var $traek = $loen - $udbetalt;

  // Input Values into HTML
  $("#taxSum").html($traek.toFixed(2));
  $("#totalSum").html($udbetalt.toFixed(2));

  if ($skat > 100) {
    alert("Got any of them Danish taxrates?");
    $("#taxSum").html("Tax amount: ");
    $("#totalSum").html("Final amount: ");
    return false;
  }
}
