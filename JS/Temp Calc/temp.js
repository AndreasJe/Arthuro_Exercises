//Starting function on button press
document.getElementById("knap").addEventListener("click", udregn);

//Function variables
function udregn() {
  document.getElementById("udregning").innerHTML = "";
  let fra = document.getElementById("temp1").value;
  let til = document.getElementById("temp2").value;
  let patient = document.getElementById("tal").value;

  //If statement for Celsius conversion
  if (fra == "c" && til == "f") {
    var CtF = patient * (9 / 5) + 32;
    console.log("Celsius to Farhenheit");
    document.getElementById("udregning").innerHTML +=
      patient + " C til " + CtF.toFixed(2) + " F";
  } else if (fra == "c" && til == "k") {
    var CtK = patient + 273.15;
    //ERROR in line above: Celsius to Kelvin will just add the two numbers together without the calculation.
    //Seems to be the only one doing it
    console.log("Celsius to Kelvin");
    document.getElementById("udregning").innerHTML +=
      patient + " C til " + CtK.toFixed(2) + " K";
  } else if (fra == "c" && til == "c") {
    document.getElementById("udregning").innerHTML +=
      patient + " C til " + patient + " C";
    alert("Not possible (Celsius to celsius)");
  }

  //If statement for Fahrenheit conversion
  if (fra == "f" && til == "c") {
    FtC = (patient - 32) * 0.5556;
    document.getElementById("udregning").innerHTML +=
      patient + " F til " + FtC.toFixed(2) + " C";
  } else if (fra == "f" && til == "k") {
    FtK = (patient + 459.67) * (5 / 9);
    //ERROR in line above: Wrong calculation for some reason
    document.getElementById("udregning").innerHTML +=
      patient + " F til " + FtK.toFixed(2) + " K";
  } else if (fra == "f" && til == "f") {
    alert("Not possible");
    document.getElementById("udregning").innerHTML +=
      patient + " F til " + patient + " F";
  }

  //If statement for Kelvin conversion
  if (fra == "k" && til == "f") {
    var KtF = (patient - 273.15) * (5 / 9) + 32;
    //ERROR in line above: Wrong calculation for some reason
    document.getElementById("udregning").innerHTML +=
      patient + " K til " + KtF.toFixed(2) + " F";
  } else if (fra == "k" && til == "c") {
    var KtC = patient - 273.15;
    document.getElementById("udregning").innerHTML +=
      patient + " K til " + KtC.toFixed(2) + " C";
  } else if (fra == "k" && til == "k") {
    alert("Not possible");
    document.getElementById("udregning").innerHTML +=
      patient + " K til " + patient + " K";
  }
}
