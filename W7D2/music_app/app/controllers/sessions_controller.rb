# resource :sessions, only: [:create, :new, :destroy] 
class SessionsController < ApplicationController
  def new
    render :new
  end


  # WHAT PARAMS DOES...AND WHY WE DO THE REQUIRE/PERMIT THINGIE
  #params = {....., user:{username: "...", password: "..."}, ....}
  #   username: params[:username], password: params[:password] is dumb
  #   with a nested hash you can just do params[:user]


  #takes in a email and password from the new_session form
  #finds a user using that information
  #  if no user is found ... redirect to login page
  #  if user is found    ... login the user, and redirect to the user's page
  def create
    email = params[:user][:email]
    password = params[:user][:password]

    #not an instance, because we don't need it to persist past the 
    #lifespan of this method, and we also don't need to pass it to views
    user = User.find_by_credentials(email, password)

    if user
      log_in_user!(user) #this method does: session[:session_token] = user.reset_session_token!
      redirect_to user_url(user.id)
    else
      redirect_to new_session_url, status: 412
    end
  end

  #finds a user
  #resets the session token to nil, and gives the user a new token
  def destroy
    # session[:session_token] = nil     #MUST do this so current_user works properly
    # current_user.reset_session_token! #current_user is a helper method from ApplicationModel

    logout!
    redirect_to new_session_url       #back to log-in form
  end
end
