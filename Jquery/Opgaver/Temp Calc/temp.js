$("#knap").click(function () {
  //Function variables
  $("#udregning").html = "";
  var $fra = $("#temp1").val();
  var $til = $("#temp2").val();
  var $patient = $("#tal").val();

  //If statement for Celsius conversion
  if ($fra == "c" && $til == "f") {
    var $CtF = $patient * (9 / 5) + 32;
    console.log("Celsius to Farhenheit");
    $("#udregning").html($patient + " C til " + $CtF + " F");
  } else if ($fra == "c" && $til == "k") {
    var $CtK = $patient + 273.15;
    //ERROR in line above: Celsius to Kelvin will just add the two numbers together without the calculation.
    //Seems to be the only one doing it
    console.log("Celsius to Kelvin");
    $("#udregning").html($patient + " C til " + $CtK + " K");
  } else if ($fra == "c" && $til == "c") {
    $("#udregning").html($patient + " C til " + $patient + " C");
    alert("Not possible (Celsius to celsius)");
  }

  //If statement for Fahrenheit conversion
  if ($fra == "f" && $til == "c") {
    $FtC = ($patient - 32) * 0.5556;
    $("#udregning").html($patient + " F til " + $FtC + " C");
  } else if ($fra == "f" && $til == "k") {
    $FtK = ($patient + 459.67) * (5 / 9);
    //ERROR in line above: Wrong calculation for some reason
    $("#udregning").html($patient + " F til " + $FtK + " K");
  } else if ($fra == "f" && $til == "f") {
    alert("Not possible");
    $("#udregning").html($patient + " F til " + $patient + " F");
  }

  //If statement for Kelvin conversion
  if ($fra == "k" && $til == "f") {
    var $KtF = ($patient - 273.15) * (5 / 9) + 32;
    //ERROR in line above: Wrong calculation for some reason
    $("#udregning").html($patient + " K til " + $KtF + " F");
  } else if ($fra == "k" && $til == "c") {
    var $KtC = $patient - 273.15;
    $("#udregning").html($patient + " K til " + $KtC + " C");
  } else if ($fra == "k" && $til == "k") {
    alert("Not possible");
    $("#udregning").html($patient + " K til " + $patient + " K");
  }
});
