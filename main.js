function updateDisplay(ent, mem) {
  entry = ent;
  memory = mem;
  $("#entry").text(ent);
  $("#memory").text(mem);
}

var memory = "0";
var entry = "0";

$(document).ready(function() {
  var cur = "";
  var chained = false;

  $(".num").click(function() {
    cur = $(this).text();
    if (entry == "0") {
      updateDisplay(cur, cur);
    } else {
      updateDisplay(entry+cur, memory+cur);
    }
    if (chained) {
      updateDisplay(cur, memory+cur);
      chained = false;
    }
  });

  $("#decimal").click(function() {
    cur = $(this).text();
    updateDisplay(entry+cur, memory+cur);
  });

  $(".operator").click(function() {
    cur = $(this).text();
    updateDisplay(cur, memory+cur);
    chained = true;
  });

  $(".clear").click(function() {
    updateDisplay("0", "0");
  })

});
