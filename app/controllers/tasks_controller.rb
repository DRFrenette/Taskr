class TasksController < ApplicationController
  before_action :require_login 
  def index
    @complete_tasks = current_user.tasks.complete
    @incomplete_tasks = current_user.tasks.incomplete
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

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
