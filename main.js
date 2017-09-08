
/**
* Updates Display accordingly.
* @param {String} entry - current value string
* @param {Number} memory - value in memory
*/
function updateDisplay(display, output) {
  $("#"+display).text(output);
}

/**
* Calculates value according to operator.
* @param {Number} memory - value in memory
* @param {Number} value - current value
* @param {String} operator - mathematical operator string
* @return {Number} calculated value from memory and current value
*/
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

/**
* Updates entry string if entry combined with current symbol is a valid input.
* @param {String} entry - current value string
* @param {String} sym - current entry symbol
* @return {String} concatenated entry string 
*/
function checkNumber(input) {
  var re = new RegExp(/^([+-])?([1-9][0-9]*)(\.[0-9]*)?$/);
  return re.test(input);
}

$(document).ready(function() {
  var memory = 0;
  var operator = "+";

  $(".operator").click(function() {
    var entry = $("#entry").text();
    if (checkNumber(entry)) {
      memory = calculate(memory, parseFloat(entry), operator);
    }
    operator = $(this).text();
  });

  $(".num, #decimal, .operator, #eq").click(function() {
    var mem = $("#memory").text();
    var entry = $("#entry").text();
    var sym = $(this).text();
    if (checkNumber(entry+sym)) {
      updateDisplay("entry", entry+sym);
    } else {
      updateDisplay("entry", sym);
    }
  });

  // $("#eq").click(function() {
  //   var entry = $("#entry").text();
  //   if (chained) {
  //     memory = calculate(memory, parseFloat(entry), operator);
  //     chained = false
  //   } else {
  //     memory = entry
  //   }
  //   operator = "";
  //   updateEntry(memory);
  //   updateMemory(0);
  // });

  $(".clear").click(function() {
    memory = 0;
    operator = "";
    updateEntry(0);
  });

});
