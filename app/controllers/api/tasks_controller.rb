class Api::TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def index
    @tasks = Task.all

    render json: @tasks
  end

  def create
    @task = Task.new task_params

    if @task.save
      render json: @task
    else
      render json: { errors: @task.errors }, code: 403
    end
  end

  def update
    if @task.update task_params
      render json: @task
    else
      render json: { errors: @task.errors }, code: 403
    end
  end

  def destroy
    @task.destroy
    render json: @task
  end

  private
  def task_params
    params.require(:task).permit(:content)
  end

  def set_task
    @task = Task.find params[:id]
  end
end
