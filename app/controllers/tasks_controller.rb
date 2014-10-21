class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    @task = Task.new
  end

  def create
    current_user.tasks.create(task_params)
    redirect_to root_path
  end

  private

  def task_params
    task_params = params.require(:task).permit(:title, :description)
  end
end
