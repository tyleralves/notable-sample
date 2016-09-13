class ApplicationController < ActionController::Base
  def angular
    # flash[:notice] = "Toon has been tagged"
    render 'layouts/application'
  end

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters, if: :devise_controller?

  respond_to :json

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :name, :type])
  end
end
