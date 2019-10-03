class SessionsController < ApplicationController
  
  #don't need @user = User.new, because the form here isn't to make a new user
  #it's to log in...aka set the session tokens.
  def new
    # debugger
    render :new
  end

  #destroying a session is basically logging out
  def destroy
    logout!
    redirect_to new_session_url
  end

  #given the params from the new form
  # 1) pull out the username and password info from params 
  # 2) find the user associated with the info
  #    a) if found: login the user (set session tokens equal) and redirect to show page
  #    b) if not found: redirect to sign-in page again
  def create 
    username = params[:user][:username]
    password = params[:user][:password]

    user = User.find_by_credentials(username, password)
    if user 
      login!(user)
      flash[:success] = "Log In Successful!"
      redirect_to user_url(user)
    else
      # this persists for one more request...after which it disappears
      flash[:error] = "Username or password is incorrect"
      redirect_to new_session_url
    end
  end
end
