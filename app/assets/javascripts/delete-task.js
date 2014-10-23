$(function() {
  var deleteTaskForm = $("form.delete");
  deleteTaskForm.submit(function() {
    var conversation = $.ajax({
      type: "DELETE", 
      url: $(this).attr("action"),
      data: $(this).serialize()
    });
    conversation.done(function(deletedTask){
      $(".task_" + deletedTask.id).fadeOut()
    });
    return false;
  });
});


