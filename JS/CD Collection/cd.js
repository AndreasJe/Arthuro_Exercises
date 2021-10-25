//Starting function on button press
document.getElementById("knap").addEventListener("click", addCD);

function addCD() {
  const tit = document.getElementById("titel").value;
  const art = document.getElementById("kunstner").value;
  const yea = document.getElementById("aar").value;
  const del = `<button id="deleter">&#128465;&#65039;
  </button>`;

  const stack = document.getElementById("collection");
  var row = stack.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerText = tit;
  cell2.innerText = art;
  cell3.innerText = yea;
  cell4.innerHTML = del;
  document.getElementById("deleter").addEventListener("click", removeCD);
}

function removeCD() {
  // event.target will be the input element.
  var td = event.target.parentNode;
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}
