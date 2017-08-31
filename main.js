$(document).ready(function() {
  var memory = 0;

  $(".num").click(function() {
    var mem = $("#entry").text();
    var cur = $(this).text();
    if (mem == "0") {
      $("#entry").text(cur);
    } else {
      $("#entry").text(mem+cur);
    }
  });

  $(".clear").click(function() {
    $("#entry").text("0");
  })

});
