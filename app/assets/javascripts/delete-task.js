$(function() {
  var deleteTask = function() {
    var theElement = $(this);
    var taskData = theElement.serialize();

    var conversation = $.ajax({
      url: theElement.attr("action"),
        type: "DELETE",
        data: taskData
    });

    $(this).parent("li").fadeOut();

    return false;
  };

  $("body").on("submit", ".delete", deleteTask);
});
