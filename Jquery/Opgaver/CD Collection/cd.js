//Starting function on button press
$("#knap").click(addCD);

function addCD() {
  var $tit = $("#titel").val();
  var $art = $("#kunstner").val();
  var $yea = $("#aar").val();
  var $del = `<button class="deleter">&#128465;&#65039;
  </button>`;

  var data =
    `<tr><td>` +
    $tit +
    `</td>` +
    `<td>` +
    $art +
    `</td>` +
    `<td>` +
    $yea +
    `</td>` +
    `<td>` +
    $del +
    `</td></tr>`;
  $("#collection").append(data);

  $(".deleter").click(function () {
    $(this).parents("tr").remove();
  });
}
