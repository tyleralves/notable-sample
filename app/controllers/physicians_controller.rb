class PhysiciansController < ApplicationController

  def index
    respond_with Physician.all
  end

  def create
    respond_with Physician.create(physician_params)
  end

  def show
    respond_with Physician.find(params[:id])
  end

  private
  def physician_params
    params.require(:physician).permit(:name, :image_url)
  end

end
