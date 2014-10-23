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
      render @task
    else 
      render partial: "error_messages",
      locals: { target: @task },
      status: 422
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy

    render json: { id: @task.id }
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    render nothing: true
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
