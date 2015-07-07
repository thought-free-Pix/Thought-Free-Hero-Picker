class Api::HerosController < ApplicationController

  def create
    @hero = Hero.new(params[:hero])

    if @hero.save
      render :json => @hero
    else
      render :json => @hero.errors, :status => :unprocessable_entity
    end
  end

  def index
    @heros = Hero.all
    render :json => @heros
  end

  def show
    @hero = Hero.find(params[:id])
    render :json => @hero
  end

  def update
    @hero = Hero.find(params[:id])
    if @hero.update_attributes(params[:hero])
      render :json => @hero
    else
      render :json => @hero.errors, :status => :unprocessable_entity
    end
  end

end
