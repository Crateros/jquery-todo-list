$( document ).ready(function() {

  //Highlight input field on click
  $("input").focus(function(){
    $(this).addClass("outlineClick");
  });

  //Clear input field on click
  $("input").focus(function() {
    if ($(this).val() == "Add an Item") {
      $(this).val('');
    }
  });

  //Reset dummy input if focus is lost
  $("input").blur(function() {
    if ($(this).val()=="") {
      $(this).val("Add an Item");
    }
  });

  //Add click listener to '+ List Item' button, append list item on click
  $("#addButton").on("click", function(){
    var newItem = $('input').val();
    //checks for empty submission
    if(newItem !== "") {
      $("ol").append("<li>" + newItem + "</li>");
    }
  });

  //After list is appended, clear input
  $("input").focus(function() {
        if ($(this).val() != "") {
            $(this).val("");
        }
    });

  //Upon appending item, clear inpput field
  $("input")

  //Add double click to remove list items
  $(document).on("dblclick", "li", function(){
    $(this).toggleClass("crossOut").fadeOut('slow');

    $("input").focus(function() {
         $(this).val('');
       });
  });
  $('ol').sortable();
});
