//Starting function on button press
document.getElementById("knap").addEventListener("click", udregn);

//Funtion
function udregn() {
  // Avoid multible numbers in the p tag
  document.getElementById("taxSum").innerHTML = "Tax amount: ";
  document.getElementById("totalSum").innerHTML = "Final amount: ";

  // Define input values
  const loen = document.getElementById("indkomst").value;
  const skat = document.getElementById("skatteprocent").value;

  //Defining the Math in the variables
  let udbetalt = (loen * (100 - skat)) / 100;
  let traek = loen - udbetalt;

  // Input Values into HTML
  document.getElementById("taxSum").innerHTML += traek.toFixed(2);
  document.getElementById("totalSum").innerHTML += udbetalt.toFixed(2);

  let x = document.forms["flemming"]["procent"].value;
  if (x > 100) {
    alert("Got any of them Danish taxrates?");
    document.getElementById("taxSum").innerHTML = "Tax amount: ";
    document.getElementById("totalSum").innerHTML = "Final amount: ";
    return false;
  }
}
