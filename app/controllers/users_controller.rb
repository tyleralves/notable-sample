class UsersController < ApplicationController
  def index
    respond_with User.all
  end

  def create
    respond_with User.create(user_params)
  end

  def show
    respond_with User.find(params[:id])
  end

  def get_patients
    user = User.find(params[:id])

    respond_with user.patients
  end

  private
  def user_params
    params.require(:user).permit(:name, :image_url)
  end

end
