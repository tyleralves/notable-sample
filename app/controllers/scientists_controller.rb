class ScientistsController < ApplicationController

  def index
    respond_with Scientist.all
  end

  def create
    respond_with Scientist.create(scientist_params)
  end

  def show
    respond_with Scientist.find(params[:id])
  end

  private
  def scientist_params
    params.require(:scientist).permit(:name, :image_url)
  end

end
