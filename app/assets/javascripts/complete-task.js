$(function() {
  var completeTaskDataFromServer = function() {
    var complete = $(this);
    var taskData = complete.serialize();
    var conversation = $.ajax({
      type: "PATCH",
        url: complete.attr("action"),
        data: taskData
    });
    conversation.done(addTaskToList);
    refreshIncompleteTaskList (complete);
    conversation.fail(onFailure);
    return false;
  }

  $("body").on("submit", "form.edit_task", completeTaskDataFromServer);

  var refreshIncompleteTaskList = function(element){
    element.parents(li).fadeOut();
  };

  var addTaskToList = function(taskHTML) {
    var taskList = $("#completed_tasks_list");
    taskList.prepend(taskHTML);
    $("#errors").html("");
  }; 

  var onFailure = function(xhr) {
    var htmlFromServer = xhr.responseText;
    $("#errors").html(htmlFromServer);
    console.log("UPDATE FAILED");
  };

});


