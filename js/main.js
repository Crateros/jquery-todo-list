$( document ).ready(Function() {

  //Add click listener to '+ List Item' button, append list item on click
  $("#addButton").on("click", function(){
    console.log("click enabled!");
    var newItem = $('input').val();
    $("ol").append("<li>" + newItem + "</li>");
  })










});
