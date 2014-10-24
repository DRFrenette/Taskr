$(function(){
  var completeTask = function(){
    var conversation = $.ajax({
      type: $(this).attr("method"),
      url: $(this).attr("action"),
      data: $(this).serialize()
    });

    $(this).parent("li").fadeOut("fast");
    conversation.done(addTaskToCompletedList);

    return false;
  };

  var addTaskToCompletedList = function(html){
    var element = $(html).hide();
    $("#completed_tasks_list").prepend(element);
    element.fadeIn();
  };


  $("body").on("submit", ".complete-form", completeTask);
});
