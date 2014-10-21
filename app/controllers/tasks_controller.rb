class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    @task = Task.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    @tasks = current_user.tasks
    if @task.save 
      redirect_to root_path
    else 
      render :index
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
