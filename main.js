function updateDisplay(entry, memory=null) {
  $("#entry").text(entry);
  if (memory != null) {
    $("#memory").text(memory);
  }
}

function calculate(memory, value, operator) {
  switch (operator) {
    case "+":
        return memory + value;
    case "-":
        return memory - value;
    case "/":
        return memory / value;
    case "x":
        return memory * value;
    default:
        return 0;
}

}

$(document).ready(function() {
  var memory = 0;
  var operator = "";

  $(".num").click(function() {
    var entry = $("#entry").text();
    var cur = $(this).text();
    if (entry == "0") {
      entry = cur;
    } else {
      entry += cur;
    }
    updateDisplay(entry);
  });

  $("#decimal").click(function() {
    var entry = $("#entry").text();
    entry += $(this).text();
    updateDisplay(entry);
  });

  $(".operator").click(function() {
    var entry = $("#entry").text();
    if (operator != "") {
      memory = calculate(memory, parseFloat(entry), operator);
    } else {
      memory = parseFloat(entry);
    }
    operator = $(this).text();
    updateDisplay(0, memory);
  });

  $("#eq").click(function() {
    var entry = $("#entry").text();
    var result = calculate(memory, parseFloat(entry), operator);
    operator = "";
    updateDisplay(result, 0);
  });

  $(".clear").click(function() {
    memory = 0;
    operator = "";
    updateDisplay(memory, memory);
  })

});
