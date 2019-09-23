

$("#hideButton").click(function(){
  $("p").hide();
  $("#hideButton").attr("disabled", true);
  $("#showButton").attr("disabled", false);
});

$("#showButton").attr("disabled", true);
$("#showButton").click(function(){
  $("#firstP").show();
  $("#secP").show();
  $("#hideButton").attr("disabled", false);
  $("#showButton").attr("disabled", true);
});
