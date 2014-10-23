$(function() {
  var editTitle = function() {
    $(this).attr("contenteditable", true)
   return false;
  };

  var changeTitle = function(event) {
    if ( event.keyCode === 13 ) {
      $(this).attr("contenteditable", false)
      $(this).highlight();

      var currentElement = $(this)

      var id = currentElement.parents("li").data("id")
      var object = { task: { title: currentElement.text() } }

      var theElement = $(this);
      var taskData = theElement.serialize();

      var conversation = $.ajax({
        url: "/tasks/" + id,
        type: "PATCH",
        data: object
      })

      console.log("enter")
    }
  };

  $("body").on("click", ".title", editTitle);
  $("body").on("keydown", ".title", changeTitle);
});

