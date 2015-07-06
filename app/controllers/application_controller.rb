class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :lastname, :username, :email, :password, :password_confirmation, :remember_me) }
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:username, :email, :password, :remember_me) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:background, :background_updated_at, :background_file_size, :background_content_type, :background_file_name, :avatar, :avatar_updated_at, :avatar_file_size, :avatar_content_type, :avatar_file_name, :lastname, :name, :username, :email, :password, :password_confirmation, :current_password) }
  end
end
