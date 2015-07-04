class Api::RolesController < ApplicationController
  def create
    @role = Role.new(params[:role])

    if @role.save
      render json: @role
    else
      render json: @role.errors, status: :unprocessable_entity
    end 
  end

  def index
    @roles = Role.all
    render :json => @roles
  end

  def show
    @role = Role.find(params[:id])
    render :json => @role
  end
end
