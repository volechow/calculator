/**
* Filename: 	 main.js
* Description: Application logic for online calculator.
* @version 	   0.7
*
* @author 		 Victor Olechow
* E-Mail: 		 victor.olechow@haw-hamburg.de
* Website: 	   http://users.informatik.haw-hamburg.de/~ace554/
*
* Copyright (C) 2017, Victor Olechow
* All rights reserved.
*/

/**
* Updates Display accordingly.
* @param {String} display - name of display to be updated
* @param {String} output - output value string
*/
function updateDisplay(display, output) {
  $("#"+display).text(output);
}

/**
* Updates displays accordingly.
* @param {String} value_in_memory
* @param {String} current_value
* @param {String} operator
*/
function updateCalculator(value_in_memory, current_value, operator) {
  updateDisplay("memory", value_in_memory);
  updateDisplay("entry", current_value);
  updateDisplay("operator", operator);
}

/**
* Calculates value according to operator.
* @param {Number} val_in_mem - value in memory
* @param {Number} cur_value - current value
* @param {String} operator - mathematical operator string
* @return {Number} calculated value in memory and current value
*/
function calculate(value_in_memory, current_value, operator) {
  switch (operator) {
    case "+":
        return value_in_memory + current_value;
    case "-":
        return value_in_memory - current_value;
    case "/":
        return value_in_memory / current_value;
    case "x":
        return value_in_memory * current_value;
    default:
        return 0;
  }
}

$(document).ready(function() {
  var new_value_flag = true;
  var operator = "";
  var memory = null;

  $(".clear").click(function() {
    // cleanup
    new_value_flag = true;
    operator = "";
    memory = null;
    updateCalculator(0,0,"");
  });

  $(".num, #decimal").click(function() {
    // initializations
    var current_value = $("#entry").text();
    var current_char = $(this).text();
    var updated_value = current_value+current_char;
    // preceeding zeros are not allowed
    if (new_value_flag || current_value == "0") {
      updateDisplay("entry", current_char);
      new_value_flag = false;
    // won't update display if not a number
    } else if (!isNaN(updated_value)) {
      updateDisplay("entry", updated_value);
    }
  });

  $(".operator").click(function() {
    var current_value = parseFloat($("#entry").text());
    // calculate value from memory if available
    if (memory != null) {
      current_value = calculate(memory, current_value, operator);
    }
    // cleanup
    new_value_flag = true;
    operator = $(this).text();
    memory = current_value;
    updateCalculator(current_value,0,operator);
  });

  $("#eq").click(function() {
    var current_value = parseFloat($("#entry").text());
    // calculate value from memory if available
    if (memory != null) {
      current_value = calculate(memory, current_value, operator);
    }
    // cleanup
    new_value_flag = true;
    operator = "";
    memory = null;
    updateCalculator(0,current_value,"");
  });

});
