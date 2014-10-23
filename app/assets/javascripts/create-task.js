$(function() {
  var createTaskForm = $("form"); 
  createTaskForm.submit(function() {
    console.log("Create");
  });
  return false;
});
