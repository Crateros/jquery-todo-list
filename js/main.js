$( document ).ready(function() {

  var listEntry = 0;
  var newItem = $('input').val();

  //Disable form enter
  $("form").on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();

      return false;
    }
  });

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
    var newItem = $("input").val();
    //checks for empty submission
    if(newItem !== "") {
      $("ol").append("<li>" + newItem + "</li>");
      listEntry ++;
      console.log(listEntry)
      //Saves item to local storage
      localStorage.setItem(listEntry, newItem);
    }
  });

  //After list is appended, clear input
  $("input").focus(function() {
        if ($(this).val() != "") {
            $(this).val("");
        }
    });

  //Add double click to remove list items
  $(document).on("dblclick", "li", function(){
    $(this).toggleClass("crossOut").fadeOut('slow');
    localStorage.removeItem(listEntry, newItem);
    listEntry --;
    console.log(listEntry)
    $("input").focus(function() {
         $(this).val('');
       });
  });

  //Sort list items
  $('ol').sortable();

  //Get local storage working
  for (i = 1; i <= localStorage.length; i++) {
  $("ol").append("<li>" + localStorage[i] + "</li>");
  }

  //Clear list items and local storage on click
  $("#clearButton").on("click", function() {
    localStorage.clear();
    $("ol").children().remove();
    listEntry = 0;
  });

});
