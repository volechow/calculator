function isValid(str) {
	if (str.match(/^0+\d+(\.\d+)?$/g)) {
		console.log("no match")
		return false;
	}
	if (str.match(/^\d+\.?(\d+)?$/g)) {
		return true;
	}
	return false;
}

function calcValue(a, b, op_str) {
	switch(op_str) {
		case "+": return a+b;
		case "-": return a-b;
		case "x": return a*b;
		case "/":
			if (b === 0) { return NaN; } 
			else { return a/b; }
		case "=": return b;
	}
}

$(document).ready(function() {

	$(".num").click(function() {
		var s1 = $("#entry").text();
		var s2 = $(this).text();
		switch {
			case (s1=="0" && s2 == "."): $("#entry").text(s1+s2); break;
			case (s1=="0"): $("#entry").text(s2); break;
			case (s1=="NaN"): $("#entry").text(s2); break;
			case (isValid(s1+s2)): $("#entry").text(s1+s2); break;
		}
	});

	$(".clear").click(function() {
		$("#entry").text("0");
		dict.current_value = 0;
		dict.memory = 0;
		dict.operator = "";
		console.log(dict);
	});

	$(".operator").click(function() {
		dict.memory = calcValue(dict.memory, 
								dict.current_value, 
								$(this).text());
		dict.operator = $(this).text();
		dict.current_value = 0;
		$("#entry").text("0");
		console.log(dict);
	});

	$("#eq").click(function() {
		result = calcValue(dict.memory, dict.current_value, dict.operator);
		$("#entry").text(result);
		dict.current_value = Number($("#entry").text());
		console.log(dict);
	});
});
